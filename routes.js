`use strict`

//Imports
const express = require(`express`);
const fetch = require(`node-fetch`);
const os = require(`os-utils`);
const router = express.Router();

//Router Setup
router.get(`/home`, function (req, res) {
    res.render(`home`, {
        title: `Example Page`,
        img_link: `${__dirname}/resources/cat_pic.jpg`,
        type: fetch("http://169.254.169.254/latest/meta-data/instance-type"),
        dns: fetch("http://169.254.169.254/latest/meta-data/public-hostname")
    })
});

router.get(`/monitoring`, function (req, res) {
    res.render(`monitoring`, {
        title: `WebServer Monitoring`,
        id: fetch("http://169.254.169.254/latest/meta-data/instance-id"),
        type: fetch("http://169.254.169.254/latest/meta-data/instance-type"),
        dns: fetch("http://169.254.169.254/latest/meta-data/public-hostname"),
        region: fetch("http://169.254.169.254/latest/meta-data/placement/region"),
        zone: fetch("http://169.254.169.254/latest/meta-data/placement/availability-zone"),
        os: os.platform(),
        num_cpu: os.cpuCount(),
        aval_mem: os.totalmem().toFixed(0),
        free_mem: os.freemem().toFixed(0),
        up_time: (os.sysUptime()/60000).toFixed(2)
    })
});

module.exports = router