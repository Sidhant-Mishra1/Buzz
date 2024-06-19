import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
// const app=express();


const port=process.env.port || 5001;

dotenv.config();

app.use(express.json());  //to parse incoming requests with JSON payloads from (req.body)
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)




// app.get('/',(req,res)=>{
//     // root route
//     res.send("Hey world");
// })



server.listen(port,()=>{
    connectToMongoDB()
    console.log(`Server is running on ${port}`);
})