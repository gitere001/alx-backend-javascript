/**
 * Updates the grades of students based on their location.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city for which grades are to be updated.
 * @param {Array} newGrades - The array of new grades to be applied.
 * @return {Array} The array of updated student objects with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    throw new TypeError('Expected students to be an array');
  }
  if (typeof city !== 'string') {
    throw new TypeError('Expected city to be a string');
  }
  if (!Array.isArray(newGrades)) {
    throw new TypeError('Expected newGrades to be an array');
  }

  const defaultGrade = { grade: 'N/A' };
  const filtered = students.filter((student) => student.location === city);
  const mapped = filtered.map((student) => {
    const gradeObj = newGrades.find((stud) => stud.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : defaultGrade.grade,
    };
  });
  return mapped;
}
