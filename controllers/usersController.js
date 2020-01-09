const sequelize = require('sequelize');
const db = require('../models');
const Users = db.users;
const Roles = db.roles;

exports.getOne = async (req, res) => {
    let user = await Users.findOne({
        where: {email: req.query.email},
        attributes: [`gender`, `first_name`, `last_name`, `zip_code`, `email`, `profile_img`, `state_id`, `county_id`]
    });
    res.json(user);
};
