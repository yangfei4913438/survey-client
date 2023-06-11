import { Input, Typography } from 'antd';
import { FC } from 'react';

const SurveyTextarea: FC<TextareaOption> = ({ title, placeholder, value, onChange }) => {
  return (
    <div className='space-y-2'>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Input.TextArea
        placeholder={placeholder}
        size={'large'}
        rows={5}
        className='max-h-80'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SurveyTextarea;
