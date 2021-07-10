import './App.css';
import 'antd/dist/antd.css'
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// components
import Sidebar from './components/sidebar'

// views

import Home from './views/home'
import About from './views/about'
import MyProject from './views/my-projects'


const { Header, Content, Footer } = Layout;
function App() {

  
  return (
     <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
    <Layout className="site-layout">
          <Content style={{ margin: '10px' }}>
         
            <Switch>
            <Route path="/portfolio" children={<Home/>} exact/>
            
            <Route path="/about" children={<About/>} />
            <Route path="/my-project" children={<MyProject/>} />
            
            
            </Switch>
         
          </Content>
        </Layout>
     </Layout>
        </Router>

  );
}

export default App;
