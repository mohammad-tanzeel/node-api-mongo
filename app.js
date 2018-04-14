/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8084;

var http = require('http')
var server = http.createServer(app);

app.get('/about', (req, res) => {
        res.send('About Page');
    })
    
server.listen(port, function(){
console.log('Listening  to  port data ' + port);
    
});
console.log('Listening  to  port ' + port);
