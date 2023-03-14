const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');

// setting middleware dari express aplication untuk menampilkan HTML
app.set('view engine','html');
app.engine('html',require('ejs').renderFile);

// setting middleware dari express aplication untuk menggunakan folder static
app.use(express.static('public'));


// middleware route memanggil callback function yang merupakan index method di homecontroller
app.get('/',homeController.index);

app.listen(3000,()=>{
    console.log('aplikasi berjalan pada port 3000');
})