import React from 'react';
import { Divider, Row, Col } from 'antd';
import ProjectCard from '../components/ProjectCard';

function MyProject(props){
  const projects = [
    {
      title: 'Learning the basics',
      description: 'Practising fundamental programming concepts',
      link: '#'
    },
    {
      title: 'Web Development Full Stack',
      description: 'Building a complete stack web application',
      link: '#'
    },
    {
      title: 'Android OS',
      description: 'Creating small apps for Android OS',
      link: '#'
    }
  ];

  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Divider><h2>My Projects</h2></Divider>
        <Row gutter={[16, 16]}>
          {projects.map(project => (
            <Col xs={24} sm={12} md={8} key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Divider><h2>Goals</h2></Divider>
      </div>
    </>
  )
}

export default MyProject;
