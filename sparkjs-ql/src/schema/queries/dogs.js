import graphql from 'graphql';
import AllTypes from '../types/index.js';
import mongoDB from '../../connectors/database/mongodb.js';


const Dogs = {
  getDogByBreed: {
    type: AllTypes.Dog,
    args: {
      breed: { type: graphql.GraphQLString }
    },
    resolve: async (_, {breed}) => {
      const result = await mongoDB.find({breed: breed}, 'dogs');
      return result[0];
    }
  },
  getAllDogs: {
    type: AllTypes.Dogs,
    args: {
    },
    resolve: async (_) => {
      const result = await mongoDB.find({}, 'dogs');
      return result;
    }
  }    
}


export default Dogs;


  