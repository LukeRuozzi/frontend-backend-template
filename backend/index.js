const express = require('express');
const cors = require('cors');
require('dotenv').config();
const users = require('./routes/users');
const posts = require('./routes/posts');

const app = express();

app.use(cors());
app.use(express.json()); //Used to parse JSON bodies

app.use('/api/users', users);
app.use('/api/posts', posts);

const PORT = process.env.port | 5105;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
