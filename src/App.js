import './App.css';
import 'antd/dist/antd.css'
import { Layout } from 'antd';



import Sidebar from './components/sidebar'
const { Header, Content, Footer } = Layout;
function App() {

  
  return (
    
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
    <Layout className="site-layout">
   <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '10px' }}>
           
            <div className="site-layout-background" style={{ padding: 20, minHeight: 365 }}>
      
             Developed
            </div>
          </Content>
        </Layout>
     </Layout>

  );
}

export default App;
