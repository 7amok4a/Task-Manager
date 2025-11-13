import Task from "../modules/Task.module.js";
import asyncWrapper from "../middleware/asyncWrapper.js";
import  {createCustomError} from "../errors/custom-error.js"

const addNewTask =  asyncWrapper(async(req , res) => {
    const task = await Task.create(req.body) ;
    res.status(201).json({task}) ; 
})

const getAllTasks = asyncWrapper(async(req , res)=> {
    const tasks = await Task.find({}) ;
    res.status(201).json({tasks}) ; 
} )

const getTaskById =  asyncWrapper(async(req , res , next) => {
    const {id} = req.params ;
    const task = await Task.findById(id) ;
    if(!task) 
        return next(createCustomError(`No task with id : ${id}`, 404))
    res.status(200).json({task}) ; 
})



const updateTaskyId = asyncWrapper(async(req , res , next)=> {
    const {id} = req.params ; 
    const task = await Task.findByIdAndUpdate({_id :id}, req.body , {new : true , runValidators : true}) ;
    if(!task) 
        return next(createCustomError(`No task with id : ${id}`, 404))
    res.status(200).json({task}) ; 
})

const deleteTaskById = asyncWrapper(async(req , res , next) => {
    const {id} = req.params ; 
    const task = await Task.findByIdAndDelete({_id :id}, req.body ) ;
    if(!task) 
        return next(createCustomError(`No task with id : ${id}`, 404))
    res.status(200).json({message : `task deleted with id ${id}`}); 

}) ; 



const editTask = asyncWrapper(async(req , res , next) => {
    const {id} = req.params ; 
    const task = await Task.findByIdAndUpdate({_id :id}, req.body , {new : true , runValidators : true , overwrite : true }) ;
    if(!task) 
        return next(createCustomError(`No task with id : ${id}`, 404))
    res.status(200).json({task}) ; 
})

export default {
    addNewTask , 
    getAllTasks , 
    getTaskById , 
    updateTaskyId , 
    deleteTaskById , 
    editTask 
} ; 