import express from "express"

const Router = express.Router()

//Products end points
Router.get("/", (req, res) => {
    res.json({ message: "Users" })
})
Router.get("/:id", (req, res) => {
    res.json({ message: req.params.id })
})

export default Router