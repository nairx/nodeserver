import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.listen(9090, () => console.log("Server started"))


app.post("/register", (req, res) => {
    console.log(req.body)
})