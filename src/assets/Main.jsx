import React, {useState} from 'react';
import { Layout, Typography, Splitter } from 'antd';
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
          <Splitter style={{height : 'auto'}}>
            <Splitter.Panel defaultSize="20%" min="10%" max="70%">
              <Sider style={{ background: 'white' }}/>
            </Splitter.Panel>
            <Splitter.Panel style={{
                  margin: '16px 16px 16px 16px',
                  padding: 24,
                  background: 'white',
                  borderRadius: 20,
                  width: '80%',
                }}>

              <Text>Content</Text>

            </Splitter.Panel>
          </Splitter>
        </Layout>
      </Layout>
    // </Flex>
  );
};
export default Main;