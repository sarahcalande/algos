//binary search
function binarySearch(value, arr){
  let first = 0;
  let last = list.length - 1
  let position = -1
  let found = false
  let middle;

  while (found === false && first <= last){
    middle = Math.floor((first + last))/2);
    if (arr[middle] == value){
      found = true;
      position = middle;
    } else if arr[middle] > value){
      last = middle - 1;
    } else {
      first = middle + 1
        }
      }
      return position;
    }
