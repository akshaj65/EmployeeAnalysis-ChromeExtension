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
  const [salaryExpData, setSalaryExpData] = useState([
    { x: 9, y: 185000 },
    { x: 2, y: 50000 },
    { x: 1, y: 20000 },
    { x: 1, y: 20000 },
    { x: 5, y: 35000 },
    { x: 9, y: 820000 },
    // Add more data as needed
  ]);
  const [labels, setLabels] = useState([]);
  const [highlightedLabel, setHightLightedLabel] = useState('');

  const fetchAgeDistributionData = useCallback(async () => {
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


  const fetchSalaryExpData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/employee/all?fields=experience,salary', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const { employees } =await response.json();
      const referenceDataset=employees.map(data => ({ x: data.experience, y: data.salary }))
      setSalaryExpData(referenceDataset);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    const hLabel = getAgeDistributionLabel(employee.age);
    setHightLightedLabel(hLabel);
    fetchAgeDistributionData();
  }, [fetchAgeDistributionData]);

  useEffect(() => {

  }, [highlightedLabel])

  useEffect(() => {
    fetchSalaryExpData();

  }, [fetchSalaryExpData])


  // Example reference dataset (array of objects with 'experience' and 'salary' properties)

  return (
    <div className='employee-container'>
      <EmployeeItem employee={employee} />
      <h4>Age Distribution</h4>
      {employee && <BarChart employeeData={employee} labels={labels} dataSets={dataSets} highLightLabel={highlightedLabel} />}
      <h4>Salary vs. Experience Scatter Plot</h4>
      <ScatterChart employeeData={employee} referenceDataSet={salaryExpData} />
    </div>
  )
}

export default EmployeeContainer;
