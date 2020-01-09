const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
const to = require('../helpers/getPromiseResult');
const Users = db.users;
const Roles = db.roles;
const States = db.states;
const Counties = db.counties;
const UsersStatuses = db.users_statuses;

const showIfErrors = require('../helpers/showIfErrors');


exports.login = async (req, res) => {

    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let data = req.body;
        let email = data.email.trim();

        let attributes = [`first_name`, `last_name`, 'email', 'profile_img'];

        // Active status selecting
        let statusWhere = sequelize.where(sequelize.col('`users_status`.`name_en`'), 'active');


        // Selecting an employee that has an email matching request one
        let user = await Users.findOne({
            attributes: attributes,
            include: [
                {model: Roles},
                {model: States},
                {model: Counties}
            ],
            where: {email: email} //userTypeWhere
        }, res);


        if (!res.headersSent) {


            // User is not active
            if (!user) res.status(500).json({msg: 'You don\'t have such privileges or the account is inactive'});

            else {
                // Cloning users object without password and saving user full name
                let {password, ...details} = user.toJSON();
                let full_name = user[`first_name`] + ' ' + user[`last_name`];


                res.status(200).json({
                    token: jwt.sign(details, 'secretkey', {expiresIn: '8h'}), user_id: user.id, full_name: full_name
                })
            }


        }
    }
};

exports.logout = (req, res) => {
    req.logout();
    res.status(200).json({msg: 'OK'})
};

exports.register = async (req, res) => {
    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let data = req.body;

        // Saving the original password of user and hashing it to save in db
        let originalPass = data.password;
        data.password = bcrypt.hashSync(originalPass, 10);

        if (!data.role_id) {
            let role_id = await Roles.findOne({where: {name: 'Customer'}, attributes: ['id']});
            data.role_id = role_id.toJSON()['id'];
            console.log(data)
        }

        // Getting active status id and appending it to user request data
        let status = await UsersStatuses.findOne({where: {name: 'active'}, attributes: ['id']});
        data.status_id = status.toJSON()['id'];

        await Users.create(data);

        res.json('OK')
    }
};

exports.updateProfile = async(req, res) => {
    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let data = req.body;

        console.log(data)

        let result = await to(Users.update(data, {where: {email: data.email}}), res)
        res.json(result)
    }
};
