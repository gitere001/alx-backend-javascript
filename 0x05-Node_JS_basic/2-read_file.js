const fs = require('fs');

const countStudents = (path) => {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    if (data.length > 0) {
      const lines = data.split('\n');
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
          if (field === 'CS') {
            studentFields[field].push(name);
          } else if (field === 'SWE') {
            studentFields[field].push(name);
          }
          noOfStudents += 1;
        }
      });
      const CS = studentFields.CS.length;
      const SWE = studentFields.SWE.length;
      console.log(`Number of students: ${noOfStudents}`);
      console.log(`Number of students in CS: ${CS} List: ${studentFields.CS.join(', ')}`);
      console.log(`Number of students in SWE: ${SWE} List: ${studentFields.SWE.join(', ')}`);
    } else {
      console.log('Cannot load the database');
    }
  } else {
    console.log('Cannot load the database');
  }
};

countStudents('database.csv');
