require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const { error } = require('./middlewares');

const { PORT = 3000 } = process.env;
const app = express();
const socketIoServer = require('http').createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const io = require('socket.io')(socketIoServer, {
  cors: {
    origin: `http://localhost:${PORT}`, // origem permitida
    methods: ['GET', 'POST'], // métodos permitidos
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Authorization'],
}))

app.get('/', (req, res) => {
  res.render('index');
})

app.use(error)

socketIoServer.listen(PORT, () => console.log(`listen port ${PORT}`));