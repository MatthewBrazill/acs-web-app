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

        fetch("http://169.254.169.254/latest/meta-data/instance-id").then(res => res.text()).then(text => data.id = text)
        fetch("http://169.254.169.254/latest/meta-data/instance-type").then(res => res.text()).then(text => data.type = text)
        fetch("https://api.ipify.org").then(res => res.text()).then(text => data.dns = text)
        fetch("http://169.254.169.254/latest/meta-data/placement/region").then(res => res.text()).then(text => data.region = text)
        fetch("http://169.254.169.254/latest/meta-data/placement/availability-zone").then(res => res.text()).then(text => data.zone = text)

        res.render(`monitoring`, data)
    }
};

module.exports = monitoring;
