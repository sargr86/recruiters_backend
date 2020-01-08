'use strict';
module.exports = (sequelize, DataTypes) => {
  const branches = sequelize.define('branches', {
    name: DataTypes.STRING
  }, {});
  branches.associate = function(models) {
    // associations can be defined here
  };
  return branches;
};