const db = require('../models');
const States = db.states;
const Counties = db.counties;
const to = require('../helpers/getPromiseResult');


exports.get = async (req, res) => {
    let states = await to(Counties.findAll({}));
    res.json(states);
};

exports.getByState = async (req, res) => {
    let states = await to(Counties.findAll({
        include: [
            {
                model: States, where: {
                    name: req.query.state
                }
            }
        ]
    }));
    res.json(states);
};
