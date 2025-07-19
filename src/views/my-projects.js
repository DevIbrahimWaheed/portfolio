import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Divider ,Timeline} from 'antd';


function MyProject(props){

return (
  <>
  <div className="site-layout-background container">
            <Divider><h2 className="heading">My Projects</h2></Divider>
             <Divider  orientation="left" ><h2 className="heading">Learning the basics</h2></Divider>
             <Divider orientation="left" ><h2 className="heading">Web Development Full Stack</h2></Divider>
              <Divider orientation="left" ><h2 className="heading">Android OS</h2></Divider>
            </div>
   <div className="site-layout-background container">
            <Divider><h2 className="heading">Goals</h2></Divider>

            </div>
  </>
  )



}

export default MyProject
