//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js');




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [];

app.set('view engine', 'ejs'); 

app.get('/', (req, res) =>{
    
    let day = date();

    res.render("list", {
        listTitre: day,
        listItems: items
        
    });
 
});

app.post('/', (req,res)=>{

    item = req.body.item;
    console.log(item);

    items.push(item);

    res.redirect('/');
    
});



app.listen(3000, ()=>{
    console.log('server started');     
});