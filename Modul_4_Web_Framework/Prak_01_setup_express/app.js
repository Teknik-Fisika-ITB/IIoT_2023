const express = require('express');
const app = express();

// middleware untuk logging setiap request
app.use((req,res,next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next();
})

// route untuk halaman berdasarkan dengan url request
app.get('/', (req,res) => {
    res.send('Halo dari expressJS');
})

app.get('/about', (req,res) => {
    res.send('Ini adalah contoh halaman about');
})

app.get('/contact', (req,res) => {
    res.send('Ini adalah contoh halaman contact');
})

// route untuk kesalahan halaman
app.get((req,res)=>{
    res.status(404).send("Halaman tidak ditemukan!");
})

app.listen(3000, ()=>{
    console.log('aplikasi ini berjalan pada port 3000');
})