// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

// var Arr=[30,40,50,100,60,20,80,90];

/* var smallest =Arr[0];       
for(var i=0;i<Arr.length;i++){
    if(Arr[i] <smallest){
        smallest = Arr[i];
    }
}
console.log("The smallest number ", smallest) */


// using functiontion find out the largest element of an Array

function largestElementofArray(numbers){
    let largest =numbers[0];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>largest)
        largest=numbers[i];
    }
    return largest;
}

const myArr=largestElementofArray([50, 55, 60, 70, 80, 95, 90]);
console.log("The largest number :", myArr)


function smallestElementofArray(numbers){
    let smallest =numbers[0];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]<smallest)
        smallest=numbers[i];
    }
    return smallest;
}

const herArr=smallestElementofArray([50, 55, 60, 70, 80, 95, 90]);
console.log("The smallest number :", herArr)

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
/*
 var num1=10;
 var num2=20;
 var num3=30;
 var num4 = Math.min(num1, num2, num3);
 console.log(num4); */

var num1=50;
var num2=25;
var num3=30;
 if(num1<num2 && num1<num3){
     console.log("The smallest number is among those three numbers :",num1)
 }
 else if(num2<num1&& num2<num3){
     console.log("The smallest number is among those three numbers  :",num2)
 }
 
 else{
    console.log("The smallest number is among those three numbers  :",num3)
 }




// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

function getAverageValue(number){
    let sum=0;
    for(let i=0;i<number.length; i++){
        
        sum=sum+number[i]
         
    }
    var average=sum/number.length

    return average;
}
let myNumbers=[10,15,16,17,18,19];
let averageNumber=getAverageValue(myNumbers)
// console.log("AVerage number is :",myNumbers)
console.log("Average number is :",averageNumber)



// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function getRectangleArea(num1,num2){
    let area=num1*num2;
    return area;
}
let myArea=getRectangleArea(20,10)
console.log("the area of a rectangle is :",myArea)



// ৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 




// প্রাকটিস প্রব্লেম- জাস্ট ২ টা 

// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  



// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 






/* Q15: What code you have to write to know the number of “a” in a string */
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter=='a'){
    count++;
  }
}
console.log("know the number of “a” in a string" ,count)