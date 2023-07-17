//Given an array of ints, return true if the array contains No 1's and no 3's.

// lucky13([0, 2, 4]) → true
// lucky13([1, 2, 3]) → false
// lucky13([1, 2, 4]) → false


function Present1and3(arr){

let Present ;
     
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1 || arr[i] === 3){
            Present = false;
        }else{ 
            Present = true;
        }
    }  

     console.log(Present);

}


Present1and3([5,2,4])