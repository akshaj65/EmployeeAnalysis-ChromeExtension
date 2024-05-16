import React from 'react';
import icon from '../../assets/img/icon-128.png';

function GreetingComponent() {
  return (
    <div>
      <p>Hello, Name!</p>
      <img src={icon} alt="extension icon" />
    </div>
  );
}

export default GreetingComponent;
