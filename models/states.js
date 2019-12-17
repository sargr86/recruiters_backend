'use strict';
module.exports = (sequelize, DataTypes) => {
  const states = sequelize.define('states', {
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING
  }, {timestamps:false});
  states.associate = function(models) {
    states.hasMany(models.counties, {foreignKey: "state_id"});
    // associations can be defined here
  };
  return states;
};
