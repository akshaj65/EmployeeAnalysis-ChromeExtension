import React from 'react';
import ReactDOM from 'react-dom';
import PanelComponent from '../../../containers/Panel/Panel';
import { getSelectedText } from './utils';

export const eventListeners = () => {
    console.log('===> FROM THE EventListener MODULE:');



    document.addEventListener('dblclick', function (event) {
        // const content = event.target.textContent;
        const selectedText = getSelectedText();

        if (selectedText) {
            const panel = document.getElementById('panel');
            if (panel) {
                ReactDOM.render(<PanelComponent content={selectedText} />, panel);
            }
        }
    });
};
