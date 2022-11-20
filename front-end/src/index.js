import React from 'react';
import ReactDOM from 'react-dom';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import App from './App';
import './assets/reset.css';
import './assets/style.css';

const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
};

ReactDOM.render(
	<Provider template={AlertTemplate} {...options}>
		<App />
	</Provider>,
	document.querySelector('.root')
);
