const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

//* ===== Setup
const PORT = 5000

//* ===== Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', socket => {
    console.log('User Connected');
    socket.emit('message', {abe: 'Hey there!'})
    socket.on('another event', data => {
        console.log(data);
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})