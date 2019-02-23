const path = require('path');
const express = require('express');
const port = process.env.PORT || 4040;
const axios = require('axios');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => res.send('index'));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(port, () => (console.log(`Listening on port: ${port}`), void 0));
