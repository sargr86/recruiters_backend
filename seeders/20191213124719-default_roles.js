'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'Super Admin',
      },
      {
        name: 'Recruiter',
      },
      // {
      //   name_en: 'Employee'
      // },
      // {
      //   name_en: 'Customer'
      // }
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
