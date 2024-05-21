import React from 'react'
import ArrowImg from '../../assets/img/arrow.png'
import OpenImg from '../../assets/img/open.png'
import './index.css'
const Header: React.FC = () => {

    const handleScroll = () => {
        document.querySelector('.patientBox')?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <div className="header-container">
            <img src="https://img.freepik.com/premium-vector/engineer-engineering-jobs-profession-doodle-hand-drawn-set-collections-with-outline-black-white-style_25147-738.jpg?w=2000" alt="https://img.freepik.com/premium-vector/engineer-engineering-jobs-profession-doodle-hand-drawn-set-collections-with-outline-black-white-style_25147-738.jpg?w=2000" className="bgImg" width="651" height="651"></img>
            <div className='wrap'>
                <div className="typewriter">
                    <h1>Data Analysis</h1>
                </div>
                <div className="links">
                    <a href='https://github.com/akshaj65/EmployeeAnalysis-ChromeExtension' target='_blank' rel='noopener noreferrer'>
                        <span>Github</span>
                        <img src={OpenImg} alt="open" />
                    </a>
                </div>
            </div>

            <div id="scrollButton" onClick={handleScroll}>
                <img src={ArrowImg} alt="scroll" />
                <div className='loader'></div>
            </div>

        </div>
    )
}

export default Header