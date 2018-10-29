const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 8080;

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html')
})
app.get('/new-portfolio', function(request, response){
    response.sendFile(__dirname + '/public/new-portfolio.html')
})

app.listen(8080, function(){
    console.log(`Listening on port ${PORT}`);
})