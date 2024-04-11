import PageWrapper from '@/components/PageWrapper';
import { getQuestionById } from '@/services/question';
import { getComponent } from '@/components/surveyComponents';
import { Button, Form, Input } from 'antd';
import { formDataTypes, QuestionID } from '@/consts';
import { useRouter } from 'next/router';
import { postAnswer } from '@/services/answer';

export default function Question(props: InitProps) {
  const { errno, data, message = '' } = props;
  const [form] = Form.useForm();
  const router = useRouter();

  // 数据错误
  if (errno !== 0) {
    return (
      <PageWrapper title='错误'>
        <h1>错误</h1>
        <p>{message}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = '',
    desc = '',
    js = '',
    css = '',
    isDeleted,
    isPublished,
    componentList = [],
  } = data || {};

  // 已经被删除的，提示错误
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷已经被删除</p>
      </PageWrapper>
    );
  }

  // 尚未发布的，提示错误
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </PageWrapper>
    );
  }

  const onFinish = async () => {
    // 取出有效的字段类型
    const validIds = componentList
      .filter((c) => formDataTypes.includes(c.type))
      .map((c) => c.fe_id);

    const fv = form.getFieldsValue();

    const { questionId, ...rest } = Object.fromEntries(
      Object.entries(fv).filter(([k, _]) => validIds.includes(k) || k === QuestionID)
    );

    const answer = {
      questionId,
      answerList: Object.entries(rest as Object).map(([k, v]) => ({componentFeId: k, value: v }))
    }

    await postAnswer(answer)
      .then((res) => {
        if (res.errno === 0) {
          router.replace('/success');
        } else {
          router.replace('/fail');
        }
      })
      .catch(() => {
        router.replace('/fail');
      });
  };

  return (
    <PageWrapper title={title} desc={desc} js={js} css={css}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name={QuestionID} initialValue={id} hidden>
          <Input type={'hidden'} />
        </Form.Item>

        {componentList.map((c) => {
          const ComponentElem = getComponent(c);
          if (ComponentElem) {
            return (
              <Form.Item name={c.fe_id} key={c.fe_id}>
                {ComponentElem}
              </Form.Item>
            );
          }
        })}

        <Form.Item className={'text-center'}>
          <Button type={'primary'} htmlType={'submit'}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </PageWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const { id = '' } = context.params;

  // 根据 id 获取问卷数据
  const data = await getQuestionById(id);

  console.log('data', data);

  return {
    props: data,
  };
}
