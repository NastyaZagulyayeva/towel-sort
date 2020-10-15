
// You should implement your task here.
// @ts-check
/**
 * 
 * @param {number[][]} matrix 
 */
module.exports = towelSort;

function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  let result = [];
  for (let i=0; i < matrix.length; i++) {
    if(i === 0 || i % 2 == 0) {
       result = [...result, ...matrix[i]];
    } else {
     let rever = matrix[i].reverse();
      result = [...result,...rever];
    }
  }
  return result;
}

console.log(towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]));


