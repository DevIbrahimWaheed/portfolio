import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Divider ,Timeline} from 'antd';


function MyProject(props){

return (
  <>
  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Divider><h2>My Projects</h2></Divider>
             <Divider  orientation="left" ><h2>Learning the basics</h2></Divider>
             <Divider orientation="left" ><h2>Web Development Full Stack</h2></Divider>
              <Divider orientation="left" ><h2>Android OS</h2></Divider>
            </div>
   <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Divider><h2>Goals</h2></Divider>

            </div>
  </>
  )



}

export default MyProject
