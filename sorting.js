'use strict';

// already implemented!
function nativeSort(arr) {
  return arr.sort((a, b) => a - b);
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      }
      if (j === 0 && arr[j] > temp) {
        arr[j] = temp;
      }
      if (arr[j] < temp) {
        arr[j + 1] = temp;
        { break; }
      }
    }
  }
  return arr;
}


function bubbleSort(arr) {
  let swapped = true;
  let unsorted = arr.length - 1;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < unsorted; i++) {
      console.log(arr, arr[i], arr[i + 1]);
      if (arr[i] > arr[i + 1]) {
        // Swapping two array indexes with es6 destructuring.
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    unsorted--;
  }

  return arr;
}


function heapSort(arr) {
  arr = makeFirstMaxHeap(arr);
  let size = arr.length;
  let temp;
  for (let i = arr.length - 1; i > 0; i--) {
    temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    size--;
    makeMaxHeap(arr, 0, size);
  }
  return arr;
}

const makeFirstMaxHeap = arr => {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    makeMaxHeap(arr, i, arr.length);
  }
  return arr;
}

const makeMaxHeap = (arr, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  let largestNum = index;

  if (heapSize > left && arr[largestNum] < arr[left]) {
    largestNum = left;
  }

  if (heapSize > right && arr[largestNum] < arr[right]) {
    largestNum = right;
  }

  if (largestNum !== index) {
    const temp = arr[index];
    arr[index] = arr[largestNum];
    arr[largestNum] = temp;
    makeMaxHeap(arr, largestNum, heapSize);
  }
}


function bucketSort(arr) {

}


function combine(left, right) {
  let array = [];
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < left.length && indexTwo < right.length) {
    if (left[indexOne] <= right[indexTwo]) {
      array.push(left[indexOne]);
      indexOne++;
    } else {
      array.push(right[indexTwo]);
      indexTwo++;
    }
  }

  while (indexOne < left.length) {
    array.push(left[indexOne]);
    indexOne++;
  }

  while (indexTwo < right.length) {
    array.push(right[indexTwo]);
    indexTwo++;
  }

  return array;
}

function mergeSort(arr) {
  if (arr.length <= 1) { return arr; }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return combine(left, right);
}


//Pivot Helper function
// accepts three arguement.
function pivot(arr, start, end) {
  // grabs pivot from the start of the arr
  let pivot = arr[start];
  // store the swap index to keep start of where the pivot should be moved at the end.
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    // If pivot is greater then the current element than increment the pivot index then swap current element with pivot index.
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  // Swap the starting element with the pivot index. Now all numbers lower than the pivot are on the left and the numbers greater than are on the right.
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  // return the pivot index;
  return swapIndex;
}

//Quick sorting function 
function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left side of pivot
    quickSort(arr, left, pivotIndex - 1);
    // right side of pivot
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

bubbleSort([34, 20, 43, 47, 49, 2, 4, 35, 30, 8]);

selectionSort([34, 20, 43, 47, 49, 2, 4, 35, 30, 8]);

mergeSort([34, 20, 43, 47, 49, 2, 4, 35, 30, 8]);

quickSort([34, 20, 43, 47, 49, 2, 4, 35, 30, 8]);