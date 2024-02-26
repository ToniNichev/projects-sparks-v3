//import mongoDB from '../connectors/database/mongodb.js';
import userDB from '../usersDB.js';


const getUserByEmail = async (parent, args) => {
    return userDB[0];
}

const getAllUsers = (parent, args, third) => {
    console.log("!!!!!>>>", parent)
    return userDB;
}


const resolvers = {
    getAllUsers: (parent, args, third) => getAllUsers(parent, args, third),
    getUserByEmail: (parent, args) => getUserByEmail(parent, args),
};

export default resolvers;