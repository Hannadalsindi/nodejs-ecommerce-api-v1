const CategoryModel = require('../models/categoryModel');
const slugify = require('slugify');

exports.getCategories = (req, res) => {
    // const name = req.body.name;
    // console.log(req.body);

    res.send();
    
};

exports.createCategory = (req,res)=>{
    const name = req.body.name;
    CategoryModel.create({name, slug: slugify(name) }).then((category))=>
        res.status(201).json({data: category})
        .catch((err)=> res.status(400).send(err));

    
}