import React, { useCallback, useEffect, useState } from 'react';
import { getAgeDistributionLabel } from '../../../utils/utilities';
import BarChart from '../charts/BarChart';
import ScatterChart from '../charts/Scatter';
import EmployeeItem from '../EmployeeItem/item';

import './index.css'
const EmployeeContainer = ({ employee }) => {
  const dataSet = {
    label: 'Age Distribution',
    data: [0, 0, 0, 0, 0],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1, // Keep borderWidth constant
  };

  const [dataSets, setDataSets] = useState([dataSet]);
  const [labels, setLabels] = useState([]);
  const [highlightedLabel, setHightLightedLabel] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/employee/ageDistribution', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const jsonData = await response.json();
      const { labels, data } = jsonData.dataSet;
      setDataSets([{ ...dataSet, data }]);
      setLabels(labels);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    const hLabel = getAgeDistributionLabel(employee.age);
    console.log(hLabel);
    setHightLightedLabel(hLabel);
    fetchData();
  }, [fetchData]);

  useEffect(() => {

  }, [highlightedLabel])


  // Example reference dataset (array of objects with 'experience' and 'salary' properties)
  const referenceData = [
    { experience: 1, salary: 45000 },
    { experience: 2, salary: 50000 },
    { experience: 1, salary: 20000 },
    { experience: 3, salary: 55000 },
    { experience: 9, salary: 120000 },
    // Add more data as needed
  ];

  return (
    <div className='employee-container'>
      <EmployeeItem employee={employee} />
      <h4>Age Distribution</h4>
      {employee && <BarChart labels={labels} dataSets={dataSets} highLightLabel={highlightedLabel} />}
      <h4>Salary vs. Experience Scatter Plot</h4>
      <ScatterChart employeeData={employee} referenceData={referenceData} />
    </div>
  )
}

export default EmployeeContainer;
