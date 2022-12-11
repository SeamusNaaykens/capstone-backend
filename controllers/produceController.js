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

exports.editPost = async (req, res) => {
    // Validate the request body for required data
    if (!req.body.produce_name || !req.body.produce_type || !req.body.location || !req.body.quantity || !req.body.harvest_date) {
        return res.status(400).send('Please make sure to provide name, manager, address, phone and email fields in the request');
    }

    try {
        await knex('produce').where({ id: req.params.id }).update(req.body);
        res.status(200).send(`Post with id: ${req.params.id} has been updated.`);
    } catch (err) {
        res.status(400).send(`Error updating Post ${req.params.id}: ${err}`);
    }
};

exports.addPost = async (req, res) => {
    if (
        !req.body.produce_name ||!req.body.produce_type || !req.body.location || !req.body.quantity || !req.body.harvest_date|| !req.body.id
    ) {
        return res
            .status(400)
            .send(
                "Please make sure you provided all the required fields( produce name, produce type, location, quantity, harvest date)"
            );
    }
    try {
        const data = await knex("produce").insert(req.body);
        const newPostURL = `/produce/${data[0]}`;
        res.status(201).location(newPostURL).send(newPostURL);
    } catch (error) {
        res.status(400).send(`Error creating Post: ${error}`);
    }
};


exports.getCategories = async (req, res) => {
    const categories = await knex("produce").distinct("category"); //SELECT DISTINCT category FROM inventories(referenced knexjs.org for .distinct)
    //return all of the unique values in category column. result is an array of objects w/ only category field
    const data = categories.map(({ category }) => {
        //deconstructing category in .map from array of objects and formatted to work w/ the frontend
        return {
            label: produce_type,
            value: produce_type,
        };
    });
    res.send(data);
};