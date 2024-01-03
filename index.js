const express = require('express');
const cors= require('cors');
require('dotenv').config();

const todoRoutes = require('./controler/todo');
const connect = require('./model/dbconnection');
connect();
app = express();


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/todo', todoRoutes)


app.listen(4000,()=>{
    console.log('todo app server started ')
});