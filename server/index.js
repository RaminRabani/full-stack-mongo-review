const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', routes);

app.listen(port, () => console.log(`App is listening on port ${port}!`))