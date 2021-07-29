const imageRouter = require('express').Router();

let Image = require('../model/product.model');

//home
imageRouter.route('/').get((req, res)=>{
    Image.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error :' + err));
});

//add
imageRouter.route('/add').post((req, res)=>{

    const url = req.body.url;
    const product_id = req.body.product_id;
    const order = req.body.order;

    const newImage = new Image({url, product_id, order});

    newImage.save()
        .then(image => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error :' + err));

})


//details
imageRouter.route('/:id').get((req,res) =>{
    Image.findById(req.params.id)
    .then(image => res.json(image))
    .catch(err => res.status(400).json('Error :' + err))
})

//delete
imageRouter.route('/:id').delete((req,res) =>{
    Image.findByIdAndDelete(req.params.id)
    .then(image => res.json('record deleted'))
    .catch(err => res.status(400).json('Error :' + err))
})

//update
imageRouter.route('/update/:id').post((req, res)=>{

    Image.findById((req.params.id))
    .then(image => {
        image.url = req.body.url;
        image.product_id = req.body.product_id;
        image.order = req.body.order;
    

        image.save()
            .then(() => res.json('Record was updated!'))
            .catch(err => res.status(400).json('Error :' + err));
    })
    .catch(err => res.status(400).json('Error :' + err));

})



module.exports = imageRouter;