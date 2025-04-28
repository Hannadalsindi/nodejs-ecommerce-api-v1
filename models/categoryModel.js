
const mongoose = require('mongoose');


// create schema
const categorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Category required'],
        unique: [true, 'Category must be unique'],
        minlength: [3, 'Too short category name'],
        maxlength: [32, 'Too long category name'],
      },
      // A and B => shoping.com/a-and-b
      slug: {
        type: String,
        lowercase: true,
      },
      image: String,
    },
    { timestamps: true }
  );
// create model
const CategoryModel = new mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
