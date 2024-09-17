const express = require('express');
const cors = require('cors');

const app = express();
const contactsRouter = require('./routes/contacts.router');
const JSend = require('./jsend');
const{
resourceNotFound,
handleError,
} = require('./controllers/errors.controller');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.json(JSend.success());
});


contactsRouter.setup(app);
app.use(resourceNotFound);
app.use(handleError);
module.exports = app;