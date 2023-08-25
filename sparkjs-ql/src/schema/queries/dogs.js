import graphql from 'graphql';
import dogType from '../types/dogs.js';

const Dogs = {
  getDogByBreed: {
    type: dogType,
    args: {
      breed: { type: graphql.GraphQLString }
    },
    resolve: function (_, {breed}) {
      const result = {
        id: '123',
        breed: 'Labrador',
        displayImage: 'https://some-image.com',
        test: '12344444'
      }
      return result;
    }
  }   
}

export default Dogs;


  