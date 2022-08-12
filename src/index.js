
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr1 = [];
  if (matrix === undefined) return [];
   for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix[i].length; j++){
           if (i % 2 === 0) {
               arr1.push(matrix[i][j]);
           } else {
               arr1.push(matrix[i][matrix[i].length-j-1]);
           }
       }
   }
   return matrix.length ? arr1 : [];
}
