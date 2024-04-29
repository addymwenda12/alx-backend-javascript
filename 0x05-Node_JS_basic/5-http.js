const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        countStudents(databasePath)
            .then((data) => {
                res.write('This is the list of our students\n');
                res.end(data);
            })
            .catch((error) => {
                res.end(error.message);
            });
    } else {
        res.end('Page not found');
    }
});

app.listen(1245);

module.exports = app;
