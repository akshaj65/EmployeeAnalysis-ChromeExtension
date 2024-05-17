import React from 'react'
import EmployeeContainer from '../Employee/Employee';
import EmployeeList from '../EmployeeList/EmployeeList';

const EmployeeAnalytics = ({ props }) => {
    const { content, data } = props;

 
    return (
        <>
            <h1>Employee Analytics</h1>
            {content.length < 1 ?
                <h3>Select an Employee from the webpage</h3> :
                (data?.length === 0 ? <h4>Employee Not found</h4> :
                    (data.length > 1 ? <EmployeeList key={JSON.stringify(data)} data={data} /> :
                        <EmployeeContainer key={JSON.stringify(data[0])} data={data[0]} />
                    )
                )
            }
        </>
    )
}

export default EmployeeAnalytics