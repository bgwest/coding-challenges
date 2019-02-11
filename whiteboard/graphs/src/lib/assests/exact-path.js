// create exact path back
function exportExactPathWrapper(path, endVertex) {
  const exactPath = new Map();
  function exportExactPath(key, savedVertex = key) {
    // BASE CASE
    if (key === undefined) {
      return { value: 'start' };
    }
    // RECURSIVE CASE
    savedVertex = key; // eslint-disable-line no-param-reassign
    const previousVertex = exportExactPath(path.get(key), savedVertex);
    // Unwind and assign final map in logical order
    exactPath.set(previousVertex, savedVertex);
    return savedVertex;
  }
  // invent way to make this function more reusable for additional graph applications
  exportExactPath(endVertex.value.name);
  return exactPath;
}

module.exports = exportExactPathWrapper;
