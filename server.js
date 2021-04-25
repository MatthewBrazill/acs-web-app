`use strict`

//Imports
const express = require(`express`);
const hbs = require(`express-handlebars`);
const routes = require(`${__dirname}/routes.js`);

const app = express();

//Set up the express framework
app.engine(`.hbs`, hbs({

    extname: `.hbs`
}));
app.use(express.urlencoded({extended: false}));
app.set(`views`, `${__dirname}/views`)
app.set(`view engine`, `.hbs`);
app.use(`/`, routes);
app.listen(80);