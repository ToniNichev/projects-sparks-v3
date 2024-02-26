//import mongoDB from '../connectors/database/mongodb.js';
import usersDB from '../usersDB.js';

const addUser = async (parent, args) => {

    const books = args.books ? args.books : [];
    usersDB.push(
        {
            id: args.id,
            email: args.email,
            books,
        }
    );    
    console.log(">>>>", usersDB);
    return usersDB;
}



const resolvers = {
    addUser: (parent, args) => addUser(parent, args), 
};

export default resolvers;