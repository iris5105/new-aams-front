import React, {useState} from 'react';
import { Layout, Typography, Splitter } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Sider from './Sider.jsx';


const {Text } = Typography
const Main = () => {

  return (
        <Layout>
                <Header />
                <Layout style={{ display: 'flex', flexDirection: 'row' }}>
                  <Splitter style={{ height: 'auto' }}>
                    <Splitter.Panel defaultSize="20%" min="10%" max="70%">
                      <Sider style={{ background: 'white' }} />
                    </Splitter.Panel>
                    <Splitter.Panel
                      style={{
                        // margin: '16px',
                        padding: 0,
                        background: 'white',
                        // borderRadius: 20,
                        width: '80%',
                      }}
                    >

                    <Outlet ></Outlet>
                    </Splitter.Panel>
                  </Splitter>
                </Layout>
              </Layout>
  );
};
export default Main;