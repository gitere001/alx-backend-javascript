const e = require('express');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const HOST = 'localhost';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      let noOfStudents = 0;
      const studentFields = {};
      const lines = data.trim().toString().split('\n');
      const details = lines.slice(1);

      for (const line of details) {
        const parts = line.split(',');
        if (parts.length === 4) {
          const name = parts[0];
          const field = parts[3];
          if (!studentFields[field]) {
            studentFields[field] = [];
          }
          studentFields[field].push(name);
          noOfStudents += 1;
        }
      }
      const result = [];
      result.push(`Number of students: ${noOfStudents}`);
      for (const [key, value] of Object.entries(studentFields)) {
        result.push(`Number of students in ${key}: ${value.length} List: ${value.join(', ')}`);
      }
      resolve(result.join('\n'));
    }
  });
});

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const path = process.argv[2] || '';
  try {
    const report = await countStudents(path);
    res.status(200).send(`This is the list of our students\n${report}`);
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(PORT, () => {

});

module.exports = app;
