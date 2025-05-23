const Category = require('../models/categoryModel');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');


exports.getCategories = (req, res) => {
    // const name = req.body.name;
    // console.log(req.body);

    res.send();
    
};

exports.createCategory = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const category = await Category.create({ name, slug: slugify(name) });
    res.status(201).json({ data: category });
});
