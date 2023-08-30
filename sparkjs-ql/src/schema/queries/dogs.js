import graphql from 'graphql';
import DogType from '../types/dogs.js';
import mongoDB from '../../connectors/database/mongodb.js';


const Dogs = {
  getDogByBreed: {
    type: DogType,
    args: {
      breed: { type: graphql.GraphQLString }
    },
    resolve: async (_, {breed}) => {
      const result = await mongoDB.find({breed: breed}, 'dogs');
      return result[0];
    }
  }   
}


export default Dogs;


  