import { createStore, combineReducers, compose } from 'redux';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
// import { historyReducer } from 'containers/WillyTableContainer/reducer';

const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:4000/graphql' });

const middlewareLink = setContext(() => ({
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwToken')}` || null,
  },
}));

const errorLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    localStorage.removeItem('jwToken');
    window.location.reload();
  }
});

const link = middlewareLink.concat(httpLink, errorLink);
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export const store = createStore(
   combineReducers({
   }),
   {}, // initial state
   compose(typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
     ? window.__REDUX_DEVTOOLS_EXTENSION__()
     : (f) => f)
 );
