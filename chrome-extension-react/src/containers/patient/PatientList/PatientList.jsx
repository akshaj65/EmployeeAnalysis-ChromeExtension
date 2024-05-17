import React, { useEffect, useState } from 'react'
import PatientContainer from '../PatientContainer/PatientContainer'
import './index.css'

const PatientList = ({ data }) => {
    const [visible, setVisible] = useState(false)
    const [patient, setPatient] = useState(false)
    const handleData = (id) => {
        if (!id)
            return
        const patient = data.find(patient => patient._id === id)
        setPatient(patient)
        setVisible(true)
    }
    useEffect(() => {

        console.log('data changed', data);

    }, [data])

    return (
        <>
            {visible && patient
                && < PatientContainer patient={patient} />
            }
            {!visible
                && <div id="patientList">
                    <h5>Select a Patient</h5>
                    <ul>
                        {data.map((patient) => {
                            return (
                                <li className='patientName' key={patient._id} onClick={() => handleData(patient._id)}>
                                    <span className='patientListFirstName'>{patient.FirstName}</span>
                                    &nbsp;&nbsp;
                                    <span className='patientListLastName'>{patient.LastName}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }

        </>

    )
}

export default PatientList