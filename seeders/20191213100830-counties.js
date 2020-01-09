'use strict';
const fse = require('fs-extra');
const path = require('path');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = await fse.readJSON(path.resolve(__dirname + '/data/counties_states.json'));

        let list = data['counties'].map(async (d) => {
            const user = await queryInterface.rawSelect('states', {
                where: {
                    name: d.state,
                },
            }, ['id']);
            delete d['The 3143 counties and county equivalents of the United States of America'];
            delete d['__2'];
            delete d['__3'];
            delete d['__4'];
            delete d['__5'];
            delete d['state'];
            d['state_id'] = user;
            return d;
        });

        const results = await Promise.all(list);
        return queryInterface.bulkInsert('counties', results)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('counties', null, {});
    }
};
