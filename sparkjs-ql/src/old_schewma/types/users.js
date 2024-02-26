import graphql from 'graphql';


export default new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString },
    dice: { type: graphql.GraphQLString }
  }
});

