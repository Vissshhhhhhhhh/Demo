
const task = require("../models/task");
const jwt = require("jsonwebtoken");
exports.createTask = async (req, res) => {
  try {
    const { title, desc, status } = req.body;

    if (!req.user.id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    const newTask = await task.create({
      title,
      desc,
      status,
      user: req.user.id 
    });

    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getTask = async (req,res)=>{
  try{
    const tasks = await task.find({
      desc:req.params.id
    });
    if(tasks === null){
      return res.json({message:"No tasks found in DB"});
    }
    res.json(tasks);
  }
  catch(err){
    res.json({message: err.message});
  }
}
exports.updateTaskPUT = async (req,res)=>{
  try{
    const Task = await task.findOneAndUpdate({
      _id:req.params.id,
      user : req.user.id
    },req.body,{new:true});
    if(!Task){
      return res.status(404).json({message:"Task not found"});
    }
    res.status(200).json({message:"Task updated successfully",Task});
  }
  catch(err){
    return res.json({message:err.message});
  }
}

exports.updatePatch = async (req,res)=>{
  try{
    const Task = await task.findOneAndUpdate({
      _id:req.params.id,user:req.user.id
    },{ $set: req.body },{new: true});
    if(!Task){
      return res.json({message:"Task not found"});
    }
    res.json({message:"Task updated ",Task});
  }
  catch(err){
    return res.json({message:"err.message"});
  }
}