
/*
4!=4 X 3 X 2 X  1
5!=5 X 4 X 3 X 2 X 1 X
6!=6 X 5 X 4 X 3 X 2 X 1 X'
*/

// let factorial=1;
// for(let i=1;i<=8;i++){
    
    
//     factorial=factorial*i;
    
// }
// console.log(factorial);


// function getFactorial(number){
//     let factorial =1;
//     for( let i = 1; i <=number;i++){
//         factorial=factorial *i;
//     }
//     return factorial;
// }
// let myNumber =getFactorial(8)
// console.log('Factorial of my number ::',myNumber)

// let yourNumber=getFactorial(10);
// console.log('Factorial of your Number::', yourNumber);


// function getFactorial2(number){
//     let factorial =1;
//     let i=number;
//     while(i>=1){
//         factorial=factorial*i;
//         i--;

//     }
//     return factorial;

// }
// let myNumber=getFactorial2(6)
// console.log( myNumber);


function getFactorial3(number){
    let factorial = 1;
    for(let i= number; i>=1; i-- ){
       
        factorial=factorial*i;
    }
    return factorial;
}

let myyNumber=getFactorial3(7);
console.log(myyNumber);