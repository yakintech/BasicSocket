var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection', (socket) => {
    console.log("Client connected!");


    socket.on("bodychange",function(){
        io.emit("clientchange");
    });

    socket.on("servermsg",function(data){
        io.emit("getdata",data);
    })

});




http.listen(3000, () => {
    console.log('listening on *:3000');
  });

