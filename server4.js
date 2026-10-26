import express from "express"
import cors from "cors"
import userRouter from "./router/userRouter.js"
import productRouter from "./router/productRouter.js"
const app = express()
app.listen(9090, () => console.log("Server started"))

app.use("/users", userRouter)
app.use("/products", productRouter)