require('dotenv').config();
mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model("Person", personSchema);

let arrayOfPeople = [
  { name: "Maria", age: 28, favoriteFoods: ["sushi", "temaki", "ramen"] },
  { name: "João", age: 40, favoriteFoods: ["feijoada", "pão de queijo", "churrasco"] },
  { name: "Ana", age: 22, favoriteFoods: ["salada", "quinoa", "abacate"] },
  { name: "Carlos", age: 35, favoriteFoods: ["hamburguer", "batata frita", "milkshake"] }
]

const createAndSavePerson = (done) => {
  let osmar = new Person({ name: "Osmar", age: 34, favoriteFoods: ["pizza", "lasanha", "estrogonofe"] })

  osmar.save((err, data) => {
    if (err) return done(err)
    done(null, data);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err)
    done(null, data);
  });

};

createManyPeople(arrayOfPeople, (err, data) => {
  if (err) return console.log(err)
  console.log(data)
});

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
