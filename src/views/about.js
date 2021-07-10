import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Divider ,Timeline} from 'antd';
import {
 ClockCircleFilled
} from '@ant-design/icons'

function About(props){



  
const contentStyle = {
  height: '25em',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


return (
  
  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             <Divider orientation="left"><h3>About Me</h3></Divider>
              <h2>Who Am I</h2>
            <p> I am a computer science grad from Coventry university. I love developing and expanding my own programming skills 
            and am often amazed on the ever growing of programming languages. </p>
                 <p> Click here to download my CV/Resume  currently is short as i have recently graduated 😅 </p>
            <Divider ><h3>What I Do </h3></Divider>
            <h2>2 year Career Plan</h2>
     
<Timeline mode="alternate">
    <Timeline.Item color="green">Graduate Coventry University 2021 July</Timeline.Item>
    <Timeline.Item color="green">Write Up CV and Build Up Github Repo so that it work Ready 2021 July to August</Timeline.Item>
    <Timeline.Item color="red">
    Apply for a Graduate Role in Software development 2021 August to December
    </Timeline.Item>
    <Timeline.Item color="red">Create web project on the side </Timeline.Item>
    <Timeline.Item>TBD</Timeline.Item>
  </Timeline>
            
            </div>
              
  
  
  )



}

export default About
