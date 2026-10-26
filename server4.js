import express from "express"
import cors from "cors"
import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js"
const app = express()
app.listen(9090, () => console.log("Server started"))

app.use("/users", userRouter)
app.use("/products", productRouter)