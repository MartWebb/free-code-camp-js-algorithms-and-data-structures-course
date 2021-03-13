function sumAll(arr) {
    const max = arr[0] > arr[1] ? arr[0] : arr[1];
    let min = arr[0] < arr[1] ? arr[0] : arr[1];
    let sumOfAllNumbers = 0;
  
    for (min; min <= max; min++) {
      sumOfAllNumbers += min;
    }
    return sumOfAllNumbers;
}

// Alternitives

// function sumAll(arr) {
//     let allNumbersArray = [];
//     let sumOfAllNumbers = 0;
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
//     arr.sort(function(a, b) {
//         return a - b
//     });
  
//     for (let i = arr[0]; i <= arr[1]; i++) {
//         allNumbersArray.push(i);
//     }
  
//       sumOfAllNumbers = allNumbersArray.reduce(reducer);
  
//       return sumOfAllNumbers;
//   }
  
//   sumAll([1, 4]);

console.log(sumAll([10, 5]))