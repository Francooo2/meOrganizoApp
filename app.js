const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config({ path: './.env'});
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended:false}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

// Define routes
const publicDirectory = path.join(__dirname, './src/public');
app.use(express.static(publicDirectory));
app.set('views',path.join(__dirname, 'src/views'))
app.use('/', require('./src/routes/pages'));
app.use('/auth', require('./src/routes/auth'));

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('MYSQL Connected...')
    }
});


app.listen(5000, () => {
 console.log('Server started on Port 5000');
});