import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import json from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
// import fs from 'fs';
import schema  from './src/schema/index.js';
import queries from './src/queries/index.js';
dotenv.config();


const app = express();

const server = new ApolloServer({
  schema: schema,
  graphiql: true,
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
app.use('/graphql', cors(),  json(), expressMiddleware(server));

// #############################################################
//  setup service
// #############################################################
app.use('/services/setup', async (req, res) => {
  queries.setup();

  res
  .status(200)
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', '*')
  .send('{"status": "sucess"}');  
});

app.listen(4001);
console.log('Running a GraphQL API server at localhost:4001/graphql');