import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();

app.use(express.json());
dotenv.config();  // load the env variables from .env file
const PORT = process.env.PORT || 5000;
const mongo_url = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB connected successfully")
    app.listen(PORT, ()=>{
        console.log(`Sever is running on port ${PORT}`);
    });
})
  .catch(err => console.log(err));


