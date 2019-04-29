//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.get('/', (req, res) =>{
     
    const today = new Date();
    const currentDay = today.getDay();    

      if (currentDay === 6 || currentDay === 0) {
          res.send(__dirname + '/weekend.html');
          
      } else {
          res.send(__dirname + '/weekday.html');    
      }

});

app.listen(3000, ()=>{
    console.log('server started');     
});