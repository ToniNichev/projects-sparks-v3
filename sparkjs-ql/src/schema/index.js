import  graphql from 'graphql';
import queries from './queries/index.js';
// import mutations from './mutations/index.js';


var rootQuery = new graphql.GraphQLObjectType({
  name: 'Query',
  //fields: {...queries, ...mutations },
  fields: {...queries },
});

export default new graphql.GraphQLSchema({
  query: rootQuery
});