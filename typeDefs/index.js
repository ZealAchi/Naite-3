const { gql } = require('apollo-server-express');

const photosTypeDefs = require('./photos');
const  videosTypeDefs= require('./videos');
const typeDefs = gql`
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type Subscription{
    _:String
  }
`;

module.exports = [
  typeDefs,
  photosTypeDefs,
  videosTypeDefs
]