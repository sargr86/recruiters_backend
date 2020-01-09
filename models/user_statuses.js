'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_statuses = sequelize.define('users_statuses', {
    name: DataTypes.STRING
  }, {});
  user_statuses.associate = function(models) {
    // associations can be defined here
  };
  return user_statuses;
};
