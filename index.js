const dotenv = require('dotenv')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

dotenv.config();
app.use(cors());

const usersRoutes = require('./routes/usersRoutes');
const produceRoutes = require('./routes/produceRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Express is running!');
});

app.use('/users', usersRoutes);
app.use('/produce', produceRoutes);

app.use("/thumbnail", express.static("./public/images"))


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });