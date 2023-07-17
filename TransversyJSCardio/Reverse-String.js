//Two methods for reversing the string

function reverse(str) {
 
    // split mehtod to convert a string to a array 
    // join to convert array to a string
    let result = str.split('').reverse().join('')
    console.log(result)

}

// function reverse(str) {
//     let rev = ""
//    for(let i=str.length-1; i >=0 ; i--){''
//     rev =  rev + str[i] 
//    }
//   console.log(rev)
// }

//callback function
reverse("hello")