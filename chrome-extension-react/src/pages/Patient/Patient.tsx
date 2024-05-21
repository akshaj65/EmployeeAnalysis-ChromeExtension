import React, { useEffect } from 'react'
import NavBar from '../../containers/NavBar/NavBar'
import Header from '../../containers/Header/Header'
import './Patient.css';
import patientHealth from '../../assets/patientsHealth.json'

const Patient: React.FC = () => {
    const generateRandColor = () => {
        const colors = ['#FFCAD4', '#ffd670', '#B0D0D3', '##ff70a6', '#F7AF9D']
        // const colors = ['#70D6FF', '#FF70A6', '#FF9770', '#FFD670', '#E9FF70']


        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div>
            <NavBar />
            <Header />
            <div className='patientBox'>
                {
                    patientHealth.map(patient => {
                        return (
                            <div className='item' key={patient._id} style={{ background: generateRandColor() }}>
                                <div className='firstName'>{patient.FirstName}</div>
                            </div>
                        )
                    })
                }
            </div>
            <a href="https://www.flaticon.com/free-icons/browsing" title="Browsing icons created by bsd - Flaticon">Browsing icons created by bsd - Flaticon</a>
        </div>
    )
}

export default Patient