`use strict`

const fetch = require(`node-fetch`);


const home = {
    data(req, res) {

        const data = {
            title: `Example Page`,
            img_link: `${__dirname}/resources/cat_pic.jpg`,
            type: "",
            dns: ""
        }

        fetch("http://169.254.169.254/latest/meta-data/instance-type").then(res => res.text()).then(text => data.type = text)
        fetch("http://169.254.169.254/latest/meta-data/public-hostname").then(res => res.text()).then(text => data.dns = text)

        res.render(`home`, data)
    }
}

module.exports = home