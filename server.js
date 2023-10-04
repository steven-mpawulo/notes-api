const express = require('express');
const session = require('express-session');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(session({
    secret: 'trialSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use('/api', authRoute);

const port = process.env.PORT || 6001;

mongoose.connect(process.env.DB_URL).then((value) => {
    console.log("database connected");
    app.listen(port, () => {
        console.log("server started");
    });
}).catch((e) => {
    console.log("database failed to connect");
});