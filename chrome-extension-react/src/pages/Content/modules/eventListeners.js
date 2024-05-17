import React from 'react';
import ReactDOM from 'react-dom';
import PanelComponent from '../../../containers/Panel/Panel';
import { getSelectedText, handleMinize } from './utils';

export const eventListeners = () => {
    console.log('===> FROM THE EventListener MODULE:');



    document.addEventListener('dblclick', function (event) {
        const panel = document.getElementById('panel');

        if (panel) {
            if(panel.classList.contains('moveRight')){
                panel.classList.remove('moveRight');
                handleMinize('left');
            }
            const selectedText = getSelectedText();

            if (selectedText) {
                ReactDOM.render(<PanelComponent content={selectedText} />, panel);
            }
        }
        // const content = event.target.textContent;

    });
};
