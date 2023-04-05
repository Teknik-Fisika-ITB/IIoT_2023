const express = require('express');
const router = express.Router();
const data = require("../models/data");

/* GET HOME Page */

router.get('/',function(req,res,next){
    console.log("here");
    res.render("index",{});
});

router.get('/data',function(req,res,next){
    res.setHeader('Content-Type','text/event-stream');
    res.setHeader('Cache-Control','no-cache');
    res.setHeader('Connection','keep-alive');
    const intervalId = setInterval(()=>{
        data.stream((err,row)=>{
            if(err){
                console.error(err.message);
            }else{
                console.log(`data:${JSON.stringify(row)}\n\n`);
                res.write(`data:${JSON.stringify(row)}\n\n`);
            }
        });
    },1000);
});


module.exports = router;