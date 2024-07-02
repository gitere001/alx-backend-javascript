export default function getStudentsByLocation(array, location) {
  const filteredLocation = array.filter((obj) => obj.location === location);
  return filteredLocation;
}
