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
      //return the middle if its the value, else keep searching starting
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



    //pseudo code:
    //the diff between linear and binary search is that binary search
    //is already sorted and starts with the middle
    //we make a function that has 2 arguements: the array and value we're searching for
    //we want to declare 5 things: first, last, position as -1, "found" as false, and middle
    //start a while loop
    //calculate the middle, round to integer
    //return the middle if its the value, else keep searching starting
    //to the left w lower numbers; reset middle in while loop to lower position and will recheck entire
    //left side
    //if value not found, search through numbers greater than middle
    //final step is always returning the position






// Remove duplicates from the given array
function removeDuplicates(arr) {
    var placeholder = {};
    arr.forEach(function(i) {
        if(!placeholder[i]) {
            placeholder[i] = true;
        }
    });
    return Object.keys(arr);
}

var arr = ['Heart5', 'Diamond6', 'Club7', 'Spade8', 'Diamond6', 'Club7'];

console.log(removeDuplicates(arr)); // ['Heart5', 'Diamond6', 'Club7', 'Spade8']
