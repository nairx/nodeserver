import express from "express"
const app = express()
app.listen(9090, () => console.log("Server started"))

const logger = (req, res, next) => {
    req.message = "Logger Message"
    next()
}

app.get("/", (req, res) => {
    console.log(req.message)
    res.json({ message: "Hello" })
})

app.use(logger)

app.get("/users", (req, res) => {
    console.log(req.message)
    res.json({ message: "Users" })
})

app.get("/products", (req, res) => {
    console.log(req.message)
    res.json({ message: "Products" })
})