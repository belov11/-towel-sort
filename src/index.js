
// You should implement your task here.
module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }
  else {
    matrix.map((i, j) => j % 2 ? i.reverse() : i);
    return [].concat(...matrix);
  }
}
