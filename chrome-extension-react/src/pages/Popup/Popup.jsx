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
      <main>
        <button onClick={handleClick}>Start</button>
      </main>
    </div>
  );
};

export default Popup;
