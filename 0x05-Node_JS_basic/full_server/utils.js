import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

const readDatabase = async (path) => {
    try {
        const data = await readFile(path, 'utf8');
        return data;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

export default readDatabase;
