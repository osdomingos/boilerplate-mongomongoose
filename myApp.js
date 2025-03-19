require('dotenv').config();
const mongoose = require('mongoose');

// Conectar ao MongoDB com tratamento de erro assíncrono
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Definição do Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model("Person", personSchema);

// Exemplo de criação e salvamento de uma pessoa
const createAndSavePerson = async (done) => {
  try {
    const osmar = new Person({ name: "Osmar", age: 34, favoriteFoods: ["pizza", "lasanha", "estrogonofe"] });
    const data = await osmar.save();
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para criar múltiplas pessoas
const createManyPeople = async (arrayOfPeople, done) => {
  try {
    const data = await Person.create(arrayOfPeople);
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para encontrar pessoas por nome
const findPeopleByName = async (personName, done) => {
  try {
    const data = await Person.find({ name: personName });
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para encontrar uma pessoa por um alimento favorito
const findOneByFood = async (food, done) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para encontrar uma pessoa por ID
const findPersonById = async (personId, done) => {
  try {
    const data = await Person.findById(personId);
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para editar e salvar a pessoa
const findEditThenSave = async (personId, done) => {
  try {
    const data = await findPersonById(personId, done);
    data.favoriteFoods.push("hamburger");
    const updatedData = await data.save();
    done(null, updatedData);
  } catch (err) {
    done(err);
  }
};

// Função para atualizar a idade de uma pessoa
const findAndUpdate = async (personName, done) => {
  try {
    const data = await Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true });
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para remover uma pessoa pelo ID
const removeById = async (personId, done) => {
  try {
    const data = await Person.findByIdAndRemove(personId);
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para remover várias pessoas
const removeManyPeople = async (done) => {
  try {
    const data = await Person.deleteMany({ name: "Mary" });
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Função para encadear consultas
const queryChain = async (done) => {
  try {
    const data = await Person.find({ favoriteFoods: { $in: ["burrito"] } })
      .limit(2)
      .select('-age')
      .sort({ name: 1 })
      .exec();
    done(null, data);
  } catch (err) {
    done(err);
  }
};

/** **Well Done !!**
 * You completed these challenges, let's go celebrate!
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
