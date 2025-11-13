import express from "express" ; 
import taksksController from "../controllers/tasks.controller.js" ; 

const router = express.Router() ; 


router.get('/' , taksksController.getAllTasks) ; // get all tasks 
router.post('/' , taksksController.addNewTask) ; // add new task
router.get('/:id' , taksksController.getTaskById) ; // get single task 
router.patch('/:id' , taksksController.updateTaskyId) ; // update task 
router.delete('/:id', taksksController.deleteTaskById) ; // delete task  






export default router ; 