'use strict';
module.exports = (sequelize, DataTypes) => {
  const counties = sequelize.define('counties', {
    state_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  counties.associate = function(models) {
    // associations can be defined here
  };
  return counties;
};