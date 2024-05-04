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
        let response = 'This is the list of our students\n';
        response += `Number of students: ${data.length}\n`;
        data.forEach((field) => {
          response += `Number of students in ${field.field}: `;
          response += `${field.students.length}. List: ${field.students.join(', ')}\n`;
        });
        res.end(response);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

app.listen(1245);

module.exports = app;
