//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs'); 

app.get('/', (req, res) =>{
     
    const today = new Date();
    const currentDay = today.getDay();
    let day = "";    

    switch (currentDay) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break;
        case 2:
            day = "Mardi";
            break;
        case 3:
            day = "Mercredi";
            break;
        case 4:
            day = "Jeudi";
            break;
        case 5:
            day = "Vendredi";
            break;
        case 6:
            day = "Samedi";
            break;
        default:
        console.log("Erreur: curentDay est égal a: " + currentDay);
        
    }

    res.render("list", {
        kingOfDay: day
    });
 
});

app.listen(3000, ()=>{
    console.log('server started');     
});