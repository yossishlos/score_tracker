import express from "express"
import { getAll, getById, create, deleteById, updateById } from "./dal.js"
const router = express.Router()

router.get("/", async (req, res) => {
    const users = await getAll()
    return res.json(users)
})

router.get("/:id", async (req, res) => {
    const user = await getById(req.params.id)
    if (!user) return res.status(404).json({ err: "user not found" })
    return res.json(user)
})

router.post("/", async (req, res) => {
    const result = await create(req.body)
    if (!result) return res.status(500).json({ err: "something rong" })
    return res.json(req.body)
})

router.put("/:id", async(req, res) => {
    const result = await updateById(req.params.id, req.body)
    if (!result) return res.status(500).json({ err: "something rong" })
    return res.json({data: result})
})

router.delete("/:id", async (req, res) => {
    const result = await deleteById(req.params.id)
    return res.json(result)
})

export default router