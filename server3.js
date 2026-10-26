import express from "express"
import cors from "cors"
const app = express()

// app.use("/images", express.static("images"))


app.use(express.static("public"))


app.listen(9090, () => console.log("Server started"))