function spinalCase(str) {
    // Replace spaces with '-'
    str = str.replace(/[^a-zA-Z]/g, '-')
    // Put a '-' between a lowercase and uppercase letter
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2')
    return str.toLowerCase()
}

// Alternitives

// function spinalCase(str) {
//     const re = /([a-z])([A-Z])/g
//     let strToCamelCase = str.replace(re, '$1 $2')
//     let strReplaced = strToCamelCase.replace(/_|\s/g, '-')
//     let strToLowerCase = strReplaced.toLowerCase()
  
//     return strToLowerCase
//   }

// function spinalCase(str) {

//     let camelCaseStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//     let restStr = camelCaseStr.replace(/\s|_/g, "-");
//       return restStr.toLowerCase();
// }
  
  console.log(spinalCase('This Is Spinal Tap'))
  console.log(spinalCase('thisIsSpinalTap'))
  console.log(spinalCase('The_Andy_Griffith_Show'))
  console.log(spinalCase('AllThe-small Things'))
  
  