'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        role_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        zip_code: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        profile_img: DataTypes.STRING,
        state_id: DataTypes.INTEGER,
        county_id: DataTypes.INTEGER,
        created_at: {
            type: DataTypes.DATEONLY,
            default: Date.now()
        }
    },{underscored:true});
    users.associate = function (models) {
        // associations can be defined here
        users.belongsTo(models.roles, {foreignKey: 'role_id'});
        users.belongsTo(models.states, {foreignKey: 'state_id'});
        users.belongsTo(models.counties, {foreignKey: 'county_id'});
    };
    return users;
};
