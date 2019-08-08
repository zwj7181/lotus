import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import InputNumber from '@/components/Form/InputNumber';
import InputInterval from '@/components/Form/InputInterval';
import RadioAndInput from '@/components/Form/RadioAndInput';
import CheckboxAndInput from '@/components/Form/CheckboxAndInput';

const options = [
  { label: '无', value: '无' },
  { label: '头晕', value: '头晕' },
  { label: '头痛', value: '头痛' },
  { label: '呕吐', value: '呕吐' },
  { label: '浮肿', value: '浮肿' },
  { label: '便秘', value: '便秘' },
  { label: '白带', value: '白带' },
  { label: '胸闷', value: '胸闷' },
  { label: '腰酸', value: '腰酸' },
  { label: '肚痛', value: '肚痛' },
  { label: '抽筋', value: '抽筋' },
  { label: '流血', value: '流血' },
  { label: '其他', value: '其他' },
];
const options1 = [
  { label: '未见异常', value: '未见异常' },
  { label: '异常', value: '异常' },
];

class componentName extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{ width: '680px' }}>
        <Form.Item label="用户名">
          {getFieldDecorator('username', {
            rules: [{ required: false, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item label="饮酒">
          {getFieldDecorator('drink', {
            rules: [{ required: false, message: 'Please input your drink!' }],
          })(
            <InputNumber suffix="毫升/天" placeholder="饮酒量" />
          )}
        </Form.Item>
        <Form.Item label="血压">
          {getFieldDecorator('blood', {
            rules: [{ required: false, message: 'Please input your blood!' }],
          })(
            <InputInterval
              suffix="mmHg"
              placeholder={{
                min: '低压',
                max: '高压',
                separator: '/'
              }}
            />
          )}
        </Form.Item>
        <Form.Item label="心脏">
          {getFieldDecorator('cardiac', {
            rules: [{ required: false, message: 'Please input your cardiac!' }],
          })(
            <RadioAndInput options={options1} />
          )}
        </Form.Item>
        <Form.Item label="症状">
          {getFieldDecorator('symptom', {
            rules: [{ required: false, message: 'Please input your cardiac!' }],
          })(
            <CheckboxAndInput options={options} />
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            确 定
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(componentName);
