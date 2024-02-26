import React from 'react';
import { BrowserRouter, Route, Routes, Switch, Link, useLocation } from 'react-router-dom';
import PageLayout from '../../containers/PageLayout';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, createHttpLink } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StaticRouter } from "react-router-dom/server";
import styles from './styles.scss';
const {GRAPHQL_URL} = process.env;

const context = {};


const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: GRAPHQL_URL + '/graphql',
    headers: {
      // cookie: req.header('Cookie'),
    },
  }),
  cache: new InMemoryCache(),
});


const client = () => {
  const cookies = {};
  const apiData = {};

  const props = {
  }

  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PageLayout {...props} />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

const server = (props) => {
  const cookies = {};
  const apiData = {};

  return (
    <ApolloProvider client={apolloClient}>
      <StaticRouter location={props.url} context={context}>
        <PageLayout serverCookies={cookies} apiData={apiData} {...props} />
      </StaticRouter>
    </ApolloProvider>
  );
}

export default ({ req }) => {
  return (
    <div className={styles.appWrapper}>
      {typeof window == 'undefined' ? server(req) : client(req)}
    </div>
  );
}

