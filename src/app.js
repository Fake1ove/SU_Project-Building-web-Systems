const express = require('express');
const hbs = require('hbs');
const route = require('./routers/main');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const fileUpload = require('express-fileupload');
require("./handlebar"); // this hbs user made handlebars

const app = express();
app.use(fileUpload());

// ตั้งค่า session
app.use(session({
    secret: "restorent_datails",
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('', route);

// static folder
app.use("/static", express.static("public"));

// template engine
app.set("view engine", 'hbs');
app.set("views", 'views');
hbs.registerPartials('views/partials');

// ตั้งค่า strictQuery ให้ Mongoose
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/restaurant", () => {
    console.log("Server connected..");
});

app.listen(3000, () => {
    console.log('server is start..');
});
