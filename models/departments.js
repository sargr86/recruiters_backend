'use strict';
module.exports = (sequelize, DataTypes) => {
  const departments = sequelize.define('departments', {
    name: DataTypes.STRING
  }, {underscored: true});
  departments.associate = function(models) {
    // associations can be defined here
  };
  return departments;
};
