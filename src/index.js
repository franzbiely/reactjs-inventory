import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import Raw from './components/Raw/Raw';

'use strict';

const Root = () => {
	return (
		<BrowserRouter>
			<Raw />
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#root'));

