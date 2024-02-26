mutation Mutation($addUserId: String!, $email: String!, $books: newBook) {
  addUser(id: $addUserId, email: $email, books: $books) {
    id
    email
    books {
      id
      name
    }
  }
}



query GetAllUsers {
  getAllUsers {
    email
    id    
    books {
      id
      name
    }
  }
}