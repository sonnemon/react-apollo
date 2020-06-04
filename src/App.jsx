import React, { Component } from 'react';
import RouterApp from './router';
import { hot } from 'react-hot-loader/root';
import './styles.scss';
import client from './client';
import { ApolloProvider } from '@apollo/react-hooks';

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<RouterApp />
			</ApolloProvider>
		);
	}
}

export default /* istanbul ignore next */ (IS_DEV ? hot(App) : App);
