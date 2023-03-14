// modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// controllers
const UsersController = require('./controllers/userController');

// applications
const app = express();

// setup view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// setup static files location
app.use(express.static(path.join(__dirname,'public')));

// setup body parser
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.get('/', UsersController.index);
app.post('/',UsersController.create);

// error handling
app.use((req,res,next)=>{
    res.status(404).render('error',{message:"page not found"});
})

app.use((err,req,res,next)=>{
    res.status(500).render('error',{message:err.message});
})

// start server
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});
