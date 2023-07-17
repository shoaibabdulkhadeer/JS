//first half of the array and the second half of the another array in new array

const a = [1,2,3,4,5,6,7,8,9]
const b = [11,12,13,14,15,16,17,18,19]
const c = []


 for(let i=0; i<=(a.length-1)/2; i++){
    c.push(a[i])
 }

 for(let i=(b.length-1)/2; i<=b.length-1; i++){
    c.push(b[i])
 }

 console.log(c)