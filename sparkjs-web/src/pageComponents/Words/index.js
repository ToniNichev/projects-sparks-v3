import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_DOG = gql`
query 
{
  getDogByBreed(breed: "labrador") {
    id
    breed
    displayImage
  }
}
`
const DogCatalog = () => (
  <Query query={GET_DOG}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error!</div>;
      return (
        <div>
            <span>breed: </span>
            <span>{data.getDogByBreed.breed}</span>
            <br />
            <img src={data.getDogByBreed.displayImage} />
        </div>
      )
    }}
  </Query>
)
export default DogCatalog;