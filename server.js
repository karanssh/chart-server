const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const {render_echart} = require('./echarts_generator');


app.post("/echarts",bodyParser.json(),async function(req,res){
  
    //console.log(req);
    let options = req.body.options;
    let width = req.body.width;
    let height = req.body.height;
    //console.log(options);
    let base = await render_echart(options,width,height);
    res.send(base);
})



app.listen(13705);