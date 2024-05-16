import React, { useState, useEffect, useCallback } from 'react';
import BarChart from '../charts/BarChart';
import EmployeeContainer from '../Employee/Employee';
import EmployeeList from '../EmployeeList/EmployeeList';
import './index.css';

const PanelComponent = ({ content = "" }) => {

    const [data, setData] = useState([]);

    const fetchData = useCallback(async (query) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/employee?firstName=${query}`);
            const jsonData = await response.json();
            setData(jsonData.employees);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },[]);

    useEffect(() => {
        if (content.length > 0) {
            console.log(content);
            fetchData(content);
        }
    }, [content]);


    if (content.length < 1) {
        return <h1>Select an Employee from the webpage</h1>;
    }

    return (
        <>
            <h1>Employee Analytics</h1>
            {(data?.length ==0 || content.length< 0) && <h4>Employee Not found</h4> }
            {data && data.length >1 && <EmployeeList key={JSON.stringify(data)} data={data} />
            }
            {data && data.length === 1 && <EmployeeContainer key={JSON.stringify(data[0])} data={data[0]} />}
        </>
    );
};

export default PanelComponent;
