import React, { useState } from 'react';
import { Layout, Table, Slider } from 'antd';


const { Header, Content, Footer } = Layout;

const Temp4 = () => {
  const [height, setHeight] = useState(200); // 테이블의 초기 높이 설정

  // 테이블 데이터
  const data = [
    { key: 1, name: 'John', age: 32 },
    { key: 2, name: 'Jane', age: 28 },
    { key: 3, name: 'Joe', age: 40 },
  ];

  // 테이블 컬럼
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 상단 영역 */}
      <Header style={{ background: '#fff', padding: 0 }}>
        <h2 style={{ textAlign: 'center' }}>Header Section</h2>
      </Header>

      {/* 내용 영역 */}
      <Content style={{ padding: '20px' }}>
        <h3>Main Content</h3>
        <p>여기에 다른 콘텐츠가 들어갑니다. 이 영역은 동적으로 확장할 수 있습니다.</p>

        {/* 높이를 조절할 수 있는 Slider 추가 */}
        <Slider
          min={100}
          max={400}
          value={height}
          onChange={(value) => setHeight(value)}
          style={{ marginTop: '20px' }}
        />
      </Content>

      {/* 하단 고정 테이블 */}
      <Footer style={{ position: 'absolute', bottom: 0, width: '100%', background: '#fff' }}>
        <div style={{ height: `${height}px`, overflow: 'auto' }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: height }} // y축 스크롤을 통해 테이블 크기 제한
          />
        </div>
      </Footer>
    </Layout>
  );
};

export default Temp4;
