import React from 'react';
import { Form, Input, Button } from 'antd';

function Contact(props){

  const onFinish = values => {
    const { name, email, message } = values;
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:someone@example.com?subject=Portfolio Contact&body=${body}`;
  }

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      <Form name="contact" layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}> 
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}> 
          <Input />
        </Form.Item>
        <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter a message!' }]}> 
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Contact
