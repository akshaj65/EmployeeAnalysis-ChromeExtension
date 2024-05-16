import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ReactDOM from 'react-dom';
import PanelComponent from '../../../containers/Panel/Panel';

export const initialize= () =>{
    const panel = document.createElement('div');
    panel.id = 'panel';
    document.body.appendChild(panel);
    // const panelHTML = ReactDOMServer.renderToString(<PanelComponent />);
    // panel.innerHTML = panelHTML;
    ReactDOM.render(<PanelComponent />, panel);

}