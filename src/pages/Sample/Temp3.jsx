import React,{useState, useEffect} from 'react'
import { Layout } from 'antd'
import BasicTable from '../../component/table/BasicTable'
import DataTable from '../../component/table/DataTable';
import {LTB} from '../../temp/SeperatePage';
import Basicbutton from '../../component/button/Basicbutton';

const Temp3 = () => {
  const [wdHeight, setWdHeight] = useState(window.innerHeight);
  const [tableHeight, setTableHeight] = useState(wdHeight-63);
  

  const basicButtonHeight = tableHeight * 0.1; // 예: BasicButton 높이는 10%
  const dataTableHeight = tableHeight * 0.9; // 예: DataTable 높이는 90%
  const [sizes, setSizes] = useState([tableHeight * 0.5,tableHeight * 0.5]);


useEffect(() => {
  // 윈도우 크기가 변경될 때마다 실행되는 함수
  const handleResize = () => {
    setWdHeight(window.innerHeight);
  };

  // 리사이즈 이벤트 리스너 추가
  window.addEventListener('resize', handleResize);

  // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

console.log('sizes',sizes);


useEffect(() => {
  setTableHeight(wdHeight - 63); // wdHeight가 변경될 때마다 tableHeight 업데이트
}, [wdHeight]);

  return (
    <Layout>
      <LTB prop = {tableHeight} onSizeChange={setSizes}>
        <BasicTable />
        <Basicbutton size={sizes[0]}/>
        <DataTable prop={tableHeight}  size={sizes[1]}/>
      </LTB>
    </Layout>
  )
}

export default Temp3