import React from "react";
import { render } from 'react-dom';
import Patient from './Patient'
import './index.css'
import { eventListeners } from "../../../utils/eventListeners";
import { initialize } from "../../../utils/initialize";

render(<Patient />, window.document.querySelector('#patient-container'));

const container=document.getElementById('patient-container')

if(container){
    initialize()
    eventListeners();
}


if (module.hot) module.hot.accept();

