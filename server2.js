import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.listen(9090, () => console.log("Server started"))

let users = []



app.post("/register", (req, res) => {
    try {
        users.push(req.body)
        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }

})


app.get("/users", (req, res) => {
    res.json(users)
})

