import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { CustomForm } from './uitestCss';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Diaolog = () => {
  const [form] = Form.useForm();

  // const onFinish = async (values: Values) => {
  //   console.log(values)

  // };

  // const success = () => {
  //   message.success('done !');
  // };
  return (
    <CustomForm
      // {...layout}
      name="nest-messages"
      // onFinish={onFinish}
      validateMessages={validateMessages}
      form={form}
      layout="vertical"
    >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[{ type: 'email' }, { required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Age']}
        label="Age"
        rules={[{ type: 'number', min: 0, max: 99 }, { required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'address']}
        label="address"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'chuc_vu']}
        label="position"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" className="btn">
          Submit
        </Button>
      </Form.Item>
    </CustomForm>
  );
};
export default Diaolog;
