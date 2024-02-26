import dogsResolvers from './queries/dogs.js';
import usersResolvers from './queries/users.js';

import usersMutations from './mutations/users.js';



const resolvers = {
  Query: {
    ...dogsResolvers,
    ...usersResolvers,
  },
  Mutation: {
    ...usersMutations,
  }  
}

export default resolvers;