import graphql from 'graphql';
import PageType from '../types/pages';
import mongoDB from '../../connectors/database/mongodb';
    
export default {
    getPageByUrl: {
      type: PageType,
      args: {
        url: { type: graphql.GraphQLString }
      },
      resolve: function (_, {url}) {      
        return new Promise((resolve, reject) => {
          mongoDB.find({url: url}, 'Pages', function(err, result) {
            if(err) 
              reject(err);
            else { 
              resolve(result[0]);
            }
          });
        }); 
      },
    },
}


  