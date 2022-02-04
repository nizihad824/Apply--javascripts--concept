//  const even =14;
//  const remainder =even % 2;
//  console.log(remainder == 0);



 function isEven(number){
     if(number % 2 ==0){
        return true;} 
        return false;

 }
const myNumber=1890;
 const ismyNumberEven=isEven(myNumber);
 console.log('Is my Number Even ::', ismyNumberEven)

 function isOdd(number){
     if(number%2!==1){
         return true;
     }
     return false;
 }
  
 const herNumber=1891;
 const isHerNumberOdd=isOdd(herNumber)
 console.log('Is Her number Odd::',isHerNumberOdd)

