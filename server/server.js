const path = require("path")
const express = require("express")
const cors = require("cors")
const app = express()
require('./connection')
const users = require("./routes/users")
const messages = require("./routes/messages")
const notifications = require("./routes/notifications")
const video = require("./routes/videos")
const comments = require("./routes/comments")
const likes = require("./routes/likes")
const live = require("./routes/lives")


app.use(cors())
app.use(express.urlencoded({ extended: true , limit : '1000mb',parameterLimit: 1000000}));
app.use(express.json({limit: '100mb'}));
app.use("/api/users", users)
app.use("/api/messages", messages)
app.use("/api/notifications", notifications)
app.use("/api/video", video)
app.use("/api/video/comments", comments)
app.use("/api/video/likes", likes)
app.use("/api/live", live)
app.use('/uploads', express.static('uploads'));

const __dirname1 = path.resolve()

if (process.env.NODE_ENV === "production") {

  
  app.use(express.static(path.join(__dirname1,"/client/build")));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

const server = require("http").createServer(app);

const io = require('socket.io')(server , {
    cors : {
        origin : `${process.env.URL_ORIGIN}`,
        methods: ['GET' , 'POST', 'PUT']
    }
})


server.listen(PORT , () => {
    console.log("server is listening");
})





global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);

  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });

  socket.on("add-user-chat", (userId) => {
    onlineUsers.set(userId, socket.id);

  });

  socket.on("send-msg-chat", (data) => {
    socket.broadcast.emit("msg-recieve-chat",data)
  });

});

