const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    countStudents(databasePath)
    .then((data) => {
        res.write('This is the list of our students\n');
        res.end(data);
    })
    .catch((error) => {
        res.end(error.message);
    });
});

app.listen(1245);

module.exports = app;
