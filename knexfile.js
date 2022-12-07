
require('dotenv').config();

module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    database: 'GrowLocal',
    user: 'root',
    password: 'rootroot',
    charset: 'utf8'
  },
};
