import { FC } from 'react';
import { Input, Typography } from 'antd';

const SurveyInput: FC<InputOption> = ({ title, placeholder, value, onChange }) => {
  return (
    <div className='space-y-2'>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default SurveyInput;
