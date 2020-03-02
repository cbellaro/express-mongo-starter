//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const methodOverride  = require('method-override');
const session = require('express-session')

//___________________
//Config
//___________________
require('dotenv').config()
const app = express ();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/posts';

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true });
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(express.json());


const postsController = require('./controllers/posts.js');
app.use('/posts', postsController);
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
app.use(express.static('public'));

//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.redirect('posts');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
