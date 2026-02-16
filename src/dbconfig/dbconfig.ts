import mongoose from 'mongoose';
export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URI!)
         console.log("MongoDB connection initiated")
        
    } catch (error) {
        console.log("Something went wrong!");
        console.error(error)
    }
}
const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDb connected successsfully");
        })
        
        connection.on('error',(err)=>{
            console.log('Mongodb connection error. Please make sure MongoDb is running,'+err);
            process.exit();
        })