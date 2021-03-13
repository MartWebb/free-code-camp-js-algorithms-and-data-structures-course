function diffArray(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const newArr = mergedArray.filter((data) => !arr1.includes(data) || !arr2.includes(data));
    return newArr;
}

// Alternitives
// function diffArray(arr1, arr2) {
//     let merged = [...arr1, ...arr2]
//     let newArr = []

//     merged.forEach((w) => {
//       if (arr2.indexOf(w) === -1 || arr1.indexOf(w) === -1) {
//         newArr.push(w)
//       }
//     })
//   return newArr;
// }

// function diffArray(arr1, arr2) {
//     let newArr = [];
//     const swap = (one, two) => {
//       for(let item of one) {
//         if (!two.includes(item)) newArr.push(item)
//       }
//     }
//     swap(arr1, arr2);
//     swap(arr2, arr1);
//     return newArr;
// }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

