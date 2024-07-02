export default function getStudentIdsSum(students) {
  const sum = students.reduce((previous, student) => previous + student.id, 0);
  return sum;
}
