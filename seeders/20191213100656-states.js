'use strict';
const fse = require('fs-extra');
const path = require('path');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = await fse.readJSON(path.resolve(__dirname + '/data/states.json'));
        return queryInterface.bulkInsert('states', data['states'])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('states', null, {});
    }
};
