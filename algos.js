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


//Sort the given stack into an ascending order without using recursion.
//'use strict';
//Time complexity : O(n^2) (quadratic, around level 5)

function Stack() {
  this.top = null;
}

Stack.prototype.sort = function() {
  var s2 = new Stack();

  while (this.top) {
    var tmp = this.pop();

    while (s2.top && s2.top.data > tmp) {
      s1.push(s2.pop());
    }
    s2.push(tmp);
  }

  console.log('Sorted stack = ', s2);
}

var s1 = new Stack();
s1.push(3);
s1.push(6);
s1.push(1);
s1.push(2);
s1.push(5);
s1.push(4);
s1.sort();


//hex to rgba conversion using javascript
let hex = 'ff00ff';
let r = parseInt(hex.substring(0, 2), 16) // 255

function hexToRGB (hex) {

  // remove whitespace from left and rihgt ends
  hex = hex.trim()
  if (hex.startsWith('#')) {
    hex = hex.replace('#', '')
  }

  // convert short hand notation (f0f) to the regular notation (ff00ff)
  if (hex.length == 3) {
    let temp = ''
    for (let i = 0; i < hex.length; i++)
      temp += hex[i] + hex[i]
    hex = temp
  }

  // check for additional white space between characters (f    0    f)
  if (hex.length != 6 ) {
    throw new Error(`hexToRGB was called with incorrect hex code.
      Valid hex code is either three to four characters long with following characters '0123456789ABCDEFabcdef' `)
  }

  // check for valid characters from 0-F
  let validHexChars = '0123456789ABCDEFabcdef'
  for (let i = 0; i < hex.length; i++) {
      if ( !validHexChars.includes(hex[i]) ) {
        throw new Error(`hexToRGB was called with incorrect hex code.
          Valid hex code is either three to four characters long with following characters '0123456789ABCDEFabcdef' `)
      }
  }

  let RGB = []
  let r = parseInt(hex.substring(0, 2), 16)
  RGB.push(r)
  let g = parseInt(hex.substring(2, 4), 16)
  RGB.push(g)
  let b = parseInt(hex.substring(4, 6), 16)
  RGB.push(b)

  return RGB
}
