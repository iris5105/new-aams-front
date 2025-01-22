import React from 'react'
import { Layout , Typography} from 'antd';
import BscDatePicker from '../../component/datePicker/BasicDatePicker';
import RangeDatePicker from '../../component/datePicker/RangeDatePicker';
import BscBtn from '../../component/button/Basicbutton';
import Filter from '../../component/filters/Filter'

const { Text } = Typography;
export const MainPage = () => {
  return (
    <Layout style = {{ height : '100%'}}>
        <Layout style={{width : 300 }}>
            <Text id="Example">Components Sample</Text>
            <Text>Button</Text>
            <BscBtn/>
            <Text>일자 단일 선택</Text>
            <BscDatePicker/>
            <Text>일자 기간 선택</Text>
            <RangeDatePicker/>
            <Filter/>
        </Layout>
    </Layout>
  )
}
export default MainPage
