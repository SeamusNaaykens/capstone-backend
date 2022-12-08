const knex = require('knex')(require('../knexfile'));

exports.index = async (_req, res) => {
    try {
        const data = await knex('produce');
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(`Error retrieving posts!: ${err}`);
    }
};

exports.singleProducePost = async (req, res) => {
    try {
        const data =await knex('produce').where({id: req.params.id})
        if (data.length === 0) {
            res.status(404).send(
                `Post with id: ${req.params.id} does not exist!`
            );
        }
        res.status(200).json(data[0]);
    } catch (err) {
        res.status(400).send(
            `Error retrieving post: ${req.params.id} : ${err}`
        );
    }
}

exports.deletePost = async (req, res) => {
    try {
        await knex('produce').where({ id: req.params.id}).delete();
        res.status(200).send(
            `Post with id: ${req.params.id} has been deleted`
        );
    } catch (err) {
        res.status(400).send(
            `Error deleting Post ${req.params.id} ${err}`
        );
    }
}
