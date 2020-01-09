'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: async (queryInterface) => {

        // Getting 'active' status id
        const status_id = await queryInterface.rawSelect('users_statuses', {
            where: {
                name: 'active'
            },
        }, ['id']);


        const role_id = await queryInterface.rawSelect('roles', {
            where: {
                name: 'Super Admin'
            },
        }, ['id']);

        const state_id = await queryInterface.rawSelect('states', {
            where: {
                name: 'Alabama'
            },
        }, ['id']);

        const county_id = await queryInterface.rawSelect('counties', {
            where: {
                name: 'Baldwin County'
            },
        }, ['id']);

        return queryInterface.bulkInsert('users', [
            {
                first_name: 'John',
                last_name: 'Doe',
                gender: 'male',
                email: 'admin@gmail.com',
                password: bcrypt.hashSync('12345678', 10),
                profile_img: '',
                role_id: role_id,
                state_id: state_id,
                county_id: county_id,
                status_id: status_id,
                created_at: new Date(),
                updated_at: new Date()
            },

        ])
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
