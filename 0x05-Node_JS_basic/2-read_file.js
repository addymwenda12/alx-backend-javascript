const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        const nonEmptyLines = lines.filter(line => line.trim() !== '');

        // Initialize counters for each field
        const fieldsCount = {};

        // Loop through non-empty lines to count students in each field
        // Start from 1 to skip the header line
        for (let i = 1; i < nonEmptyLines.length; i++) {
            const line = nonEmptyLines[i];
            const [firstName, , , field] = line.split(',');
            if (firstName && field) {
                if (!fieldsCount[field]) {
                    fieldsCount[field] = {
                        count: 0,
                        students: []
                    };
                }
                fieldsCount[field].count++;
                fieldsCount[field].students.push(firstName.trim());
            }
        }

        // Calculate the total number of students
        const totalStudents = nonEmptyLines.length - 1; // Subtract 1 to exclude the header line

        // Log the total number of students
        console.log('Number of students:', totalStudents);

        // Log the number of students in each field
        for (const field in fieldsCount) {
            console.log(`Number of students in ${field}: ${fieldsCount[field].count}. List: ${fieldsCount[field].students.join(', ')}`);
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
