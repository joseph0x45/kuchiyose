import express, {Request, Response} from "express"
import cors from "cors"
const app = express()
app.use(cors())
const PORT = process.env.PORT || 5000



















app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})