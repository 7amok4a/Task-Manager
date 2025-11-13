import express from "express" ; 
import dotenv from "dotenv" ; 
import notFoundMiddleware from "./middleware/notFoundHandler.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import connectDb from "./database/connect.js"
import tasksRouter from "./routers/tasks.routers.js" 
dotenv.config() ; 


const PORT = process.env.PORT ; 
const URL_DB = process.env.URL_DB ; 
const app = express() ; 

app.use(express.static('public')) ; 
app.use(express.urlencoded({extended : false})) ; 
app.use(express.json()) ; 

//endpoints 
app.use("/api/v1/tasks" , tasksRouter) ; 
app.use(notFoundMiddleware) ; 
app.use(errorHandlerMiddleware) ; 


//console.log(PORT) ; 
const start = async()=> {
    try {
        await connectDb(URL_DB) ; 
        app.listen(PORT , () => {console.log(`Server is running in http://localhost:${PORT}`)}) ; 
    }catch(err) {
        console.log(err) ; 
    }
}

start() ; 
