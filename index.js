require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Express is running!');
});

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });