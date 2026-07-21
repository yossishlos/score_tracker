import express from "express"
import usersRouter from "./routusers.js"

const app = express()

app.use(express.json())

app.use("/users", usersRouter)

app.listen(3000, (e) => {
    if (e) return console.log(e);
    console.log("running...");
})