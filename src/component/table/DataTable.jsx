import React, { useRef, useState, useEffect } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  name: 'John Brown',
  age: i + 1,
  street: 'Lake Park',
  building: 'C',
  number: 2035,
  companyAddress: 'Lake Street 42',
  companyName: 'SoftLake Co',
  gender: 'M',
}));

const DataTable = ({prop, size}) => {
  const [tableHeight, setTableHeight] = useState(0);
  console.log('prop',prop);
  
  useEffect(() => {
    setTableHeight(size-150);
    console.log('income : ',size)
  }, [size])

//     useEffect(() => {
//         setTableHeight(prop)
//     }, [prop]);
// console.log('tableHeight :',tableHeight);

console.log('setSized:', tableHeight);

  return (
      <Table
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        size="small"
        // ref={tableContainerRef} 
         style={{ height:tableHeight,}}
        scroll={{
          x: 'max-content',
          y: tableHeight, // 여기서 부모 컴포넌트의 높이를 기반으로 y 값을 설정
        }}
      />
  );
};

export default DataTable;
