import { Typography } from 'antd';
import cls from 'classnames';
import { FC } from 'react';
import { getTextAlign } from '@/utils/styles';

const SurveyParagraph: FC<ParagraphOption> = ({ title, alignment }) => {
  return (
    <Typography.Paragraph className={cls('whitespace-pre-wrap', getTextAlign(alignment))}>
      {title}
    </Typography.Paragraph>
  );
};

export default SurveyParagraph;
