`use strict`

const fetch = require(`node-fetch`);
const os = require(`os-utils`);


const monitoring = {
    data(req, res) {

        const data = {
            title: `WebServer Monitoring`,
            id: "",
            type: "",
            dns: "",
            region: "",
            zone: "",
            os: os.platform(),
            num_cpu: os.cpuCount(),
            aval_mem: os.totalmem().toFixed(0),
            free_mem: os.freemem().toFixed(0),
            up_time: (os.sysUptime() / 60000).toFixed(2)
        }

        fetch("http://169.254.169.254/latest/meta-data/instance-id")
            .then(res => res.text())
            .then(text => {
                console.log(text);
                data.id = text;
            })

        fetch("http://169.254.169.254/latest/meta-data/instance-type")
            .then(res => res.text())
            .then(text => {
                console.log(text);
                data.type = text;
            })

        fetch("http://169.254.169.254/latest/meta-data/public-hostname")
            .then(res => res.text())
            .then(text => {
                console.log(text);
                data.dns = text;
            })

        fetch("http://169.254.169.254/latest/meta-data/placement/region")
            .then(res => res.text())
            .then(text => {
                console.log(text);
                data.region = text;
            })

        fetch("http://169.254.169.254/latest/meta-data/placement/availability-zone")
            .then(res => res.text())
            .then(text => {
                console.log(text);
                data.zone = text;
            })

        res.render(`monitoring`, data)
    }
};

module.exports = monitoring;
