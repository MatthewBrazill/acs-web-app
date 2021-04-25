`use strict`

const fetch = require(`node-fetch`);

const data = {
    title: `Example Page`,
    type: ``,
    dns: ``
}

fetch(`http://169.254.169.254/latest/meta-data/instance-type`)
    .then(res => res.text())
    .then(text => data.type = text)

fetch(`http://169.254.169.254/latest/meta-data/public-hostname`)
    .then(res => res.text())
    .then(text => data.dns = text)

const home = {
    data(req, res) {
        res.render(`home`, data)
    }
}

module.exports = home