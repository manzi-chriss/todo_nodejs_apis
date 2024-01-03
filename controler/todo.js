const routes= require('express').Router();
const Task = require('../model/todo');

routes.post('/',async (req, res) => {
    try{ 
    const {name,description} = req.body;
    const task =new Task({name,description});
    await task.save();

    return res.status(201).json({message:"task saved successfully"})

}catch(err){

    return res.status(500).send({message: err.message});
}
})


routes.get('/' ,async(req,res)=>{
    try{
        const tasks= await Task.find();
        return res.status(200).json(tasks);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

routes.get ('/:id', async(req,res)=>{
    try{
      const tasks = await Task.findById(req.params.id);
      return  res.status(200).json(tasks);
    }catch(errr){
       return res.status(500).send({message: err.message});
    }
})

routes.get('/check/:id',async(req, res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,{iscomplete:true},{new :true})
        if (task)
            return res.status(201).json({message:"Task successfully updated"})
    }
    catch(errr){
        return res.status(500).send({message: err.message});
    }
})



//  other routes


module.exports = routes
