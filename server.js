import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.listen(9090, () => console.log("Server started"))

const users = [
    { id: 1, name: "John", email: "john@gmail.com", role: "user" },
    { id: 2, name: "Any", email: "amy@gmail.com", role: "admin" },
    { id: 3, name: "Mike", email: "mike@gmail.com", role: "user" }
]

app.get("/api/users", (req, res) => {
    res.json(users)
})