import env from 'dotenv'
import express from "express";
import  mongoose  from "mongoose";
import cors from "cors";
import postRoutes from './routes/Rposts.js'
env.config();
const app = express();

app.use('/posts',postRoutes)
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
app.use(cors())

const connection_URL = process.env.DB_URL
const PORT = process.env.PORT || 8000

mongoose.connect(connection_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,() => console.log(`Server running on Port: ${PORT}`)))
.catch((error)=>console.log(error.message));
