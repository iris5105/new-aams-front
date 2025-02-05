import React,{useState, useEffect} from 'react'
import { Layout } from 'antd'
import SampleTable1 from '../../component/table/SampleTable1'
import SampleTable2 from '../../component/table/SampleTable2';
import Basicbutton from '../../component/button/Basicbutton';

import SeperatePage_TBR from '../../temp/SeperatePage_TBR';

const Temp4 = () => {
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
  setBoardHeight(wdHeight); // wdHeight가 변경될 때마다 tableHeight 업데이트
}, [wdHeight]);
  return (
    <Layout>
      <SeperatePage_TBR prop = {boardHeight} onSizeChange={setSizes}>
        <SampleTable1 size={(sizes[0]-55)}/>
        {/* <SampleTable1 style={{height : sizes[0]}}/> */}
        <SampleTable2 size={sizes[1]-59}/>
        {/* <SampleTable2 style={{height : sizes[1]}}/> */}
        <Basicbutton />
      </SeperatePage_TBR>
    </Layout>
  );
};

export default Temp4;
