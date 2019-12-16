'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users_statuses', [
      {
        'name': 'active',

      },
      {
        'name': 'inactive',

      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users_statuses', null, {});
  }
};
