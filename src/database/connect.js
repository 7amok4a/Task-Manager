import mongoose  from "mongoose"; 


const connectDb  = async(URL_DB)=> {
    await mongoose.connect(URL_DB).then(()=>{
        console.log(`Database connection in ${URL_DB}`) ; 
    }).catch(err =>console.log(err)) ; 
} 



export default connectDb ; 