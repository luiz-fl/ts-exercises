// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number
// for which the ceond occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers,
// return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.
// if there are no such elements, return -1.

function firstDuplicate(a: Array<number>) {
  const occurrencesList: any = {};
  let firstDuplicateNumber = -1;
  a.forEach((item, index, array) => {
    if (firstDuplicateNumber !== -1) {
      return;
    }
    if (occurrencesList[item] === undefined) {
      occurrencesList[item] = index;
      return;
    }
    if (occurrencesList[item] !== undefined) {
      firstDuplicateNumber = item;
      return;
    }
  });

  return firstDuplicateNumber;
}

let inputList = [2, 1, 3, 5, 3, 2] // => 3
console.log('response =>', firstDuplicate(inputList));

inputList = [2, 2] // => 2
console.log('response =>', firstDuplicate(inputList));

inputList = [2, 4, 3, 5, 1] // => -1
console.log('response =>', firstDuplicate(inputList));
