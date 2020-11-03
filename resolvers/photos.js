const { combineResolvers } = require('graphql-resolvers');
const { stringToBase64, base64ToString } = require('../helper');
// const Category = require('../database/models/category');
const { Photos } = require('../constants');

const { ListFILES } = require("../util")


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
module.exports = {
  Query: {
    // photos:()=>{
    //     return Photos
    // },
    photo: (_, { id }) => {
      return Photos.find(task => task.id === id)
    },
    photos: combineResolvers(async (_, { cursor }) => {
      try {
        const result = await ListFILES(cursor);
        const fotos = []
        
        result.files.map((item) => {
          fotos.push({
            title: "fotos sin datos",
            src: `https://drive.google.com/uc?id=${item.id}`,
            description: "",
            nextPage:result.nextPageToken
          })
        })
        // const ImgUrl=`https://drive.google.com/uc?id=${res.data.id}`
        return fotos
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
  },
  Mutation: {

  },
  //   Photo:{
  //       photo:({id})=>{
  //           return {photo:'asd'}
  //       }
  //   }
}