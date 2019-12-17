'use strict';
module.exports = (sequelize, DataTypes) => {
  const counties = sequelize.define('counties', {
    state_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {timestamps:false});
  counties.associate = function(models) {
    // associations can be defined here
    counties.belongsTo(models.states, {foreignKey: "state_id"});
  };
  return counties;
};
