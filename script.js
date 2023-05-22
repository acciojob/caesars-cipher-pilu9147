// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	for(let i = 0; i < encodedStr.length; i++){
		if( lookup[ encodedStr[i] ] === undefined){
			 decodedArr += encodedStr[i];
		}
		else{
			 decodedArr += lookup[ encodedStr[i] ];
		}
	}

  return  decodedArr;//return decodedArr
}
module.exports = rot13;



// const lookup = {
//   'A': 'N','B': 'O','C': 'P','D': 'Q','E': 'R','F': 'S','G': 'T','H': 'U','I': 'V','J': 'W','K': 'X','L': 'Y', 'M': 'Z','N': 'A','O': 'B','P': 'C',
//   'Q': 'D','R': 'E','S': 'F','T': 'G',
//   'U': 'H','V': 'I','W': 'J','X': 'K',
//   'Y': 'L','Z': 'M', '?': '?', ',': ','
// };

// function rot13(encodedStr){
//    let decodedArr = []; // Your Result goes here
//   // Only change code below 
// 	for(let i = 0;i<encodedStr.length;i++) {
// 		if(lookup[encodedStr[i]]===undefined) {
// 			decodedArr.push(encodedStr[i])
// 		}
// 		else {
// 			decodedArr.push(lookup[encodedStr[i]])
// 		}
// 	}
//   return decodedArr ;//return decodedArr
// }
// module.exports = rot13;
