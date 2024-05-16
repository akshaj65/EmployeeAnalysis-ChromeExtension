import React, { CSSProperties, useState } from 'react'

import "chart.js/auto";
import { ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';


// Styling for the chart container
const graphStyle = {
    minHeight: "40rem",
    maxWidth: "540px",
    width: "100%",
    border: "1px solid #C4C4C4",
    borderRadius: "0.375rem",
    padding: "0.5rem",
};


const BarChart = (props) => {
    const {
        options: customOptions,
        labels= ['18-25', '26-35', '36-45', '46-55', '56+'],
        dataSets = [{
            label: 'Age Distribution',
            data: [18, 22, 19, 23, 24, 34, 23, 34, 51, 22, 19],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1, // Keep borderWidth constant
        }],
        style = graphStyle
    } = props;


    const defaultOptions = {
        scales: {
            x: {
                grid: {
                    display: false,
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
                ticks: {
                    color: "wheat",
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
                display: false,
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



    // Generate datasets with dynamic colors and constant borderWidth
    const chartDatasets = dataSets.map((dataSet, index) => ({
        ...dataSet,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
