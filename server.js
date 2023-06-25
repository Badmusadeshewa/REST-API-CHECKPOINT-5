require('dotenv').config();  // Load environment variables from .env file
let express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const Person = require('./person');
const myDb = require ('./database');
const { ObjectId } = require('mongodb');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send('Sever Started');
   
})


//create a person model
   async function someone(){

    const person = new Person({
    name: 'John Doe',
     age: 25,
    favoriteFoods: ['Pizza', 'Burger'],
     });
    
try{
  await person.save();
     console.log('Person saved successfully:');
  } catch (error) {
    console.error('Error saving person:', error);
  };
   }
  //create and save record of a model
  //Create many records with model.create()
  try{
const arrayOfPeople = [
 { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
   { name: 'Bob', age: 35, favoriteFoods: ['Steak', 'Ice Cream'] },
  { name: 'Charlie', age: 40, favoriteFoods: ['Burger', 'French Fries'] }
];
  } catch(error){
    console.error('Errror creating array of people', error);
  };

  someone();

//Find model by Id
run();
async function run(){
  try{
 const findPerson= await Person.findById('6473299115c447150979a6e8')
 console.log (findPerson)
} catch(error){
  console.error('Error in finding peron', error);
};
}

//Find model by ID and update the name to ade
run();
async function run(){
  try{
 const findPerson= await Person.findByIdAndUpdate('6473299115c447150979a6e8', {name:'Ade'})
 console.log (findPerson)
} catch(error){
  console.error('Error in updating peron', error);
};
}

//Find model by name Doe
run();
async function run(){
  try{
 const findPerson= await Person.findByName({name: 'Doe'})
 console.log (findPerson)
} catch(error){
  console.error('Error in finding person by name', error);
};
}

//find model by ID and remove
run();
async function run(){
  try{
 const findPerson= await Person.findByIdAndRemove('647c6d9e4c90437f3c751f64')
 console.log (findPerson)
} catch(error){
  console.error('Error in deleting peron', error);
};
}



 // Start the server after successful database connection
 app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
  });

