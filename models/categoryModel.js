
const mongoose = require('mongoose');


// create schema
const categorySchema = new mongoose.Schema({
    name: String,
});

// create model
const CategoryModel = new mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
