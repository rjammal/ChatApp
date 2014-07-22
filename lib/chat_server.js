var createChat = function(server) {
  var io = require('socket.io').listen(server);
  io.on('connection', function(socket) {
    console.log('connection');
    socket.emit('server-msg', { message: "hey you mrs/mr connector" });
    //when we get a 'client-msg', console log it
    
    socket.on('client-msg', function(data){
      console.log("client says:");
      console.log(data);
    });
    
    socket.on('chat-submit', function(data){
        io.sockets.emit('chat-broadcast', data);
    });
    // socket.on("message2", function (data) {
    //   console.log(data);
    // });
    // console.log("running?");
  });

}

module.exports = createChat;
//
// var http = require('http'),
//   static = require('node-static'),
//   socketio = require('socket.io');
//
// var file = new static.Server('../public');
//
// var server = http.createServer(function (req, res) {
//   req.addListener('end', function () {
//     file.serve(req, res);
//   }).resume();
// });
//
// server.listen(8080);
//
// var io = socketio(server);
//
// io.on('connection', function (socket) {
//   console.log("new connection!");
//
//   socket.emit('from_node_event', { message: 'Hi from node!' });
//   // incoming message from 1 user
//   socket.on('from_browser_event', function (data) {
//     console.log(data);
//
//     // broadcast that mesasge to everyone connected
//     io.sockets.emit('from_node_event', { message: data.message });
//   });
// });
