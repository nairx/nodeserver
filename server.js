import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.listen(9090, () => console.log("Server started"))

const users = [
    { id: 1, name: "John", email: "john@gmail.com", role: "user" },
    { id: 2, name: "Amy", email: "amy@gmail.com", role: "admin" },
    { id: 3, name: "Mike", email: "mike@gmail.com", role: "user" }
]

app.get("/api/users", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    res.json(users)
})

app.get("/api/users/:id", (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === Number(id))
    res.json(user)
})

app.get("/api/users/:id/:email", (req, res) => {
    const { id,email } = req.params
    console.log(email)
    const user = users.find(user => user.id === Number(id))
    res.json(user)
})

app.get("/api/users/id/:id/email/:email", (req, res) => {
    const { id,email } = req.params
    console.log(email)
    const user = users.find(user => user.id === Number(id))
    res.json(user)
})


// app.get("/api/products", (req, res) => {
//     res.json({ message: "Products" })
// })


app.get("/api/products", (req, res) => {
    const {id,name} = req.query
    console.log(id + name)
    res.json({ message: id })
})