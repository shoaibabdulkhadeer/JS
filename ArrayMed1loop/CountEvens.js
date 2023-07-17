let count = 0
function evenCount(arr){

   for(let i=0;i<arr.length;i++){
     if(arr[i] % 2 == 0){
      count++;
     }
   }
 
   console.log(count);
}

evenCount([1,2,3,4,5,6])