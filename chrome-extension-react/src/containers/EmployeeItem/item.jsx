import React from 'react'
import EmployeeImg from '../../assets/img/employee.jpg'

const EmployeeItem = ({ employee }) => {
    return (
        employee &&
        <div className='employee-item'>
            <h4>{employee.firstName} {employee.lastName}</h4>
            <div>
                <div className="employee-details">
                    <p><strong>Gender:</strong> {employee.gender}</p>
                    <p><strong>Age:</strong> {employee.age}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Phone:</strong> {employee.phone}</p>
                    <p><strong>Education:</strong> {employee.education}</p>
                    <p><strong>Occupation:</strong> {employee.occupation}</p>
                    <p><strong>Experience:</strong> {employee.experience} years</p>
                    <p><strong>Salary:</strong> ${employee.salary}</p>
                    <p><strong>Marital Status:</strong> {employee.maritalStatus}</p>
                </div>
                <div>
                    <img src={EmployeeImg} alt='employee' />
                </div>
            </div>
        </div>
    )
}

export default EmployeeItem