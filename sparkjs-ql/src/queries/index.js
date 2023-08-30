
import mongoDB  from'../connectors/database/mongodb.js';

export default {
    
    setup: async () => {
        mongoDB.dropDB();
        // mongoDB.createEmpty("dogs");

        const dogs = [
            {
              "id": "1",
              "breed": 'labrador',
              "displayImage": 'https://some.image-1'
            },
            {
              "id": "2",
              "breed": 'pincher',
              "displayImage": 'https://some.image-2'
            }
        ];
        mongoDB.add(dogs, 'dogs', () => {});         
    }
}