import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Menu,Layout } from 'antd';
import 'antd/dist/antd.css';
import {
      MenuUnfoldOutlined,
  MenuFoldOutlined,
  LinkedinOutlined,
  GithubOutlined
} from '@ant-design/icons'


const {SubMenu} = Menu;
const {Sider} = Layout


function SideBar(props)  {
    const [collapsed,setCollapsed] = useState(false);

    const toggleCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    }


    return (
     <>

  <Sider>
          <div className="logo" />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" >
           Home
          </Menu.Item>
          <Menu.Item key="2" >
           About Me
          </Menu.Item>
          <Menu.Item key="3">
           My Projects
          </Menu.Item>
          <Menu.Item key="4" icon={<LinkedinOutlined />}>
            LinkedIn
          </Menu.Item>
          <Menu.Item key="5" icon={<GithubOutlined />}>
            GitHub
          </Menu.Item>
        </Menu>
        </Sider>
     </>
        
    )


    
}

export default SideBar