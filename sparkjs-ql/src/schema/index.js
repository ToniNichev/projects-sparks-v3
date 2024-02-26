const typeDefs = `#graphql

  type Dog {
    id: String,
    breed: String,
    displayImage: String,
  }

  type Book {
    id: String,
    name: String,
  }

  type User {
    id: String,
    email: String,
    books(id: String!): [Book],
  }

  input newBook {
    id: String,
    name: String,
  }



  type Query {
    getAllDogs: [Dog],
    getDogByBreed(breed: String!): Dog,
    getDogById(id: String!): Dog,

    getAllUsers: [User],
    getUserByEmail(email: String!): User,
  }

  type Mutation {
    addUser(id: String!, email: String!, books: [newBook] ): [User]!
  }
`

export default typeDefs;