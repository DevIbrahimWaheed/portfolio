import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Layout, Menu, Typography, Divider, Timeline, Form, Input, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ProjectOutlined,
  MailOutlined
} from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;


import background from './assets/image.jpg';
import logo from './assets/logo.jpg';
import profile from './assets/Profile.jpg';




const menuItems = [
  { key: '/', label: 'Home', icon: <HomeOutlined /> },
  { key: '/about', label: 'About', icon: <InfoCircleOutlined /> },
  { key: '/projects', label: 'Projects', icon: <ProjectOutlined /> },
  { key: '/contact', label: 'Contact', icon: <MailOutlined /> },
];

const Sidebar = () => (
  <Sider breakpoint="lg" collapsedWidth="0">
<div style={{ textAlign: 'center', padding: '16px' }}>
  <img src={logo} alt="Logo" style={{ width: '60%', borderRadius: '8px' }} />
</div>

    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}> 
      {menuItems.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          <NavLink to={item.key}>{item.label}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  </Sider>
);

const Home = () => (
<div style={{
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}}>
  <Title level={1} style={{ color: 'white' }}>Welcome to Ibby's Universe</Title>
  <Paragraph style={{ color: 'white', fontSize: '18px' }}>
    Exploring tech, creativity, and the cosmos one project at a time.
  </Paragraph>
</div>

);

const About = () => (
  <div>
    <Title level={2}>About Me</Title>
    <Avatar src={profile} size={128} style={{ marginBottom: '16px' }} />

    <Paragraph>
      I'm a Computer Science graduate from Coventry University with a passion for developing scalable applications and exploring new technologies.
    </Paragraph>
    <Title level={3}>Career Timeline</Title>
    <Timeline>
      <Timeline.Item>Graduated in 2021</Timeline.Item>
      <Timeline.Item>Built initial portfolio and Github repo</Timeline.Item>
      <Timeline.Item>Applied for software developer roles</Timeline.Item>
      <Timeline.Item>Ongoing personal and freelance projects</Timeline.Item>
    </Timeline>
  </div>
);

const Projects = () => (
  <div>
    <Title level={2}>My Projects</Title>
    <Divider orientation="left">Learning & Experiments</Divider>
    <Paragraph>Exploring foundational programming concepts and technologies like React, Node.js, and Spring Boot.</Paragraph>

    <Divider orientation="left">Professional Work</Divider>
    <Paragraph>Contributions to client projects in web apps, backend systems, and cloud deployments.</Paragraph>

    <Divider orientation="left">Future Goals</Divider>
    <Paragraph>Advance into cloud-native development, AI integrations, and scalable microservices architecture.</Paragraph>
  </div>
);

const Contact = () => {
  const onFinish = (values) => {
    const { name, email, message } = values;
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:someone@example.com?subject=Portfolio Inquiry&body=${body}`;
  };

  return (
    <div>
      <Title level={2}>Contact Me</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}> 
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}> 
          <Input />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message!' }]}> 
          <Input.TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">Send</Button>
      </Form>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
            <Title level={2}>Ibrahim Waheed's Portfolio</Title>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2025 Ibrahim Waheed. All rights reserved.</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
