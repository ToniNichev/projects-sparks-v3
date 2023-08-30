import  Dog from './dogs.js';
import graphql from 'graphql';

/*
const Dogs = new graphql.GraphQLObjectType({
  name: 'Dog',
  fields: {
    id: { type: graphql.GraphQLString },
    breed: { type: graphql.GraphQLString },
    displayImage: { type: graphql.GraphQLString },
  }
});
*/

export default {
  Dog,
};
