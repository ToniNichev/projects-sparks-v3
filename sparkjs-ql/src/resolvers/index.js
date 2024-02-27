import dogsQueries from './queries/dogs.js';
import usersQueries from './queries/users/queries.js';

import usersMutations from './mutations/users.js';

import usersFields from './queries/users/fields.js';


const resolvers = {
  Query: {
    ...dogsQueries,
    ...usersQueries,
  },
  Mutation: {
    ...usersMutations,
  },

  ...usersFields,
}

export default resolvers;