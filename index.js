const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 8080;

const express = require('express');
const pg = require('pg');
const app = express();
const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();

app.use(express.static('./public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html')
})
app.get('/new-portfolio', function(request, response){
    response.sendFile(__dirname + '/public/new-portfolio.html')
})

app.listen(8080, function(){
    console.log(`Listening onnnn port ${PORT}`);
})