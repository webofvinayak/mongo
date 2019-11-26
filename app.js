const mongoose = require('mongoose');

// MongoClient constructor. in mongoose is shorter
mongoose.connect("mongodb://localhost:27017/peopleDB",{ useNewUrlParser: true,useUnifiedTopology: true });

const fruitSchema= new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is not entered !!"]
    },
  rating:{
    type:Number,
    min:1,
    max:10 },
  review: String
});

//create collections

const Fruit = mongoose.model("Fruit",fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating:7,
  review: "awesome"
});

const kiwi =new Fruit({
  name:"kiwi",
  rating:9,
  review:"best in category"
});

const banana =new Fruit({
  name:"Banana",
  rating:6,
  review:"good"
});
//kiwi.save();


const peopleSchema= new mongoose.Schema({
  name: String,
  age: Number,

  });

//create collections

const Person = mongoose.model("People",peopleSchema);

const newPerson = new Person({
  name: "Vinayak",
  age:31,

});
//Fruit.insertMany([apple,banana,kiwi],function(err){
  //if(err){console.log(err)};  });
//newPerson.save();
Fruit.updateOne({_id:"5ddd06b65bcece2706afc57c"},{name:"Orange"},function(err){
  if(err){console.log("failed to update Database !!");}

});

Fruit.deleteOne({_id:"5ddd09eddd4ea627eb53ca9a"},function(err){ console.log(err);});

//Person.deleteMany({name:"vinayak"},function(err){});

Fruit.find(function(err,allFruits){
  allFruits.forEach(function(d){
    console.log(d.name);
      });
    mongoose.connection.close();
//if(err){console.log(err);}else{console.log(allFruits);}
});
