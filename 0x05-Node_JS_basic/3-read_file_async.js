const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.toString('utf-8').trim().split('\n');
      const noHeader = lines.slice(1).filter((line) => line.trim() !== '');
      let noOfStudents = 0;
      const studentFields = {};
      noHeader.forEach((student) => {
        const parts = student.split(',');
        if (parts.length === 4) {
          const name = parts[0];
          const field = parts[3];
          if (!studentFields[field]) {
            studentFields[field] = [];
          }
          studentFields[field].push(name);
          noOfStudents += 1;
        }
      });
      console.log(`Number of students: ${noOfStudents}`);
      for (const [field, names] of Object.entries(studentFields)) {
        console.log(`Number of students in ${field}: ${names.length} List: ${names.join(', ')}`);
      }
      resolve(true);
    }
  });
});
module.exports = countStudents;
