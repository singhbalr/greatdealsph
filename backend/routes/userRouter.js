const userRouter = require('express').Router();

let User = require('../model/user.model');

//home
userRouter.route('/').get((req, res)=>{
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error :' + err));
});

//add
userRouter.route('/add').post((req, res)=>{

    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const telephone = req.body.telephone;
    const email = req.body.email;

    const newUser = new User({username, password, first_name, last_name, telephone, email});

    newUser.save()
        .then(health => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error :' + err));

})


//details
userRouter.route('/:id').get((req,res) =>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error :' + err))
})

//delete
userRouter.route('/:id').delete((req,res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(user => res.json('record deleted'))
    .catch(err => res.status(400).json('Error :' + err))
})

//update
userRouter.route('/update/:id').post((req, res)=>{

    User.findById((req.params.id))
    .then(user => {
        user.username = req.body.username;
        user.password = req.body.password;
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.telephone = req.body.telephone;
        user.email = req.body.email;
    
    
        user.save()
            .then(() => res.json('Record was updated!'))
            .catch(err => res.status(400).json('Error :' + err));
    })
    .catch(err => res.status(400).json('Error :' + err));

})



module.exports = userRouter;