const express = require('express');
const router = express.Router();
const data = require("../models/data");


/* GET HOME Page */

router.get('/',function(req,res,next){
    res.render("index",{});
});

router.get('/data',function(req,res,next){
    data.getTemperature((err,rows) => {
        if(err){
            res.render("error",{message:err.message});
        } else {
            const labels = rows.map(row => row.timestamp);
            const values = rows.map(row => row.value);
            const data = {
                labels: labels,
                datasets: [{
                  label: 'Temperature Data',
                  data: values,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
            }
            const chartConfig = {
                type: 'line',
                data: data,
            }

            res.send(chartConfig);
        }
    });
})

module.exports = router;