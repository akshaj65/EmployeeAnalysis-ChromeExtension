import React from 'react'
import BarChart from '../charts/BarChart'
import EmployeeItem from '../EmployeeItem/item'

const EmployeeContainer = ({employee}) => {
  return (
    <div className='employee-container'>
       <EmployeeItem employee={employee}/>
       <BarChart/>
    </div>
  )
}

export default EmployeeContainer