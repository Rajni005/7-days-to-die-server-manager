//Working code
const { Sequelize } = require('sequelize');
const pWaitFor = require('p-wait-for');
console.log('setting config');
const config = require('../sequelize.config.js');
const envConfig = config[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(envConfig.url, { logging: false });

pWaitFor(
  () => sequelize.authenticate()
    .then(() => true)
    .catch((err) => { console.log(err.toString()); return false; }),
  {
    interval: 2000,
    timeout: 200000,
  }
).then(console.log, console.error);
