import {MongoClient} from "mongodb"

const client = new MongoClient(process.env.MONGO_URL)
try{
    await client.connect()
    console.log("connected");
}catch (e) {
    console.log(e);
    process.exit(1)
}

export const db = client.db("shop")