const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const DocRouter = require('./Routes/DocRouter');
require('./Models/db');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.get('/ping', (req, res) => {
    res.send('pong');
});
app.use(bodyParse.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/doc', DocRouter);
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});