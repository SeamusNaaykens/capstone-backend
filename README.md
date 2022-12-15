GrowLocal: A Capstone project for the BrainStation Web Development Bootcamp 
By: Seamus Naaykens

THE PROBLEM:
High Level Problem
With this project I wanted to tackle the problem of climate change and the degradation of our planet. It is well known that human activity is pushing our planet closer and closer to the brink of collapse. My project specifically targets the issue of industrialized farming and the impact it has on our environment. So the real problem becomes how can we stop relying so heavily on industrialized farming for production of our food? My suggestion is that we start growing our own food as soon as possible. Now this solution comes with its own set of challenges like the feasibility and accessibility of growing food at home.

THE SOLUTION:
My application is designed to tackle this problem in two ways. Firstly I wanted to enable people with minimal outdoor space to grow food (like apartment dwellers) to leverage what space they do have to get the most reward. Additionally I feel a strong community is vital to diminishing our reliance on industrialized farming. My platform tackles the first issue by enabling growers to trade their excess harvest with other members of the platform. This helps reduce potential waste and allows someone who is very successful at growing a certain type of produce to leverage what they can grow. Additionally my application will encourage community growth and help people get to know a network of other people who share a passion for growing their own food. Through community we can make a far greater impact on this massive issue facing our world. 




TECH STACK USED

GrowLocal is built using React, HTML5, the Sass compiler as well as the React Modal library on the frontend. The backend is built using mySQL, the Knex library, Node.js and the Express library.  

FEATURES

My application is a fully functioning CRUD application where potential users can create an account, make, edit and delete posts. Additionally there is an open  marketplace where anyone can view all the posted produce on offer and individual profile pages where they can see what an individual is growing. 
Please note that the Login feature and Learning channel have not been built yet as they are set to be completed in a later phase of work. Additionally the chat feature on the profile page is visual only and not yet functional. This will be added in the next phase of work.

WHAT I LEARNED FROM BUILDING THIS PROJECT

I learned many many things from building this project from creating a search bar to uploading images and even creating databases. Additionally I learned to use the React-Modal library and how to create a fully functioning CRUD application. I also learned how much time it takes to conceive a project, design it and get all the necessary assets. 

NEXT PHASE OF DEVELOPMENT

I have several features I am planning to build for the next phase of development. Firstly I will be deploying this application so it can be easily accessed on the internet then I will make the placeholder chat feature fully functional. In order to do that properly I will also implement a user login so that only the owner of an account can alter their information. I will also be developing a learning channel which will provide tutorials and tips on how to grow food at home as well as providing a forum where users can share their own knowledge. 


INSTRUCTIONS FOR INSTALLATION

1. Clone or download this repo 

2. Open the coding program of your choice and in the terminal cd to the project directory and open the cloned folder

3. In the terminal of your coding application run the command: npm install to download the necessary node_modules, files and dependencies required to use this project. 

4. Next you use the command npm init to create the package.json file that manages all the required dependencies. 

5. Next you will need to create a .env file to store the following values: 
PORT = yourValueHere
DB_LOCAL_DBNAME =  yourValueHere
DB_LOCAL_USER =  yourValueHere
DB_LOCAL_PASSWORD =  yourValueHere
DB_LOCAL_CHARSET =  yourValueHere

6. Next we will need to create a database. To start this process run the command npx knex init in your terminal. This will create a file called knexfile.js in the main directory

7. Next you will edit the knexfile.js you will input the following:
require('dotenv').config();
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    database: process.env.DB_LOCAL_DBNAME,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
    charset: process.env.DB_LOCAL_CHARSET
  },
};

8. Now  within either mySQL workbench or if you are using VScode you can download the mySQL extension created by Weijan Chen to create a new database.
Once that database is connected you will input this command into your terminal: npx knex migrate:latest. This will create two tables in your database called users and produce

9. Once you have done that successfully you will run the final setup command in your terminal: npx knex seed:run. This should input the initial seed data into your table.

10. Once you have everything setup start up the backend simply input the command: node index.js 