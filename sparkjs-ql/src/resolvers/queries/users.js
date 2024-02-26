//import mongoDB from '../connectors/database/mongodb.js';
import userDB from '../usersDB.js';


const getUserByEmail = async (parent, args) => {
    return userDB[0];
}

const getAllUsers = () => {
    return userDB;
}


const resolvers = {
    getAllUsers: getAllUsers,
    getUserByEmail: (parent, args) => getUserByEmail(parent, args),
};

export default resolvers;