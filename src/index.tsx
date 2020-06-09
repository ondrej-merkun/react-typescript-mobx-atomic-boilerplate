import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Switch>
			<App />
		</Switch>
	</Router>,
	document.getElementById('root')
);
