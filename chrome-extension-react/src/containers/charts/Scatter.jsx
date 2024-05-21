import React, { useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';

import "chart.js/auto";
import { ChartOptions } from 'chart.js';

const graphStyle = {
    minHeight: "30rem",
    maxWidth: "440px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "1.2rem",
    marginBottom:'200px'

};

const ScatterChart = ({ employeeData, patientData, referenceDataSet }) => {
    // Extracting salary and experience data for the particular employee
    const { firstName, salary, experience } = employeeData || {};
    const { FirstName, Diastolic, Systolic } = patientData || {};

    // const mySet = {
    //     label: `${firstName}'s Salary vs. Experience`,
    //     data: [{ x: experience, y: salary }],
    //     xTitle:'Experience (years)',
    //     yTitle:'Salary (Rupees)',
    // }

    const mySet = {
        label: `${FirstName}'s Diastolic vs. Systolic`,
        data: [{ x: Systolic, y: Diastolic }],
        xTitle:'Systolic',
        yTitle:'Diastolic',
    }

    const chartData = {
        datasets: [
            {
                label: mySet.label,
                data: mySet.data,
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 3,
            },
            {
                label: 'Reference Dataset',
                data: referenceDataSet,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: mySet.xTitle,
                    color: "white",
                },
                ticks: {
                    color: "white",
                    font: {
                        family: "Nunito",
                        size: 12,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: mySet.yTitle,
                    color: "white",
                },
                ticks: {
                    color: "white",
                    font: {
                        family: "Nunito",
                        size: 12,
                    },
                },
            },
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: mySet.label,
                color: "white",
            },
        },
    };


    return (
        <div style={graphStyle}>
            <Scatter data={chartData} options={options} />
        </div>
    );
};

export default ScatterChart;
