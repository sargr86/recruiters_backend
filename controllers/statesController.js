const db = require('../models');
const States = db.states;
const Counties = db.counties;
const to = require('../helpers/getPromiseResult');


exports.getStatesCounties = async (req, res) => {
    let states = await to(States.findAll({
        include: [
            {model: Counties, attributes: ['id', 'name']}
        ]
    }));
    res.json(states);
};

exports.get = async (req, res) => {
    let states = await to(States.findAll({}));
    res.json(states);
};
