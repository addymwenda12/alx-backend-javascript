const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { url } = req;
  const databaseFile = process.argv[2];

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    fs.readFile(databaseFile, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      const students = data.trim().split('\n').filter((line) => line.trim() !== '');
      const getStudentInfo = (students) => {
        const counts = { CS: 0, SWE: 0 };
        const groups = { CS: [], SWE: [] };

        students.forEach((student) => {
          const [name, field] = student.split(',');
          if (field === 'CS' || field === 'SWE') {
            counts[field] += 1;
            groups[field].push(name);
          }
        });

        let info = `Number of students: ${students.length}\n`;
        for (const field in counts) {
          if (Object.prototype.hasOwnProperty.call(counts, field)) {
            info += `Number of students in ${field}: ${counts[field]}. List: ${groups[field].join(', ')}\n`;
          }
        }
        return info;
      };

      const studentInfo = getStudentInfo(students);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentInfo}`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
