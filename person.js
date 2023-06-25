let mongoose=require('mongoose')
const { Schema } = mongoose;
//create the person schema
let personSchema = new mongoose.Schema({
  name: { type: String, required:true},
  age: { type: Number },
  favoriteFoods: { type: [String] },

});


module.exports = mongoose.model("Person", personSchema)


