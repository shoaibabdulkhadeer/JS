//Palindrom program is if we reverse a word the word spellings shpuld be still same word
//example: racecar - its reverse is still a racecar :)


// function Palindrome(str) {

//      let result = str.split('').reverse().join('')

//      if(result === str) {
//         console.log(true)
//      }else{
//         console.log(false)
//      }

// }

// //Callback Function
// Palindrome("dad")


function Palindrome(str) {


let rev = ""
    for(let i=str.length-1; i >=0 ; i--){
     rev =  rev + str[i] 
  }

   if(str === rev){
    console.log(true)
   }
   else{
    console.log(false)
   }
 
   
}

//callback function         
Palindrome("racecar") 







