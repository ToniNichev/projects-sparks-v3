import mongoDB from '../../connectors/database/mongodb.js';


  async function getAllDogs() {
    return  await mongoDB.find({}, 'dogs');
  }

  async function getDogByBreed(parent, args) {
    const result = await mongoDB.find({breed: args.breed}, 'dogs');
    return result[0];
  }

  const getDogById = async (parent, args) => {
    const result = await mongoDB.find({id: args.id}, 'dogs');
    return result[0];
  }

  const resolvers = {
      getAllDogs: () => getAllDogs(),
      getDogByBreed: (parent, args) => getDogByBreed(parent, args),
      getDogById: (parent, args) => getDogById(parent, args),
  };

  export default resolvers;