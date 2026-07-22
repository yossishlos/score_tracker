import { db } from "./db.js"
import { ObjectId } from "mongodb"
const collection = db.collection("users")

async function getAll() {
    try {
        return await collection.find().toArray()
    } catch (e) {
        console.log(e);
    }
}

async function getById(id) {
    try {
        return await collection.findOne({ _id: new ObjectId(id) })
    } catch (e) {
        console.log(e);
    }
}


async function create(newData) {
    try {
        return await collection.insertOne(newData)
    } catch (e) {
        console.log(e);
    }
}

async function deleteById(id) {
    try {
        return await collection.deleteOne({ _id: new ObjectId(id) })
    } catch (e) {
        console.log(e);
    }
}

async function updateById(id, newData) {
    try {
        return await collection.findOneAndUpdate({ _id: new ObjectId(id) }, {
            $set: newData
        }, { returnDocument: "after" }
        )
    } catch (e) {
        console.log(e);
    }
}

export{
    getAll,
    getById,
    create,
    deleteById,
    updateById
}