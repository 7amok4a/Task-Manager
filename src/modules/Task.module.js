import mongoose from "mongoose";



const TaskSchema = new mongoose.Schema({

    name : {
        type : String  , 
        required : [true , 'must be provid name']  , 
        trim : true , 
        maxlength : [20 , 'name can not be more than 20 character']  
    } ,  
    completed: {
      type: Boolean,
      default: false,
    },

} , {timestamps : true})



const Task = mongoose.model('tasks' , TaskSchema ) ; 


export default Task ; 