


// Celcius to Farenheit

function celciusToFahrenheit(celsius){
    let fahrenheit =(celsius*1.8)+32
    return fahrenheit;
}
const mycelsius=celciusToFahrenheit(8)
console.log("This is your temperature in celsius",mycelsius)


// Fahrenheit to celsius
 function fahrenheitToCelsius(fahrenheit){
     let celsius=(fahrenheit-32)*.5556;
     return celsius;
 }
 const myFahrenheit=fahrenheitToCelsius(46.4)
 console.log("This is your temperature in Fahrenheit",myFahrenheit)

 // grade calculation

 function examGrade(point){
     if(point>80){
         console.log("Congratulations! you got CGPA-4 out of 4")
     }
     else if(point>=75)
     {
         console.log("Congratulations! you got CGPA-3.75 out of 4")
     }
     else if(point>=70)
     {
        console.log("Congratulations! you got CGPA-3.50 out of 4")  
     }
     else if(point>=65)
     {
        console.log("Congratulations! you got CGPA-3.25 out of 4")  
     }
     
     else if(point>=60)
     {
        console.log("Congratulations! you got CGPA-3.00 out of 4")  
     }
     else if(point>=55)
     {
        console.log("Congratulations! you got CGPA-2.75 out of 4")  
     }
     else if(point>=50)
     {
        console.log("Congratulations! you got CGPA-2.50 out of 4")  
     }
     else if(point>=45)
     {
        console.log("Congratulations! you got CGPA-2.25")  
     }
     else
     {
        console.log("Sorry ! You are failed.Good luck for next time")  
     }

     
     
 }

 let myPoint=examGrade(90)
 