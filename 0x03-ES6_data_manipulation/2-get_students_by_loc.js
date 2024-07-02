/**
 * Returns an array of students who are located in the specified city.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter the students by.
 * @return {Array} An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
