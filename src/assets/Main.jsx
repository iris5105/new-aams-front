import React, {useState} from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Flex, Breadcrumb, Layout, Menu, theme, Typography } from 'antd';
import Header from './Header.jsx';
import Sider from './Sider.jsx';
const {Text } = Typography
const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    // <Flex gap="middle" wrap>
      <Layout>
          <Header />
        <Layout style={{ display: 'flex', flexDirection: 'row' }}>
          <Sider style={{ background: 'white' }}/>
          <Layout
            style={{
              margin: '16px 16px 0 16px',
              padding: 24,
              background: 'white',
              borderRadius: 20,
              width: '80%',
            }}
          >
          <Text>Content</Text>
          </Layout>
        </Layout>
      </Layout>
    // </Flex>
  );
};
export default Main;