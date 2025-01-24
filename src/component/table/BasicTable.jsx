import React , {useState, useEffect, useRef} from 'react';
import { Table, Layout } from 'antd';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Column 9',
    dataIndex: 'address',
    key: '9',
  },
  {
    title: 'Column 10',
    dataIndex: 'address',
    key: '10',
  },
  {
    title: 'Column 11',
    dataIndex: 'address',
    key: '11',
  },
  {
    title: 'Column 12',
    dataIndex: 'address',
    key: '12',
  },
  {
    title: 'Column 13',
    dataIndex: 'address',
    key: '13',
  },
  {
    title: 'Column 14',
    dataIndex: 'address',
    key: '14',
  },
  {
    title: 'Column 15',
    dataIndex: 'address',
    key: '15',
  },
  {
    title: 'Column 16',
    dataIndex: 'address',
    key: '16',
  },
  {
    title: 'Column 17',
    dataIndex: 'address',
    key: '17',
  },
  {
    title: 'Column 18',
    dataIndex: 'address',
    key: '18',
  },
  {
    title: 'Column 19',
    dataIndex: 'address',
    key: '19',
  },
  {
    title: 'Column 20',
    dataIndex: 'address',
    key: '20',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

// const BasicTable = () => {
//   return (
//     <Layout>
//       <Table
//         pagination={false}
//         columns={columns}
//         dataSource={dataSource}
//         scroll={{
//           x: 'max-content',
//           y : '85vh'
//         }}
//       />
//     </Layout>
//   );
// };
// export default BasicTable;
const BasicTable = () => {
  const [tableHeight, setTableHeight] = useState(0);
  const splitterPanelRef = useRef(null); // ant-splitter-panel 요소에 대한 ref

  useEffect(() => {
    const updateTableHeight = () => {
      // splitterPanelRef로 참조한 요소의 높이를 가져와서 테이블 높이를 설정
      if (splitterPanelRef.current) {
        const height = splitterPanelRef.current.clientHeight - 100; // 여백을 고려하여 높이 설정
        setTableHeight(height);
      }
    };

    // 초기 계산
    updateTableHeight();

    // 화면 크기 변경 시에도 반영
    window.addEventListener('resize', updateTableHeight);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, [splitterPanelRef]); // 빈 배열을 넣어 처음 한 번만 실행되게 함

  return (
    <Layout>
      <div ref={splitterPanelRef} className="ant-splitter-panel" style={{ height: '100%' }}>
        <Table
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          scroll={{
            x: 'max-content',
            y: tableHeight, // splitter-panel의 높이를 기반으로 설정된 테이블 높이
          }}
        />
      </div>
    </Layout>
  );
};

export default BasicTable;