var express = require('express');
var router = express.Router();
var data = require("../models/data");


/* GET HOME Page */
router.get('/',function(req,res,next){
    data.getTemperature((err,rows) => {
        console.log(err);
        if(err){
            res.render("error",{message:err.message});
        } else {
            res.render("index",{data:rows});
        }
    });
})

module.exports = router;