const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


dotenv.config({path: 'config.env'});

// Connect with db  



const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}
// create schema
const categorySchema = new mongoose.Schema({
    name: String,
});

// create model
const CategoryModel = new mongoose.model('Category', categorySchema);

//create Routes  

app.post('/', (req, res) =>{
    const name = req.body.name;
    console.log(req.body);

    const newCategory = new CategoryModel({ name });
    newCategory
        .save()
        .then((doc) =>{
            res.json(doc);
        })
        .catch((err) => {
            res.json(err);
        });
        });


app.get('/', (req, res) =>{
    res.send('Our Api 1')
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('App running running on port ${PORT}');
});
