import express from "express"
import "dotenv/config"
import cors from "cors"


const app = express()
app.use(cors()) //Enable cross origin Resourse Sharing

app.get("/", (req,res)=> res.send("Api is Working"))

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`server running on PORT No ${PORT}`)
})