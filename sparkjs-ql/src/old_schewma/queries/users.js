import graphql from 'graphql';
import AllTypes from '../types/index.js';


const Users = {
  getUser: {
    type: AllTypes.User,
    args: {
      id: { type: graphql.GraphQLString }
    },
    resolve: async (_, {id}) => {
      const user = {
        "id": "123",
        "email": "toni@gmail.com"
      }
      return user;
    }
  },
  rollDice: {
    type: graphql.GraphQLString,
    args: {

    },
    resolve: () => {
      return "Test 123"
    }
  }   
}


export default Users;


  