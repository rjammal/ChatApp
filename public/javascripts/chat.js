(function(root){
    var Chatatat = root.Chatatat = (root.Chatatat || {});
  
    Chatatat.Chat = function(socket) {
        this.socket = socket;
    };
  
    Chatatat.Chat.prototype.sendMessage = function(message) {
        this.socket.emit("message", {text: message});
    }; 
  
})(this);