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

    res.status(201).json({
        status : "Success",
        message : "Data Created",
        data : {name}
    })
  }
}