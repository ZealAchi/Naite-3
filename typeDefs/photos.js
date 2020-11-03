// const {gql}=require('apollo-server-express')

// module.exports=gql`
// extend type Query {
//     photos(cursor: String, limit: Int): PhotoFeed!
//     photo(id: ID!): Photo
//   }
//   type PhotoFeed{
//     PhotoFeed: [Photo!]
//   }
  
//   input PhotoInput {
//       name:String!
//       description:String!
//   }
//   extend type Mutation{
//       createPhoto(input:PhotoInput!):Photo
//   }
//   type Photo{
//     id: ID!
//     name:String!
//     createdAt: Date!
//     updatedAt: Date!
//   }
// `
const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    # photos(cursor: String, limit: Int): PhotosFeed!
    photos:[Photo]
    photo(id: ID!): Photo
  }

  type PhotosFeed {
    PhotosFeed: [Photo!]
    pageInfo: PageInfo!
  }

  type PageInfo {
    nextPageCursor: String
    hasNextPage: Boolean
  }

  input createPhotoInput {
    name: String!
    completed: Boolean!
  }

  extend type Mutation {
    createPhoto(input: createPhotoInput!): Photo
    updatePhoto(id: ID!, input: updatePhotoInput!): Photo
    deletePhoto(id: ID!): Photo
  }

  input updatePhotoInput {
    name: String
    completed: Boolean
  }

  type Photo {
    # id: String!
    # name: String!
    # completed: String!
    # updatedAt: String!
    # createdAt: String!
    id: String!
    name: String!
    src: String!
    title: String!
    description: String!
    createdAt: String!
    updatedAt: String!
    nextPage:String!
  }
 
`;