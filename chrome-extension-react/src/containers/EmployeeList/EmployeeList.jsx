import React, { useEffect } from 'react'
import './index.module.css'


const EmployeeList = ({ data }) => {
    useEffect(() => {
        console.log('data changed', data);
       
    }, [data])

    return (
        <div id="eqweq-employeeList">
            <ul>
            {data.map((employee) => {
            return (
                <li>
                    <span>{employee.firstName}</span>
                    {/* underline this highlight this */}
                    <span>{employee.lastName}</span>
                </li>
            )
        })}
            </ul>
        </div>
    )
}

export default EmployeeList