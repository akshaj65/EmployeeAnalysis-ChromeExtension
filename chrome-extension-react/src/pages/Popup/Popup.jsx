import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';


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
        <h2>Employee Analysis</h2>
      </div>
      <div className="button-container">
        <button className='custom-button' onClick={handleClick}>Start</button>
      </div>
    </div>
  );
};

export default Popup;
