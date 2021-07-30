const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const imageRouter = require('./routes/imageRouter');

// middleware

app.use(cors());
app.use(express.json({limit: '25mb'}));

//configs
// app.use(express.urlencoded({extended:true, limit: '25mb'}));
// app.use(express.json({limit: '25mb'}));


//mongodb connection
const uri = process.env.ATLAS_URI;
const option = {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true}
mongoose.connect(uri, option);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB Database connection is established");
})



//cruds route
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/image', imageRouter);

app.listen(port, () => {
    console.log(`Server is running in port : ${port}`)
});

