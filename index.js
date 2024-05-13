const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database.js');

//Import routes
const mainRoutes = require('./routes/main.js');
const postRoutes = require('./routes/posts.js');
const commentRoutes = require('./routes/comments.js');

//Use .env file in config folder
require('dotenv').config({ path: '.env' });

// Passport config
require('./config/passport.js')(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set('view engine', 'ejs');

//Static Folder
app.use(express.static('public'));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger('dev'));

//Use forms for put / delete
app.use(methodOverride('_method'));

// Setup Sessions - stored in MongoDB
app.use(
	session({
		secret: 'hot dog app',
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI,
		}),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Server Routes
app.use('/', mainRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);

//Server Running
app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT || 3000}/ `);
});
