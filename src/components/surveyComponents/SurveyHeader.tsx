import { FC } from 'react';
import { Typography } from 'antd';
import cls from 'classnames';

import { getFontSize, getTextAlign } from '@/utils/styles';

const SurveyHeader: FC<HeaderOption> = ({
  title,
  titleAlignment,
  desc,
  descAlignment,
  titleLevel,
}) => {
  return (
    <div className='space-y-2'>
      <Typography.Title
        level={titleLevel}
        className={cls(getFontSize(titleLevel), getTextAlign(titleAlignment))}
      >
        {title}
      </Typography.Title>
      <Typography.Paragraph className={cls('whitespace-pre-wrap', getTextAlign(descAlignment))}>
        {desc}
      </Typography.Paragraph>
    </div>
  );
};

export default SurveyHeader;
