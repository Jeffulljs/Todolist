//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [];

app.set('view engine', 'ejs'); 

app.get('/', (req, res) =>{
     
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };


    Date.prototype.toLocaleDateString = function () {
        return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;
                    
    };
    
    let day = today.toLocaleDateString('fr-FR', options);
                

    res.render("list", {
        kingOfDay: day,
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