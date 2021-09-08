exports.listItems = async (collection) =>{
    try{
        const lst = await collection.find({}).toArray();
        lst.map(cat => console.log(`\nCat Id: ${cat.id} \n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost}`));
    }catch(error){
        console.log(error)

    }
}

exports.addCat= async (collection, dataObj) =>{
    try{
        await collection.insertOne(dataObj)
    }catch(error){
        console.log(error)

    }
}
