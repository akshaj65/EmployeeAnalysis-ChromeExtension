import React, { CSSProperties, useState } from 'react'

import "chart.js/auto";
import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';


// Styling for the chart container
const graphStyle = {
    minHeight: "30rem",
    maxWidth: "440px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "1.2rem",
};


const BarChart = (props) => {
    const {
        options: customOptions,
        highLightLabel,
        patientData,
        employeeData,
        labels,
        dataSets,
        style = graphStyle
    } = props;

    const firstName = employeeData?.firstName;
    const FirstName  = patientData?.FirstName;
    const defaultOptions = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Age Range (years)',
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
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'No Of Employees',
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
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `${firstName || FirstName}'s Employee Distribution by Age Range`,
                color: "white",
            },
        },
    };


    // Merge default options with custom options 
    // custom options provided via props will override the default options
    const mergedOptions = {
        ...defaultOptions,
        ...customOptions,
        plugins: {
            ...defaultOptions.plugins,
            ...customOptions?.plugins,
        },
    };

    


    const chartDatasets = dataSets.map((dataSet, index) => ({
        ...dataSet,
        backgroundColor: labels.map(label => label === highLightLabel ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)'),
        borderColor: labels.map(label => label === highLightLabel ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)'),
        borderWidth: 1, // Keep borderWidth constant
    }));

    const chartData = {
        labels,
        datasets: chartDatasets,
    };

    return (
        <div style={style}>
            <Bar data={chartData} options={mergedOptions} />
        </div>
    )
};

export default BarChart;
