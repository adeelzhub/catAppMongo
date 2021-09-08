const { Collection } = require("mongodb");
const connection = require("./db/connection");
const {listItems, adopted, addCat, updateItem, deleteItem,commandList} = require("./utils")
const command = process.argv[2];

const app = async () =>{
    if(command === "list"){
        await connection(listItems)
            
    }else if(command === "add"){
        const newCat ={
            name : process.argv[3],
            adoptionCost: process.argv[4],
            numbers: process.argv[5],
        }

        await connection(addCat, newCat)
    // }else if (command === "update"){
    //     const id = +process.argv[3];
    //     const addNumbers = +process.argv[4];
    //     updateItem(id, addNumbers);
    // }else if (command === "delete"){
    //     const id = +process.argv[3];
    //     deleteItem(id);


    }else{
        console.log("Invalid Command\n")
        console.log("List of valid commands")
        commandList()
    };
};




// app();


const myFunc = async(collection) =>{
    const lst = await collection.find({}).toArray();
    lst.map(cat => console.log(`\nCat Id: ${cat.id} \n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost}`));
    // console.log(lst.length);
}


connection(myFunc)