const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// routers
const indexRouter = require('./routes/index');
const dataRouter = require('./routes/data');
// applications
const app = express();

// setup view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(cors());
// setup static files location
app.use(express.static(path.join(__dirname,'public')));

// setup body parser
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',indexRouter);
// app.use('/data',dataRouter);

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