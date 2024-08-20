const fs = require('fs');

const countStudents = (path) => {
  if (fs.existsSync(path) && (fs.statSync(path).isFile())) {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');
    let noOfStudents = 0;
    const studentFields = {};
    students.forEach((line) => {
      const parts = line.trim().split(',');
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
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
