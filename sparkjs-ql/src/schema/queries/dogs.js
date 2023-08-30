import graphql from 'graphql';
import DogType from '../types/dogs.js';
import mongoDB from '../../connectors/database/mongodb.js';


const Dogs = {
  getDogByBreed: {
    type: DogType,
    args: {
      breed: { type: graphql.GraphQLString }
    },
    resolve: function (_, {breed}) {

      console.log("part one !!!!");

        mongoDB.find({breed: breed}, 'Dogs', function(err, result) {
          if(err) {
            console.log("ERROR !", err);
            reject(err);
          }
          else {
            console.log("RESOLVED !!!!");
            resolve(result[0]);
          }
        });
      

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


  