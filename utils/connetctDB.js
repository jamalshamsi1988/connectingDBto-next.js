import mongoose from "mongoose"


async function connectDB (){
    try{
        if(mongoose.connections[0].readyState) return;

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB")

    }catch(error) {
        console.log("Error on Connected to DB")
    }
}
export default connectDB;