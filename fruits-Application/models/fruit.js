require('dotenv').config()
const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true },
    Description: {type: String, required: true},
    isTastie: {type: Boolean, required: true},
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit