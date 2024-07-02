/**
 * Returns an array of student IDs from the given array of student objects.
 *
 * @param {Array} students - The array of student objects.
 * @return {Array} An array of student IDs.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
