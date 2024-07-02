export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const newList = array.map((obj) => obj.id);
  return newList;
}
