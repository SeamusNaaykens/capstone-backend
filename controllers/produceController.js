const knex = require('knex')(require('../knexfile'));
const { v4: uuidv } = require("uuid")
const fs = require("fs");
const path = require('path');

exports.index = async (_req, res) => {
    try {
        const data = await knex('produce')
        // .join('users', 'users.id', 'produce.user_id');
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
    if (!req.body.produce_name || !req.body.produce_type || !req.body.location || !req.body.quantity || !req.body.harvest_date ) {
        return res.status(400).send('Please make sure to provide name, manager, address, phone and email fields in the request');
    }

    try {
        let imageData = req.files.image.data;
        let imageName = req.files.image.name;

        let filename = uuidv() + "-" + imageName;
        let staticFilePath = "./public/images/" + filename;
        let servedFilePath = '/thumbnail/' + filename ;
        let servedUrl = 'https://growlocal.herokuapp.com'+ servedFilePath        
        //write file to your static directory
        fs.writeFileSync(staticFilePath,imageData);

        const editedPost = req.body
        editedPost.image =servedUrl
        console.log(editedPost)
        await knex('produce').where({ id: req.params.id }).update(editedPost);
        res.status(200).send(`Post with id: ${req.params.id} has been updated.`);
    } catch (err) {
        res.status(400).send(`Error updating Post ${req.params.id}: ${err}`);
    }
};

exports.addPost = async (req, res) => {

    if (
        !req.body.produce_name ||!req.body.produce_type || !req.body.location || !req.body.quantity || !req.body.harvest_date || !req.body.user_id 
    ) {
        return res
            .status(400)
            .send(
                "Please make sure you provided all the required fields( produce name, produce type, location, quantity, harvest date)"
            );
    }
    try {

        let imageData = req.files.image.data;
        let imageName = req.files.image.name;

        let filename = uuidv() + "-" + imageName;
        let staticFilePath = "./public/images/" + filename;
        let servedFilePath = '/thumbnail/' + filename ;
        let servedUrl = 'https://growlocal.herokuapp.com'+ servedFilePath        
        //write file to your static directory
        fs.writeFileSync(staticFilePath,imageData);

        const newPost = req.body
        newPost.id = uuidv()
        newPost.post_date = '2023-01-03 17:21:54'
        newPost.image = servedUrl
        console.log(newPost)
        const data = await knex("produce").insert(newPost);
        const newPostURL = `/produce/${data[0]}`;
        res.status(201).location(newPostURL).send(newPostURL);
    } catch (error) {
        console.log(error)
        res.status(400).send(`Error creating Post: ${error}`);
    }
};
