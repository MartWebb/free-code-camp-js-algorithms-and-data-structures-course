function pairElement(str) {
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
      switch(str[i]) {
        case 'G':
          newArr.push(["G","C"])
          break;
        case 'C':
          newArr.push(["C","G"]) 
          break; 
        case 'A':
          newArr.push(["A","T"])
          break;
        default:
          newArr.push(["T","A"]) 
          break;
      }
    }
    return newArr;;
}
// alternatives
// function pairElement(str) {
//     const addPair = (letter) => {
//       if (letter === 'A') return 'T'
//       else if (letter === 'T') return 'A'
//       else if (letter === 'C') return 'G'
//       else return 'C'
//     }
  
//     const finalStrand = str.split('').map((letter) => {
//       const pair = [letter, addPair(letter)]
  
//       return pair
//     })
//     return finalStrand
// }

// function pairElement(str) {
//     //create object for pair lookup
//     var pairs = {
//       A: "T",
//       T: "A",
//       C: "G",
//       G: "C"
//     };
//     //split string into array of characters
//     var arr = str.split("");
//     //map character to array of character and matching pair
//     return arr.map(x => [x, pairs[x]]);
// }

console.log(pairElement('GCG'))
// console.log(pairElement('ATCGA'))
// console.log(pairElement('TTGAG'))
// console.log(pairElement('CTCTA'))