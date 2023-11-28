import express from "express";
import DataModel from "./DataModel.js";
const DataRouter = express.Router();

DataRouter.get("/ques" , async(req , res)=>{
    const ques = await DataModel.find()
    // res.json(ques)
    res.status(200).send(ques)
    // console.log(ques)
    
})

DataRouter.post("/add" , async(req,res)=>{
    const DataToadd = new DataModel(req.body)
    let ques = await DataToadd.save()
    res.json(ques)
    // console.log(ques)
})






export default DataRouter