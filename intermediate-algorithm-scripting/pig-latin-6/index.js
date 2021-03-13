function translatePigLatin(str) {
    let consonant = str.match(/^[^aeiou]+/);
    str.match(/^[aeiou]/) 
      ? str += 'way'
      : str = str.replace(/^[^aeiou]+/, "").concat(consonant).concat('ay')
    return str;
}

// Alternitives
// function translatePigLatin(str) {
//     let bit = str[0]
//     let partsLength =1;
//     const vowelArray = ['a','e','i','o','u'];
//     console.log(vowelArray.indexOf(str.charAt(0)))
//     if (vowelArray.includes(bit)) {
//       str = str + 'way'
//     } else {
//       for(let i = 1; i < str.length; i++) {
//         if (!vowelArray.includes(str[i])) {
//           bit += str[i]
//           partsLength++
//         } else {
//           break;
//         }
//       }
//       str = str.split('')
//       let part = str.splice(0, partsLength);
//       part = part.join('')
//       str = str.join('')
//       str = str + part + "ay"
//     }
//       return str;
// }

// function translatePigLatin(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
  
//     const startsWithVowel = vowels.some((vow) => vow === str[0])
  
//     if (startsWithVowel) {
//       return str.concat('way')
//     } else {
//       for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//           const finalWord = str.slice(i) + str.slice(0, i) + 'ay'
//           return finalWord
//         }
//       }
//       const finalWord = str.slice(0) + 'ay'
//       return finalWord
//     }
// }

console.log(translatePigLatin('california'))
console.log(translatePigLatin('paragraphs'))
console.log(translatePigLatin('glove'))
console.log(translatePigLatin('algorithm'))
console.log(translatePigLatin('rhythm'))