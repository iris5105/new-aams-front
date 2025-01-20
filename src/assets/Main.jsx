import React, {useState} from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Flex, Breadcrumb, Layout, Menu, theme } from 'antd';
import Header from './Header.jsx';
import Sider from './Sider.jsx';
const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Flex gap="middle" wrap>
    <Layout> 
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor : '#3f51b5'
        }}
      >
       <div className="demo-logo" />
       
      </Header>
      <Layout style={{ display: 'flex', flexDirection: 'row' }}>
      <Sider style={{ background: colorBgContainer, }}/>
        <Layout
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            width: '75%'
          }}
        >
          Content
        </Layout>
        </Layout>
      </Layout>
    </Flex>
  );
};
export default Main;