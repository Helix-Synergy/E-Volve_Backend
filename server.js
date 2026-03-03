const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors")
const signuprouter=require("./router/routers")
// db connection
const connectDB=require("./config/db");
connectDB();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// routes
app.use("/auth",signuprouter);



// server
app.listen(process.env.PORT,()=>{console.log("Sever is running")})