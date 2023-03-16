const express = require('express');
const app = express();
const ejs = require('ejs');
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');

// render engine
app.set('view engine','html');
app.engine('html',ejs.renderFile);

// folder static untuk views
app.use(express.static('public'));

// route
app.get('/',homeController.index);

app.get('/about',aboutController.index);

// server
app.listen(3000,()=>{
    console.log('port 3000');
});