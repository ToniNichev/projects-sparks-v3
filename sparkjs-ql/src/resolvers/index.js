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
  },

  User: {
    books: (parent, args) => {
      console.log(">>>>>>>>", args)
      return [
        {
          id: 123,
          name: 'moby-dik second edition',
        },
        {
          id: 3,
          name: 'Stand By Me',
        }
      ]
    }
  }
}

export default resolvers;