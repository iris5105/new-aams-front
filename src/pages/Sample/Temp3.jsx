import React from 'react'
import { Layout } from 'antd'
import BasicTable from '../../component/table/BasicTable'
import {LTB} from '../../temp/SeperatePage';
import Basicbutton from '../../component/button/Basicbutton';

const Temp3 = () => {
  return (
    <Layout>
      <LTB>
        <BasicTable />
        <Basicbutton/>
        <BasicTable />
      </LTB>
    </Layout>
  )
}

export default Temp3