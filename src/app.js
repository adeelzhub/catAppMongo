const { Collection } = require("mongodb");
const connection = require("./db/connection");
const {listCats, findCat, addCat, updateCatNumbers, deleteCat,commandList} = require("./utils")
const command = process.argv[2];

const app = async () =>{
    if(command === "list"){
        await connection(listCats)
            
    }else if(command === "add"){
        const newCat ={
            name : process.argv[3],
            adoptionCost: process.argv[4],
            numbers: process.argv[5],
        }
        await connection(addCat, newCat)
    }else if(command === "update"){
        const updateCat ={
           name: process.argv[3],
           addNumber: process.argv[4]
        }
        await connection(updateCatNumbers, updateCat);
 
    }else if (command === "find"){
        const catName = process.argv[3];
        await connection (findCat, catName);
    }else if (command === "delete"){
        const catName = process.argv[3];
        await connection(deleteCat, catName)
    }else{
        console.log("Invalid Command\n")
        console.log("List of valid commands")
        commandList()
    };
};




app();


