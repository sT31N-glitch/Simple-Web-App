const URL = 'localhost:8080'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

console.log('Server Starting...');
const app = new express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(request, response){
    response.sendFile(path.resolve('./home.html'))
});
    app.post('/processComplaint', function(request, response){
        console.log(request.body.textBox);
        response.writeHead(301, { "Location": "http://" + URL + '/' });
        return response.end();
    });

app.listen(8080);
console.log('Server Online!');