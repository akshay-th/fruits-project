const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");


const fruitSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please check entry,no name specified"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});



const Fruit=mongoose.model("Fruit",fruitSchema);


const strawberry=new Fruit({
    name:"strawberry",
    rating:3,
    review:"not a great fruit"
});


  strawberry.save();

const peopleSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFruit:fruitSchema
});
const People=mongoose.model("People",peopleSchema);
// const people=new People({
//     name:"dan",
//     age:34,
//     favoriteFruit:pineapple
// });

//    people.save();
People.updateOne({name:"john"},{favoriteFruit:strawberry},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("ssuccessfully updated one document");
    }
});

// People.deleteMany({name:"john"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully deleted all");
//     }
// });
const kiwi=new Fruit({
    name:"kiwi",
    rating:6,
    review:"tastes good"
});
const grapes=new Fruit({
    name:"grapes",
    rating:8,
    review:"better than some"
});
const orange=new Fruit({
    name:"orange",
    rating:4,
    review:"too sour for me"
});


// Fruit.updateOne({_id:"6296fdd5a7ac7faac4cb5a15"},{name:"peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         // mongoose.connection.close();
//         console.log("successfully updated");
//     }
// });

// Fruit.deleteOne({_id:"6296fdd5a7ac7faac4cb5a15"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("deleted successfully");
//     }
// });


// Fruit.insertMany([kiwi,grapes,orange],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully saved all the fruits to fruitsDB");
//     }
// });

// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     }else{
//         mongoose.connection.close();
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
// });