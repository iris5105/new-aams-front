import React from 'react';
import { Layout} from 'antd';

const Header = () => {

  return (
    <div>
      <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor : '#3f51b5'
      }}
    >
    <div className="demo-logo" />
    <h2 italic="true" style={{color : 'yellow'}}>A</h2>
    </Layout>
  </div>
  )
}

export default Header;