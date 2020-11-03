const express=require("express")
const path = require("path");

const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const { connection } = require("./database");
const bodyParser = require("body-parser");
const Dataloader=require('dataloader');
const dotEnv = require('dotenv');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

dotEnv.config();
const app = express();
connection();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static("dist"));
app.use('/*', express.static(__dirname + '/dist'));


const server = new ApolloServer({ typeDefs, resolvers });
 
server.applyMiddleware({ app });
 
app.listen({ port:  process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`)
);