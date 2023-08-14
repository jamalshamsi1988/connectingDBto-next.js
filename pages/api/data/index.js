import mongoose from "mongoose";

export default function handler  (req,res){
  if(req.method === "POST") { 
    const {name} = req.body;
    console.log(name)

    if(!name || name.length <=3){
        res.status(422).json({
            status : "Failed",
            message : "Invalid data"
        })
        return;
    }

    // Connected to DB
    mongoose.connect("mongodb+srv://jamal:j11067sh@cluster0.lnfefkh.mongodb.net/?retryWrites=true&w=majority",
    ()=> console.log("Connected to DB")
    );

    res.status(201).json({
        status : "Success",
        message : "Data Created",
        data : {name}
    })
  }
}