import graphql from 'graphql';


export default new graphql.GraphQLObjectType({
  name: 'Dog',
  fields: {
    id: { type: graphql.GraphQLString },
    breed: { type: graphql.GraphQLString },
    displayImage: { type: graphql.GraphQLString },
  }
});

