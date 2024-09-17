const express = require('express');
const cors = require('cors');

const app = express();
const contactsRouter = require('./routes/contacts.router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {

    return res.json({
    message: 'ok'
    });
});

contactsRouter.setup(app);
module.exports = app;