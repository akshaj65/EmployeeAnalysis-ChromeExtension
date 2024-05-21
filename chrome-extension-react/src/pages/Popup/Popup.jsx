import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import OpenImg from '../../assets/img/openPulsar.png'

const Popup = () => {
  const handleClick = () => {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, { action: 'addPanel' });
      window.close();
    });
  }


  return (
    <div className="App">
      <div className='heading'>
        <h2>Data Analysis</h2>
      </div>
      <div className="button-container">
        <button className='custom-button' onClick={handleClick}>Start</button>
        <a href="/patient.html" target="_blank" rel="noopener noreferrer">
           Open Patient.html
          <img src={OpenImg} alt="open" />
        </a>
      </div>
    </div>
  );
};

export default Popup;
