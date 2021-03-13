function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
    const sourceValues = Object.entries(source);
    arr = collection.filter((object) => sourceValues.every(([key, value]) => object[key] === value))
  
    // Only change code above this line
    return arr;
  }

  // Alternitives
//   function whatIsInAName(collection, source) {
//     var arr = [];
//     // Only change code below this line
//       for (let i = 0; i < collection.length; i++) {
//         const currentObject = collection[i]
  
//         let match = true;
  
//         for (let key in source) {
  
//           if (currentObject[key] !== source[key]) {
//             match = false
//           //   continue;
//           }
//         }
//         if (match) arr.push(currentObject)
//       }
  
//     // Only change code above this line
//     return arr;
//   }

// let keysOfSource = Object.keys(source)
//     collection.forEach(item => {
//       let index = 0; 
//       for (let key in source) {
//         if (item[key] === source[key]) {
//           index ++;
//       }
//       if(index === keysOfSource.length) {
//         arr.push(item)
//       }
//     }
//   })

  console.log(
    whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], {
      apple: 1,
      bat: 2,
    })
  )
