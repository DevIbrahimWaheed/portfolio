import React from 'react';
import { Card } from 'antd';

function ProjectCard({ title, description, link, linkLabel = 'View' }) {
  return (
    <Card title={title} hoverable>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkLabel}
        </a>
      )}
    </Card>
  );
}

export default ProjectCard;
