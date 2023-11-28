import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import DataRouter from "./DataRouter.js";

const password = encodeURIComponent("nisha0972")
const connection = mongoose.connect(`mongodb+srv://nishajangir9302:${password}@cluster0.wm71tna.mongodb.net/?retryWrites=true&w=majority`)
const app = express();
app.use(cors())

app.use(express.json())
app.use("/data", DataRouter)


connection.then(()=>{
    app.listen(9080 , ()=>console.log("Server is stated at port 9080 "))
})
.catch((err)=>console.log("err" + err))