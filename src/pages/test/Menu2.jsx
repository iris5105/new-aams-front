import React from 'react'
import { Link } from 'react-router-dom';
import BscDatePicker from '../../component/datePicker/BasicDatePicker';
import RangeDatePicker from '../../component/datePicker/RangeDatePicker';
function Menu2() {
  return (
  <div>
    <h3>Menu2</h3>
    <BscDatePicker/>
    <div>
      <Link to='/'>
      Go to Main
      </Link>
    </div>
    <div>
      <RangeDatePicker/>
    </div>
  </div>
  )
}

export default Menu2