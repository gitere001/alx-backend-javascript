/**
 * Function that returns an array of student objects.
 *
 * @return {Array} Array of student objects
 */
export default function getListStudents() {
  const arrayOfObjects = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return arrayOfObjects;
}
