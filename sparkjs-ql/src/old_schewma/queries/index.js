
const typeDefs = `#graphql

  type User {
    id: String,
    email: String
  }

  type Dog {
    id: String,
    breed: Breed,
    displayImage: String,
  }

  type Query {
    users: [User],
    getAllDogs: [Dog]
  }
`

export default typeDefs;