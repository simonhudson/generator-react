'use strict';

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./server/db');
const apiPort = 4000;
const apiRoutes = require('./server/apiRoutes');
const expressHandlebars = require('express-handlebars');
const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.engine(
    'hbs',
    expressHandlebars({
        layoutsDir: path.join(__dirname, './src/views/layouts'),
        defaultLayout: 'main',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/views/pages'));

routes.forEach(config => {
    app.get(config.route, (req, res) => res.render(config.page));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
