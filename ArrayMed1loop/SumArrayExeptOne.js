// Return the sum of the numbers in the array, 
// returning 0 for an empty array. Except the number 13 is very unlucky, 
// so it does not count and numbers that come immediately after a 13 also do not count.

// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6

function sumWithout13(arr){

    // const filtertered = arr.filter((x) => x !== 13)
     
    // let sum = 0
    
    // for(let i=0 ; i<filtertered.length ; i++) {
    //     sum = sum + filtertered[i]
    // }

    //  console.log(sum);
      


    const filtered = arr.filter((x) => x !== 13);

    let sum = 0;
    for(i=0; i<filtered.length ; i++) {
        sum = sum + filtered[i];
    }

    console.log(sum)

}

sumWithout13([1,2,3,4,5,13])




