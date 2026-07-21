import express from "express"
import { MongoClient, ObjectId } from "mongodb"
import { } from "./routs/leaderboard.js"
import { } from "./routs/scores.js"
import { } from "./routs/stats.js"
const a = process.env.MONGO_URL


const client = new MongoClient(a);

try {
    await client.connect();
    console.log("connectet");
} catch (e) {
    console.log(e);
    process.exit(1)
}

const db = client.db('');