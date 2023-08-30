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
      resolve: function (_, {id, breed, displayImage}) {      
        console.log("Adding dog part one  ...");
        return new Promise((resolve, reject) => {

          const dog = {
            id: id,
            breed: breed,
            displayImage: displayImage
          }

          mongoDB.add(dog, 'Dogs', function(err, result) {
            console.log("Adding dog ...");
            if(err) 
              reject(err);
            else 
              console.log(result);
              resolve(true);
          });
        }); 

    },
  }
}


  