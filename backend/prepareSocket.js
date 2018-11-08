const { Room } = require("./models/");

module.exports =  function(io) {

  io.on('connection', async (socket) => {
    console.log("Cliente conectado via socket")

    const rooms = await Room.find({});

    rooms.forEach(r => {
      socket.on(r._id, data => {
        console.log(data);
        io.emit(r._id, data);
      });
    })

    

    // setInterval(()=>{
    //   socket.emit('evento1', {time: new Date()})
    // }, 1000)

    // setInterval(() => {
    //   io.emit('evento1', {name: "ricardo"})
    // }, 10000)
  });
}
