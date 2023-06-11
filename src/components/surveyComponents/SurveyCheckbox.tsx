import { Checkbox, Space, Typography } from 'antd';
import { FC } from 'react';

const Component: FC<CheckboxOption> = ({ title, list, orientation, value, onChange }) => {
  return (
    <div className={'space-y-2'}>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Checkbox.Group value={value} onChange={onChange}>
        <Space direction={orientation} wrap>
          {list.map((o) => {
            return (
              <Checkbox
                value={o.value}
                defaultChecked={o.checked}
                disabled={o.disabled}
                key={o.value}
              >
                {o.label}
              </Checkbox>
            );
          })}
        </Space>
      </Checkbox.Group>
    </div>
  );
};

export default Component;
