
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  else {
    const map = matrix.map((e, i) => {

      if ((i + 1) % 2 !== 0) {
        return e.sort(((a, b) => a - b))
      } return e.sort(((a, b) => b - a))

    });
    return map.flat();
  }
}
