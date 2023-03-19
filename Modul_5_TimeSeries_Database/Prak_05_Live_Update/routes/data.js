const express = require('express');
const router = express.Router();
const data = require("../models/data");

// get data API

router.get('/data',function(req,res,next){
    res.setHeader('Content-Type','application/json');
    res.setHeader('Cache-Control','no-cache');
    res.setHeader('Connection','keep-alive');
    console.log("here");
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