import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Menu,Layout } from 'antd';
import 'antd/dist/antd.css';
import {
      MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'


const {SubMenu} = Menu;
const {Sider} = Layout


function SideBar(props)  {
    const [collapsed,setCollapsed] = useState({
        collapsed:false
    });

    const toggleCollapse = () => {
        setCollapsed({
            collapsed:true
        })
    }


    return (
     <>


        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" >
            Option 1
          </Menu.Item>
          <Menu.Item key="2" >
            Option 2
          </Menu.Item>
          <Menu.Item key="3">
            Option 3
          </Menu.Item>
        </Menu>
     </>
        
    )


    
}

export default SideBar