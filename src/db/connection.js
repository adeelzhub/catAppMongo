const { MongoClient } = require("mongodb")
require("dotenv").config()

const client = new MongoClient(process.env.MONGO_URI)


const connection = async (crudFunc, dataObj) =>{
    try{await client.connect();
        const db = client.db("Cats4adoption");
        const collection = db.collection("CatsInventory")
        // await collection.insertOne({name: "Steve"})
        await crudFunc(collection, dataObj);
        client.close();
    }catch (error){
    console.log(error)
};
};


// connection();

module.exports = connection;