`use strict`

//Imports
const express = require(`express`);
const router = express.Router();

//Import Controllers
const home = require(`./controllers/home.js`);
const monitoring = require(`./controllers/monitoring.js`);

//Router Setup
router.get(`/home`, home.data);

router.get(`/monitoring`, monitoring.data);

module.exports = router