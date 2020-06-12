import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { RetryLink } from 'apollo-link-retry';
import { getMainDefinition } from 'apollo-utilities';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
	uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
	uri: 'ws://localhost:4000/graphql',
	options: {
		reconnect: true,
		timeout: 30000
	}
});

window.addEventListener('beforeunload', () => {
	// @ts-ignore - the function is private in typescript
	wsLink.subscriptionClient.close();
});

const link = new RetryLink({ attemts: { max: Infinity } }).split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === 'OperationDefinition' && operation === 'subscription';
	},
	wsLink,
	httpLink
);

export const client = new ApolloClient({
	cache,
	link
});
