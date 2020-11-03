  
const {GraphQLDateTime}=require('graphql-iso-date')
const photosResolver=require('./photos')
const videosResolver=require('./videos')

const customDateScalarResolver={
    Date:GraphQLDateTime
}
module.exports=[
    photosResolver,
    videosResolver,
    customDateScalarResolver
]