import express from "express"
import cors from "cors"
const app = express()
app.listen(9090, () => console.log("Server started"))
const userRouter = express.Router()
const productRouter = express.Router()

//Products end points
productRouter.get("/", (req, res) => {
    res.json({ message: "Products" })
})
productRouter.get("/:id", (req, res) => {
    res.json({ message: req.params.id })
})

//users end points
userRouter.get("/", (req, res) => {
    res.json({ message: "users" })
})
userRouter.get("/:id", (req, res) => {
    res.json({ message: req.params.id })
})


app.use("/users", userRouter)
app.use("/products", productRouter)