const productRouter = require('express').Router();

let Product = require('../model/product.model');

//home
productRouter.route('/').get((req, res)=>{
    Product.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error :' + err));
});

//add
productRouter.route('/add').post((req, res)=>{

    const name = req.body.name;
    const description = req.body.description;
    const sku = req.body.sku;
    const category_id = req.body.category_id;
    const inventory_id = req.body.inventory_id;
    const price = req.body.price;
    const discount = req.body.discount;

    const newProduct = new Product({name, description, sku, category_id, inventory_id, price, discount});

    newProduct.save()
        .then(product => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error :' + err));

})

productRouter.route('/addBatch').post((req, res)=>{
    const batchRequest = req.body;
    // const name = req.body.name;
    // const description = req.body.description;
    // const sku = req.body.sku;
    // const category_id = req.body.category_id;
    // const inventory_id = req.body.inventory_id;
    // const price = req.body.price;
    // const discount = req.body.discount;

    // const newProduct = new Product({name, description, sku, category_id, inventory_id, price, discount});

    // newProduct.save()
    //     .then(product => res.json('New Record Added!'))
    //     .catch(err => res.status(400).json('Error :' + err));


    // const array = [
    //     {firstName: "Jelly", lastName: "Bean"},
    //     {firstName: "John", lastName: "Doe"}
    // ];
    
    Product.insertMany(req.body)
        .then(product=>{
            res.json('New Record Added!')
        })
        .catch(err =>{
            res.status(400).json('Error :' + err)
        });

})


//details
productRouter.route('/:id').get((req,res) =>{
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error :' + err))
})

//delete
productRouter.route('/:id').delete((req,res) =>{
    Product.findByIdAndDelete(req.params.id)
    .then(product => res.json('record deleted'))
    .catch(err => res.status(400).json('Error :' + err))
})

//update
productRouter.route('/update/:id').post((req, res)=>{

    Product.findById((req.params.id))
    .then(product => {
        product.name = req.body.name;
        product.description = req.body.description;
        product.sku = req.body.sku;
        product.category_id = req.body.category_id;
        product.inventory_id = req.body.inventory_id;
        product.price = req.body.price;
        product.discount = req.body.discount;
    

        product.save()
            .then(() => res.json('Record was updated!'))
            .catch(err => res.status(400).json('Error :' + err));
    })
    .catch(err => res.status(400).json('Error :' + err));

})



module.exports = productRouter;