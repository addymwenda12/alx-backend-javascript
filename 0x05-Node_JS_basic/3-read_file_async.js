const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n');
      const nonEmptyLines = lines.filter((line) => line.trim() !== '');

      const fieldsCount = {};

      for (let i = 1; i < nonEmptyLines.length; i += 1) {
        const line = nonEmptyLines[i];
        const [firstName, , , field] = line.split(',');
        if (!fieldsCount[field]) {
          fieldsCount[field] = {
            count: 0,
            students: [],
          };
        }
        fieldsCount[field].count += 1;
        fieldsCount[field].students.push(firstName.trim());
      }

      const totalStudents = nonEmptyLines.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      for (const field in fieldsCount) {
        console.log(`Number of students in ${field}: ${fieldsCount[field].count}. List: ${fieldsCount[field].students.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
