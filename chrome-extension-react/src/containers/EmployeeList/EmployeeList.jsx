import React, { useEffect, useState } from 'react'
import './index.module.css'
import EmployeeItem from '../EmployeeItem/item'

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
                && < EmployeeItem employee={employee} />
            }
            {!visible
                && <div id="eqweq-employeeList">
                    <ul>
                        {data.map((employee) => {
                            return (
                                <li key={employee._id} onClick={() => handleData(employee._id)}>
                                    <span>{employee.firstName}</span>
                                    {/* underline this highlight this */}
                                    <span>{employee.lastName}</span>
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