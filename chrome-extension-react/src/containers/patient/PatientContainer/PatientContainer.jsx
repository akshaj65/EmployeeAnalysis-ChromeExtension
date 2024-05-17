
import React, { useCallback, useEffect, useState } from 'react';
import { getAgeDistributionLabel } from '../../../../utils/utilities';
import { getAgeDistributionPatients, getPatientFields } from '../../../api/api';
import BarChart from '../../charts/BarChart';
import ScatterChart from '../../charts/Scatter';
import PatientItem from '../PatientItem/PatientItem';

import './index.css'

const PatientContainer = ({ patient }) => {
    const dataSet = {
        label: 'Age Distribution',
        data: [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1, // Keep borderWidth constant
    };

    const [dataSets, setDataSets] = useState([dataSet]);
    const [diaSisData, setDiaSisData] = useState([
        { x: 91, y: 185 },
        { x: 121, y: 500 },
        { x: 112, y: 200 },
        { x: 111, y: 200 },
        { x: 115, y: 350 },
        { x: 119, y: 820 },
        // Add more data as needed
    ]);
    const [labels, setLabels] = useState([]);
    const [highlightedLabel, setHightLightedLabel] = useState('');

    const fetchAgeDistributionData = useCallback(async () => {
        try {
            const object = await getAgeDistributionPatients();
            console.log(object,"fdsf");
            const { labels, data } = object;
            setDataSets([{ ...dataSet, data }]);
            setLabels(labels);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);


    const fetchDiaSisData = useCallback(async () => {
        try {
            const patients = await getPatientFields('Diastolic,Systolic');
            console.log(patients);
            const referenceDataset = patients.map(data => ({ x: data.Systolic, y: data.Diastolic }))
            setDiaSisData(referenceDataset);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    useEffect(() => {
        const hLabel = getAgeDistributionLabel(patient.Age);
        setHightLightedLabel(hLabel);
        fetchAgeDistributionData();
    }, [fetchAgeDistributionData]);

    useEffect(() => {

    }, [highlightedLabel])

    useEffect(() => {
        fetchDiaSisData();

    }, [fetchDiaSisData])


    // Example reference dataset (array of objects with 'experience' and 'salary' properties)

    return (
        <div className='patient-container'>
            <PatientItem patient={patient} />
            <h4>Age Distribution</h4>
            {patient && <BarChart patientData={patient} labels={labels} dataSets={dataSets} highLightLabel={highlightedLabel} />}
            <h4>Diastolic vs. Systolic Scatter Plot</h4>
            <ScatterChart patientData={patient} referenceDataSet={diaSisData} />
        </div>
    )
}

export default PatientContainer;
