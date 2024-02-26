import  Dog from './dogs.js';
import User from './users.js';
import graphql from 'graphql';

const Dogs = new graphql.GraphQLList(Dog);

export default {
  Dog,
  Dogs,
  User,
};
