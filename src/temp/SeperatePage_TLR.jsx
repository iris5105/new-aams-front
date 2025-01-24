import React from 'react'
import { Layout, Typography } from 'antd'
import { Resizable } from 're-resizable';

const {Text} = Typography;
const SeperatePage_TLR = () => {

  return (
    <Layout>
      <Resizable
        defaultSize={{ width: '50%', height: '100%' }}
        maxWidth={800}
        minHeight={500}
      >
        <Layout>
          <Layout.Sider width={200}>
            <Text>Left</Text>
          </Layout.Sider>
          <Layout.Content>
            <Text>Right</Text>
          </Layout.Content>
        </Layout>
      </Resizable>
    </Layout>

  )
}
export  default SeperatePage_TLR