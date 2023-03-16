const express = require('express');
const router = express.Router();
const data = require("../models/data");


/* GET HOME Page */

router.get('/',function(req,res,next){
    res.render("index",{});
});

router.get('/data',function(req,res,next){
    res.setHeader('Content-Type','application/json');
    res.setHeader('Cache-Control','no-cache');
    res.setHeader('Connection','keep-alive');

    const intervalId = setInterval(()=>{
        data.stream((err,rows)=>{
            if(err){
                console.error(err.message);
            }else{
                res.write(`data:${JSON.stringify(row)}\n\n`);
            }
        });
    },1000);
});

module.exports = router;