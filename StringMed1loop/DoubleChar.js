// Given a string, return a string where for every char in the original, there are two chars.

// doubleChar("The") → "TThhee"
// doubleChar("AAbb") → "AAAAbbbb"
// doubleChar("Hi-There") → "HHii--TThheerree"

function DoubleChar(str){
    let doubleString = ""
     for(let i=0;i<str.length;i++){
        
          doubleString = doubleString + str[i] + str[i]
     } 
      console.log(doubleString);
}

DoubleChar("The")

