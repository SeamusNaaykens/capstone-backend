const knex = require('knex')(require('../knexfile'));
const { v4: uuidv } = require("uuid")
const fs = require("fs");
const path = require('path');




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
        // if (data.length === 0) {
        //     return res.send(
        //         `Posts with id: ${req.params.id} does not exist!`
        //     );
        // }
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(
            `Error retrieving posts for this user ${req.params.id} ${err} please try again!`
        );
    }
};
           

exports.addUser = async (req, res) => {
    console.log(req.body)
    if (
        !req.body.username ||!req.body.email || !req.body.location || !req.body.profile_statement || !req.body.favourite_produce 
    ) {
        return res
            .status(400)
            .send(
                "Please make sure you provided all the required fields(name, email, location, about you, favourite produce)"
            );
    }
    try {
        let imageData = req.files.profile_pic.data;
        let imageName = req.files.profile_pic.name;
    
        //append a UID to the image name so you don't ever have
        // a conflict (e.g. if 2 users upload car.png)
        let filename = uuidv() + "-" + imageName;
        let staticFilePath = "./public/images/" + filename;
        let servedFilePath = '/thumbnail/' + filename ;
        let servedUrl = 'http://localhost:8080'+ servedFilePath        
        //write file to your static directory
        fs.writeFileSync(staticFilePath,imageData);
    
        const newUser = req.body
        newUser.id = uuidv()
        newUser.image = servedUrl
        const data = await knex("users").insert(newUser);
        const newUserURL = `/users/${data[0]}`;
        res.status(201).location(newUserURL).send(newUserURL);
    } catch (error) {
        res.status(400).send(`Error creating User: ${error}`);
    }
};

exports.editUser = async (req, res) => {
    // Validate the request body for required data
    if (!req.body.username || !req.body.email || !req.body.location || !req.body.profile_statement || !req.body.favourite_produce) {
        return res.status(400).send('Please make sure to provide name, manager, address, phone and email fields in the request');
    }

    try {
        let imageData = req.files.profile_pic.data;
        let imageName = req.files.profile_pic.name;

        let filename = uuidv() + "-" + imageName;
        let staticFilePath = "./public/images/" + filename;
        let servedFilePath = '/thumbnail/' + filename ;
        let servedUrl = 'http://localhost:8080'+ servedFilePath        
        //write file to your static directory
        fs.writeFileSync(staticFilePath,imageData);

        const editedUser = req.body
        editedUser.image = servedUrl
        await knex('users').where({ id: req.params.id }).update(editedUser);
        res.status(200).send(`User with id: ${req.params.id} has been updated.`);
    } catch (err) {
        res.status(400).send(`Error updating User ${req.params.id}: ${err}`);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await knex('users').where({ id: req.params.id }).delete();
        res.status(200).send(`User with id: ${req.params.id} has been deleted`);
    } catch (err) {
        res.status(400).send(`Error deleting User ${req.params.id} ${err}`);
    }
};

