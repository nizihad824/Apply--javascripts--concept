 /* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... */



 /* const fibonacci =[0,1]
 for(let i=2;i<=10;i++){
  fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
  console.log(fibonacci)
 }
 console.log("Here is the fibonacci series:", fibonacci) */


 function fibonacciSeries(n){
     if(typeof n !='number'){
         return 'Please give a number'
     }
     else if(n<0){
         return 'Please enter a positive number:'
     }
     const fiboS=[0,1];
     for(let i=2;i<=n;i++){
         fiboS[i]=fiboS[i-1]+fiboS[i-2];
     }
     return fiboS;
 }
 const fiboSeries =fibonacciSeries(3);

 console.log("Here is your fibonacci series according to your input value::" ,fiboSeries)

