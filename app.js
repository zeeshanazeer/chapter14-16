// Q1: Declar an empty array using js literal notation to store student names is future
// Q2: Declar an empty array using js Object notation to store student names is future
// var studentName=prompt("Please enter Student Name");
// alert
// document.write(`Student Name is ${studentName}<br>`);

// Q3: Delare and initialize a strings Array.
// var cityName=["Karachi" , "Peshawar", "Multan" , "Lahore", "Islamabad"];
// document.write(`City Name is Pakistan ${cityName[2]}<br>`);

// Q4: Delare and initialize a number Array.
// var oddNum=[1 , 3, 5 , 11, 99];
// document.write(`It is Odd Number is ${oddNum[3]}<br>`);

// Q5: Delare and initialize a boolean Array.
// var boolean=[1 , 3, 5 , 11, 99 , undefined, NaN];
// document.write(`It is Odd Number is ${boolean[3]}<br>`);

// Q6: Delare and initialize a Mixed Array.
// var mixed=["Pakistan", "India",1 ,  11, 99 , undefined, NaN];
// document.write(`It is Odd Number is ${boolean[3]}<br>`);

// Q7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like.
// document.write(`Qualification`);
// var qual=["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" ,"M.Phil" ,"PHD"];
// for (var i=0; i<=7; i++){
//     document.write(i+")"+qual[i] + "<br>");
// }

// Q8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// // the scores & percentages of students like:
// var userName=prompt("please Enter Your Name");
// var num=+prompt("Please Enter Your Total Number");
// var par=num/500*100;
// document.write("Score of " + userName + " is " + num + ". Percentage: " +par + "%");

// Q9;
// var color=["red","yellow"];
// var color1=prompt("Please Enter Color Name ");
// color.unshift(color1);
// var color2=prompt("please Enter Color Name");
// color.push(color2);
// document.write("Your color name is "+ color +"<br>");



// Q11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
var cityName=["Karachi" , "Peshawar", "Multan" , "Lahore", "Islamabad"];
var userInp=prompt("please enter city");
var match=false;
var capi=userInp.slice(0,1).toUpperCase();
var smal=userInp.slice(1).toLowerCase();
var mix=capi+smal;
for (var i=0; i<cityName.lenght; i++){
   if(mix==cityName[i]){
       match=true;
       document.write(`${mix} City Found`);
       break
   }
}
if(!match){
   document.write(`${mix} City is not Found`);

}