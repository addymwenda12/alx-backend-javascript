import readDatabase from '../utils';
import csv from 'csv-parser';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const data = await readDatabase('./database.csv');
            const results = {};
            data.pipe(csv())
            .on('data', (row) => {
                if (!results[row.field]) {
                    results[row.field] = [];
                }
                results[row.field].push(row.firstname);
            })
            .on('end', () => {
                res.status(200).send(results);
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        try {
            const data = await readDatabase('./database.csv');
            const results = {};
            data.pipe(csv())
            .on('data', (row) => {
                if (row.major === req.params.major) {
                    if (!results[row.field]) {
                        results[row.field] = [];
                    }
                    results[row.field].push(row.firstname);
                }
            })
            .on('end', () => {
                if (Object.keys(results).length === 0) {
                    res.status(500).send('Major parameter must be CS or SWE');
                } else {
                    res.status(200).send(results);
                }
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

export default StudentsController;
module.exports = StudentsController;
