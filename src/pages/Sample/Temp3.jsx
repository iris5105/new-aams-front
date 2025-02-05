import React,{useState, useEffect} from 'react'
import { Layout } from 'antd'
import {LTB} from '../../temp/SeperatePage';
import SeperatePage_LTB from '../../temp/SeperatePage_LTB';
import Basicbutton from '../../component/button/Basicbutton';
import SampleTable1 from '../../component/table/SampleTable1';
import SampleTable2 from '../../component/table/SampleTable2';
const Temp3 = () => {
  const [wdHeight, setWdHeight] = useState(window.innerHeight);
  const [boardHeight, setBoardHeight] = useState(wdHeight-63);

  const [sizes, setSizes] = useState([boardHeight * 0.5,boardHeight * 0.5]);


useEffect(() => {
  // 윈도우 크기가 변경될 때마다 실행되는 함수
  const handleResize = () => {
    setWdHeight(window.innerHeight);
    console.log('wdHeight: ', window.innerHeight);
    
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
  setBoardHeight(wdHeight - 63); // wdHeight가 변경될 때마다 tableHeight 업데이트
}, [wdHeight]);

  return (
    <Layout>
      <SeperatePage_LTB prop = {boardHeight} onSizeChange={setSizes}>
        <SampleTable1 />
        <Basicbutton />
        <SampleTable2 prop={boardHeight}  size={sizes}/>
      </SeperatePage_LTB>
    </Layout>
  )
}

export default Temp3