import React, { useEffect, useState } from 'react'
import './index.css'
import EmployeeContainer from '../Employee/Employee'

const EmployeeList = ({ data }) => {
    const [visible, setVisible] = useState(false)
    const [employee, setEmployee] = useState(false)
    const handleData = (id) => {
        if (!id)
            return
        const employee = data.find(employee => employee._id === id)
        setEmployee(employee)
        setVisible(true)
    }
    useEffect(() => {

        console.log('data changed', data);

    }, [data])

    return (
        <>
            {visible && employee
                && < EmployeeContainer employee={employee} />
            }
            {!visible
                && <div id="employeeList">
                    <h5>Select a Employee</h5>
                    <ul>
                        {data.map((employee) => {
                            return (
                                <li className='employeeName' key={employee._id} onClick={() => handleData(employee._id)}>
                                    <span className='employeeListFirstName'>{employee.firstName}</span>
                                    &nbsp;&nbsp;
                                    <span className='employeeListLastName'>{employee.lastName}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }

        </>

    )
}

export default EmployeeList