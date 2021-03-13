function destroyer(arr, ...rest) {
    let newArray = [];
    for (let item of arr) {
      if (!rest.includes(item)) newArray.push(item)
    }
    return newArray;
}
// Alternitives
// function destroyer(arr, ...rest) {
//     return arr.filter((item) => (!rest.includes(item)));
//     // return arr.filter((item) => (rest.indexOf(item) === -1));
// }

// Alternitives using the arguments Object
// function destroyer(arr) {
//     let args = Array.from(arguments).slice(1);
//     let newArray = [];
//     for (let item of arr) {
//       if (!args.includes(item)) newArray.push(item)
//     }
//     return newArray;
//   }

//   function destroyer(arr) {
//     let args = Array.from(arguments).slice(1);
//     //return arr.filter((item) => (!args.includes(item)));
//     return arr.filter((item) => (args.indexOf(item) === -1));
//   }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
console.log(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht',
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  )
)