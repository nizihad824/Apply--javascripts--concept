// var inches = 132;
// var feet =inches/12;
// console.log(feet);

// var naniInches=168;
// var feet =naniInches/12;
// console.log(feet);

// var nanaInches=268;
// var feet =nanaInches/12;
// console.log(feet);


function inchToFeet(inches){
    var feet = inches/12;
    return feet;

}
var myInches=132;
var feet =inchToFeet(myInches)
console.log('Here is the feet of 132 :',feet);


var dadiInches =60;
var feet =inchToFeet(dadiInches)
console.log(dadiInches)


// miles to kilometer
function milesToKilometer(miles){
    var km= miles*1.60934;
    return km;
}
var marathon=26.2;
var marathonKm=milesToKilometer(marathon)
console.log("Marathon in kmmm::",marathonKm)