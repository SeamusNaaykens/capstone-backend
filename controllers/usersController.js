const knex = require('knex')(require('../knexfile'));
const { v4: uuidv } = require("uuid")
const fs = require("fs");
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(
            `Error retrieving posts for this user ${req.params.id} ${err} please try again!`
        );
    }
};
           

exports.addUser = async (req, res) => {
    if (
        !req.body.username ||!req.body.email || !req.body.location || !req.body.profile_statement || !req.body.favourite_produce 
    ) {
        return res
            .status(400)
            .send(
                "Please make sure you provided all the required fields(name, email, location, about you, favourite produce, password)"
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
        let servedUrl = 'https://growlocal.herokuapp.com'+ servedFilePath        
        //write file to your static directory
        fs.writeFileSync(staticFilePath,imageData);

        // const date = new Date();
        // const postedDate =
        //     date.getFullYear() +
        //     "-" +
        //     date.getMonth() +
        //     "-" +
        //     date.getDate() +
        //     " " +
        //     date.getHours().toString() +
        //     ":" +
        //     date.getMinutes().toString() +
        //     ":" +
        //     date.getSeconds().toString();
    
        
        const hashedPassword = bcrypt.hashSync(req.body.password);
    
        const newUser = req.body
        newUser.id = uuidv()
        newUser.account_creation = '2023-01-11 12:00:54'
        newUser.password = hashedPassword
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
        let servedUrl = 'https://growlocal.herokuapp.com'+ servedFilePath        
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

exports.loginUser = async ( req, res) => {
    const { username, email, password } = req.body
    if(!username || !email ||!password){
        return res
            .status(400)
            .send(
                "Please make sure you provided all the required fields(username, email and password)"
            );
    }
    try{
        const user = await knex('users').where({ email: email }).first();
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).send("Invalid password");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
        );
    
        res.json({ token })

    } catch (err) {
        res.status(400).send(`Error logging in User ${username} ${err}`);
    }
};

exports.currentUser = async (req, res ) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }

    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);

        // Respond with the appropriate user data
        const user = await knex('users').where({ id: decoded.id }).first();
        delete user.password;
        res.json(user);
    } catch (error) {
        return res.status(401).send("Invalid auth token");
    }
}

