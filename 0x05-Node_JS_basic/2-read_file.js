const line = nonEmptyLines[i];
const [firstName, , , field] = line.split(',');
if (firstName && field) {
  if (!fieldsCount[field]) {
    fieldsCount[field] = {
      count: 0,
      students: []
    };
  }
  fieldsCount[field].count += 1;
  fieldsCount[field].students.push(firstName.trim());
}

// Calculate the total number of students
const totalStudents = nonEmptyLines.length - 1; // Subtract 1 to exclude the header line

// Log the total number of students
try {
    console.log('Number of students:', totalStudents);

    // Log the number of students in each field
    for (const field in fieldsCount) {
        console.log(`Number of students in ${field}: ${fieldsCount[field].count}. List: ${fieldsCount[field].students.join(', ')}`);
    }
} catch (error) {
    throw new Error('Cannot load the database');
}

module.exports = countStudents;
