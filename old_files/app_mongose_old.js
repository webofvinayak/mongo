const mongoose = require('mongoose');

// MongoClient constructor. in mongoose is shorter
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true,useUnifiedTopology: true });


const fruitSchema= new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

//create collections

const Fruit = mongoose.model("Fruit",fruitSchema);

const newFruit= new Fruit({
  name: "Apple",
  rating:7,
  review: "awesome"
});

newFruit.save();



const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
      {
        name:"Apple",
        score:8,
        review:"great Fruit"
      },
      {
        name:"Orange",
        score:6,
        review:"kinda sour"
      },
      {
        name:"Banana",
        score:9,
        review:"Great stuff"
      }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
