//1.Creates an array of elements split into groups the length of size. If array can't be split evenly, 
the final chunk will be the remaining elements.

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}
console.log(chunk([1,2,3,4],2))

//4.Creates a slice of array with n elements dropped from the beginning.

function chunk(array, size) {
  const chunked_arr = [];
  if(size == 0)
  {
  chunked_arr.push(array)
  return chunked_arr;
  }
  else{
  let index = size;
  chunked_arr.push(array.slice(index, size + index));
  return chunked_arr;
  }
}
console.log(chunk([1,2,3,4],0))

//5.Creates a slice of array with n elements dropped from the end
function chunk(array, size) {
  const chunked_arr = [];
  if(size == 0)
  {
  chunked_arr.push(array)
  return chunked_arr;
  }
  else{
  let index = 0;
  chunked_arr.push(array.slice(index, (array.length-size)));
  return chunked_arr;
  }
}
console.log(chunk([1,2,3,4],0))
