exports.listCats = async (collection) =>{
    try{
        let breed = 1
        const lst = await collection.find({}).toArray();
        lst.map(cat =>console.log(`\nCat Breed: ${breed++} \n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost} each.`));
    }catch(error){
        console.log(error)

    }
}

exports.addCat= async (collection, dataObj) =>{
    try{
        await collection.insertOne(dataObj)
        console.log(`\n${dataObj.name} added to the Inventory successfully.`)
    }catch(error){
        console.log(error)

    }
}
exports.updateCatNumbers = async (collection,updateCat) => {
try{
    let cat = await collection.findOne({name: updateCat.name});
    let newNumbers = (+cat.numbers) + (+updateCat.addNumber)
    await collection.updateOne({name:updateCat.name},{$set:{numbers: newNumbers}})
    console.log(`\nThe numbers of  cat breed "${updateCat.name}" has been increased by ${updateCat.addNumber}`)
}catch(error){
    console.log(error);
}
}
exports.findCat= async (collection, catName) =>{
    try{
       let cat = await collection.findOne({name: catName});
       console.log(`\n${cat.numbers} ${cat.name} up for adoption, adoption cost : £${cat.adoptionCost} each.`);
    }catch(error){
        console.log(error);

    }
}
exports.deleteCat = async (collection, catName) =>{
   try{
        await collection.deleteOne({name: catName});
        console.log(`\n${catName} deleted successfully.`);
   } catch(error){
       console.log(error);
   }
}