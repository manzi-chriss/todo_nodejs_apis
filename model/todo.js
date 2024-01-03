const mongoose = require ('mongoose');
const taskschema=new  mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    complete:{type:Boolean ,default:false}
});


const Task= mongoose.model('Task', taskschema)

module.exports =Task;