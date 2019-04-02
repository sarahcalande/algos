//binary search
function binarySearch(value, arr){
  //we want to declare 5 things: first, last, position as -1, found as false, and middle
  let first = 0;
  let last = list.length - 1
  let position = -1
  let found = false
  //while found is false return -1
  let middle;
//start a while loop
  while (found === false && first <= last){
    //calculate the middle, round to integer
    middle = Math.floor((first + last))/2);
    if (arr[middle] == value){
      found = true;
      position = middle;
      //the will return the middle if its the value, else keep searching starting
      //to the left w lower numbers
    } else if arr[middle] > value){
      //resets middle in while loop to lower position and will recheck entire
      //left side
      last = middle - 1;
    } else {
      //if value not found, search through numbers greater than middle
      first = middle + 1
        }
      }
      return position;
    }
