var static = require('node-static');
var file = new static.Server('../public');
var socketio = require('socket.io');

var http = require('http');
var app = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
})
app.listen(8080);

var chatServer = require('./chat_server');
chatServer(app);