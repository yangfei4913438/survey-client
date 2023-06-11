import { FC } from 'react';
import { Radio, Space, Typography } from 'antd';

const SurveyRadio: FC<RadioOption> = ({ title, options, orientation, value, onChange }) => {
  return (
    <div className='space-y-2'>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Radio.Group value={value} onChange={onChange}>
        <Space direction={orientation} wrap>
          {options.map((opt) => {
            return (
              <Radio value={opt.value} key={opt.value}>
                {opt.label}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default SurveyRadio;
