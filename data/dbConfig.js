const knex = require('knex');

// select the development object from knexfile
const config = require('../knexfile').development;

module.exports = knex(config);