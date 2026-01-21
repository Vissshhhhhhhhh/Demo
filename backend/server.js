const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require('./src/routes/authROutes');
const taskRoutes = require('./src/routes/taskRoutes');
dotenv.config();
const app =express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("Mongo DB conencted successfully")})
    .catch((err)=>console.error(err))
//Routes
app.use('/api/auth',authRoutes);    
app.use('/api/task',taskRoutes);    


app.get('/api',(req,res)=>{
    res.status(404).send("Sending a msg");
})
app.post('/api',(req,res)=>{
    const temp = req.body;
    res.send(temp);
})
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})