// 问卷编辑器组件类型对象
export const editorComponentTypes = {
  header: 'editor_header',
  title: 'editor_title',
  paragraph: 'editor_paragraph',
  input: 'editor_input',
  textarea: 'editor_textarea',
  radio: 'editor_radio',
  checkbox: 'editor_checkbox',
};

// 问卷id
export const QuestionID = 'questionId';

// 可以被提交数据的字段类型
export const formDataTypes = [
  editorComponentTypes.input,
  editorComponentTypes.textarea,
  editorComponentTypes.radio,
  editorComponentTypes.checkbox,
];

// http方法类型
export type RestfulType = 'get' | 'post' | 'put' | 'patch' | 'delete';

// 配置key的类型
export type ConfigKeyType = 'answer' | 'question';

interface ConfigObject {
  // restful 方法
  method: RestfulType;
  // 路由
  url: string;
  // 是否需要拼接路径ID参数
  needId: boolean;
}

// 配置对象的类型
type ApiConfigType = { [T in ConfigKeyType]: ConfigObject };
// api 配置
export const apiConfig: ApiConfigType = {
  // 提交答卷
  answer: {
    method: 'post',
    url: '/api/answer', // 客户端的需要代理，所以这里不能写域名和端口
    needId: false,
  },
  // 获取问卷信息
  question: {
    method: 'get',
    url: 'http://survey-server:3005/api/question',
    needId: true,
  },
};
