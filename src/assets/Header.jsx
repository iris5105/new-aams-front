import React from 'react';
import { Layout, Typography, Flex} from 'antd';
import Icon, {UserOutlined} from '@ant-design/icons';
const { Text, Link, Title  } = Typography;

const Header = () => {

  return (
      <Layout
      style={{
        display: 'flex',
        height : '50px',
        backgroundColor : '#3f51b5',
        paddingLeft : '10px',
        paddingRight : '10px'
      }}
    >
      <Flex horizontal justify='space-between' align='center'
      
      >
        <Flex horizontal justify='flex-start' align='center'>
          <div className="demo-logo" />
          <Title  level = {2} italic style={{color : 'yellow', marginTop : '0'}}>A</Title>
          <Title  level = {4} style={{color : 'white', marginTop : '0'}}>dvanced Asset Management System.</Title>
        </Flex>
        <Flex horizontal justify='flex-start' align='center'>
          <Text style={{color : 'white'}}>사용자 </Text>
          <Text style={{color : 'white'}}>님반갑습니다.</Text>
        </Flex>
        <Flex horizontal justify='flex-start' align='center'>
          <UserOutlined style={{ fontSize : '18px',color : 'white'}}/>
          <Text style={{ fontSize : '18px',color : 'white'}}>Logout</Text>
        </Flex>
        
      </Flex>
    </Layout>
  )
}

export default Header;