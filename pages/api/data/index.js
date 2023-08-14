
import User from "../../../models/User";
import connectDB from "../../../utils/connetctDB";

export default async function handler  (req,res){
try{

  await connectDB();
}catch(error){
  console.log(error);
  res.status(500).json({status :"failed", message : "Error in connection to DB"});
}

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
    //save data in mongoDB

    // const user = new User({name});
    // await user.save();
try{
    const user = await User.create({name});
      console.log(user)

    res.status(201).json({
        status : "Success",
        message : "Data Created",
        data :user,
    })
  }catch(error){
    console.log(error);
    res.status(500).json({status : "failed" , message : "Error in storing data in DB"});
  }
  }
}