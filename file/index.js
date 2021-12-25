const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/share', (req, res) => {
  res.sendFile(__dirname + '/sharefile.html');
});
app.get('/cast', (req, res) => {
  res.sendFile(__dirname + '/cast.html');
});
app.get('/tv', (req, res) => {
  res.sendFile(__dirname + '/tv.html');
});
app.get('/capturescreen', (req, res) => {
  res.sendFile(__dirname + '/capturescreen.js');
});
app.get('/icon', (req, res) => {
  res.sendFile(__dirname + '/icon.ico');
});

io.on('connection', (socket) => {
  socket.on('image', msg => {
    io.emit('image', msg);
  });
  socket.on('system', msg => {
    io.emit('system', msg);
  });
});

http.listen(80);