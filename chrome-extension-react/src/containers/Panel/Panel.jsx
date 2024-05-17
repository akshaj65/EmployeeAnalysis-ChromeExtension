import React, { useState, useEffect, useCallback } from 'react';
import BarChart from '../charts/BarChart';
import EmployeeContainer from '../Employee/Employee';
import EmployeeList from '../EmployeeList/EmployeeList';
import './index.css';

const PanelComponent = ({ content = "" }) => {

    const [data, setData] = useState([]);
    const [isMinimize, seIsMinimize] = useState(false);

    const fetchData = useCallback(async (query) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/employee?firstName=${query}`);
            const jsonData = await response.json();
            setData(jsonData.employees);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

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
            seIsMinimize(false);
            panel.classList.remove('moveRight');


        } else {
            seIsMinimize(true);
            panel.classList.add('moveRight');

        }
    }


    return (
        <>
            <div className='leftRightArrows'>
                {isMinimize && <div className="left" onClick={() => handleSlide('left')}></div>}
                {!isMinimize && <div className="right" onClick={() => handleSlide('right')}></div>}
            </div>
            <div>
                {!isMinimize && <div className='buttons'>
                    <div onClick={minimize}>-</div>
                    <div onClick={close}>x</div>
                </div>
                }
                <h1>Employee Analytics</h1>
                {content.length < 1 ?
                    <h3>Select an Employee from the webpage</h3> :
                    (data?.length === 0 ? <h4>Employee Not found</h4> :
                        (data.length > 1 ? <EmployeeList key={JSON.stringify(data)} data={data} /> :
                            <EmployeeContainer key={JSON.stringify(data[0])} data={data[0]} />
                        )
                    )
                }
            </div>

        </>
    );
};

export default PanelComponent;
