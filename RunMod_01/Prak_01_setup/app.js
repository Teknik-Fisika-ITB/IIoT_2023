const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
    next();
});

app.get('/',(req,res) => {
    res.send("Sampai juga disini");
});

app.get('/about',(req,res) => {
    res.send("Sampai juga about");
});

app.get('/contact',(req,res) => {
    res.send("Sampai juga contact");
});

app.get('/news',(req,res) => {
    res.send("Sampai juga news");
});

app.get((req,res) => {
    res.status(404).send("Anda Tersesat");
});

app.listen(3000, () => {
    console.log("server berjalan di port 3000");
});