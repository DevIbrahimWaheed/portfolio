import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Layout } from 'antd';

import Sidebar from './components/sidebar'
const { Header, Content, Footer } = Layout;
function App() {

  
  return (
    
    <Layout style={{ minHeight: '100vh' }}>

    <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 30, minHeight: 365 }}>
             Content area
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created By Ibrahim Waheed using Antd</Footer>
        </Layout>
     </Layout>

  );
}

export default App;
