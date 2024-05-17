import React, { useState, useEffect, useCallback } from 'react';
import { getpatientsByFirstName } from '../../api/api';
import { handleMinize } from '../../pages/Content/modules/utils';
import PatientAnalytics from '../patient/PatientAnalytics/PatientAnalytics';
import './index.css';

const PanelComponent = ({ content = "" }) => {

    const [data, setData] = useState([]);
    const [isMinimize, seIsMinimize] = useState(false);

    const fetchEmployees = useCallback(async (query) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/employee?firstName=${query}`);
            const jsonData = await response.json();
            setData(jsonData.employees);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    const fetchPatients = useCallback(async (query) => {
        try {
            const patients = await getpatientsByFirstName(query);
            setData(patients);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    const fetchData = ((query) => {
        // fetchEmployees();
        fetchPatients(query);
    });

    useEffect(() => {
        if (content.length > 0) {
            console.log(content);
            fetchData(content);
        }
    }, [content]);

    const minimize = () => {
        handleSlide('right')
    }

    const close = () => {
        const panel = document.getElementById('panel');
        if (panel)
            panel.remove();
    }

    const handleSlide = (direction) => {
        const panel = document.getElementById('panel');
        if (!panel) return;
        if (direction === 'left') {
            handleMinize('left')
            panel.classList.remove('moveRight');
        } else {
            seIsMinimize(true);
            handleMinize('right')
            panel.classList.add('moveRight');

        }
    }

    useEffect(() => {
       
    }, [data])
    

    return (
        <>
            <div className='leftRightArrows'>
                <div className="left hideButtons" id="left_arrow" onClick={() => handleSlide('left')}></div>
                 <div className="right" id="right_arrow" onClick={() => handleSlide('right')}></div>
            </div>
            <div className='mainContainer'>
                {<div id='closeMinimize' className='buttons'>
                    <div onClick={minimize}>-</div>
                    <div onClick={close}>x</div>
                </div>
                }
                {/* <EmployeeAnalytics content={content} data={data}/> */}
                <PatientAnalytics content={content} data={data} />
            </div>

        </>
    );
};

export default PanelComponent;
