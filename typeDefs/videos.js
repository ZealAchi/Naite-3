// const { gql } = require('apollo-server-express');

// module.exports = gql`
//   extend type Query {
//     videos: [Videos!]
//     video(id: ID!): Videos
//   }

//   input createVideosInput {
//     name: String!
//     completed: Boolean!
//     userId: ID!
//   }

//   extend type Mutation {
//     createVideos(input: createVideosInput!): Videos
//   }

//   type Videos {
//     id: ID!
//     name: String!
//     completed: Boolean!
//     user: User!
//   }
// `;
const {gql}=require('apollo-server-express')

module.exports=gql`
extend type Query {
    videos(cursor: String, limit: Int): VideosFeed!
    video(id: ID!): Videos
  }
  type VideosFeed{
    VideosFeed: [Videos!]
  }
  
  input VideosInput {
      name:String!
      description:String!
  }
  extend type Mutation{
      createVideos(input:VideosInput!):Videos
  }
  type Videos{
    id: ID!
    name:String!
    createdAt: Date!
    updatedAt: Date!
  }
`