const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// allow cross-origin request
app.use(cors());

//connect to mlab database

mongoose.connect('mongodb+srv://brijesh_Modi:Hari3690@cluster0.3snyz.mongodb.net/GraphQL_First?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
 console.log('connected to databse');
})
app.use('/graphql',graphqlHTTP({

 schema,
 graphiql: true

}));

app.listen(4000,()=>{
console.log("now listening for requests on port 4000")});