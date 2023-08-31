import graphql from 'graphql';
// const DogType = require('../types/dogs');
import mongoDB from '../../connectors/database/mongodb.js';

export default {
  addDog: {
    type: graphql.GraphQLBoolean,
    args: {
      id: { type: graphql.GraphQLString },
      breed: { type: graphql.GraphQLString },
      displayImage: { type: graphql.GraphQLString },
    },
    resolve: async (_, { id, breed, displayImage }) => {
      console.log("Adding dog part one  ...");

      const dog = [
        {
          id: id,
          breed: breed,
          displayImage: displayImage
        }
      ];

      const result = await mongoDB.add(dog, 'Dogs');
      return result;
    }
  }
}


