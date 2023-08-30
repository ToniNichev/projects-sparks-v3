import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import json from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
// import fs from 'fs';
import schema  from './src/schema/index.js';


dotenv.config();

//console.log(">>>>>>>>>>>>>>>", process.env);

const app = express();


// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!!!!',
  },
};

const server = new ApolloServer({
  schema: schema,
  graphiql: true,
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', cors(),  json(), expressMiddleware(server));

app.listen(4001);
console.log('Running a GraphQL API server at localhost:4001/graphql');