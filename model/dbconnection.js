const mongoose = require('mongoose')

require('dotenv').config()
async function connectToDB(){
    try{        
        await mongoose.connect(process.env.dbString,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connected to db');   
    }catch(e){
        console.log(" Error :"+e.message)
    }
}


module.exports = connectToDB;
