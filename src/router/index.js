import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './asyncRoutes';

class RouterApp extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path={'/'} component={Home} exact />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default RouterApp;
