const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhost:5173/'
}));

app.use('/api', routes);

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
