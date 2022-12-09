const knex = require('knex')(require('../knexfile'));

exports.index = async (_req, res) => {
    try {
        const data = await knex("users");
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(`Error retrieving users: ${err}`);
    }
};

exports.singleUser = async (req, res) => {
    try {
        const data = await knex("users").where({
            id: req.params.id,
        });
        if (data.length === 0) {
            res.status(404).send(
                `user with id: ${req.params.id} does not exist!`
            );
        }
        res.status(200).json(data[0]);
    } catch (err) {
        res.status(400).send(`Error retrieving user with: ${req.params.id}`);
    }
};


exports.userPosts = async (req, res) => {
    try {
        const data = await knex("produce").where({
            user_id: req.params.id,
        });
        if (data.length === 0) {
            return res.send(
                `Posts with id: ${req.params.id} does not exist!`
            );
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(
            `Error retrieving posts for this user ${req.params.id} ${err} please try again!`
        );
    }
};