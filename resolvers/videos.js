const { combineResolvers } = require('graphql-resolvers');

// const Category = require('../database/models/category');
const { Photos } = require('../constants');



module.exports = {
  Query: {
       videos:()=>Photos
  },
  Mutation: {
    
  },
//   Video:{
//       photo:({id})=>{
//           return {photo:'asd'}
//       }
//   }
}