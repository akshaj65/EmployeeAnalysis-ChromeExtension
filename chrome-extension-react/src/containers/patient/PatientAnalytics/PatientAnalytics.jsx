import React from 'react'
import PatientContainer from '../PatientContainer/PatientContainer';
import PatientList from '../PatientList/PatientList';

const PatientAnalytics = ({ content, data }) => {
    return (
        <>
            <h1>Patient Analytics</h1>
            {content?.length < 1 ?
                <h3>Select an Patient from the webpage</h3> :
                (data?.length === 0 ? <h4>Patient Not found</h4> :
                    (data.length > 1 ? <PatientList key={JSON.stringify(data)} data={data} /> :
                        <PatientContainer key={JSON.stringify(data[0])} patient={data[0]} />
                    )
                )
            }
        </>
    )
}

export default PatientAnalytics