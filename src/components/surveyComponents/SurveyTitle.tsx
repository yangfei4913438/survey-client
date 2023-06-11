import { FC } from 'react';
import { Typography } from 'antd';
import cls from 'classnames';
import { getFontSize, getTextAlign } from '@/utils/styles';

const SurveyTitle: FC<TitleOption> = ({ title, level, alignment }) => {
  return (
    <Typography.Title level={level} className={cls(getFontSize(level), getTextAlign(alignment))}>
      {title}
    </Typography.Title>
  );
};

export default SurveyTitle;
