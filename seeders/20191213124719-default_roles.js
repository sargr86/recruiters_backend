'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [
            {
                name: 'Super Admin',
            },
            // {
            //     name: 'Recruiter',
            // },
            // {
            //   name_en: 'Counselor'
            // },
            {
                name: 'Customer'
            },
            {
                name: 'Company owner'
            },
            {
                name: 'Company owner assistant'
            },
            {
                name: 'Branch manager'
            },
            {
                name: 'Department manager'
            },
            {
                name: 'Team lead'
            },
            {
                name: 'Team member'
            }
        ])

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('roles', null, {});
    }
};
