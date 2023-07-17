//To Capatalize- letters 
//In a sentence only first character should be caplital

function capitalize(str){
    
   //  const strgArry = str.toLowerCase().split(' ')

   //   for(let i=0; i < strgArry.length; i++){
   //      strgArry[i] = strgArry[i].substring(0,1).toUpperCase() + strgArry[i].substring(1)
   //   }

   //      const result = strgArry.join(' ')

   //      console.log(result)

  const strgArry = str.toLowerCase().split(' ')
   
    const result =  strgArry.map((eachstring) => {
       return  eachstring[0].toUpperCase() + eachstring.substr(1)
   })
  

   // console.log(strgArry)
    console.log(result)

} 

//callback function
capitalize("i love javascript and i am reactjs developer")


