/* Chapter#1 "ALERTS" */

// alert("hello world")
// alert("Error! Please enter a valid password")
// alert("Welcome to JS Land \n Happy Coding!")
// alert("Welcome to JS Land")
// alert("Happy Coding! \n Prevent this page from creating additional dialogs.")
/* here is from console */
// console.log("Hello... I can run JS through my web browser's console ")

/* Chapter#2 "VARIABLES FOR STRINGS" */

// var username= "Anusha";
// alert(username);

// var myName="AnushaFatima";
// alert(myName);

// var message;
//    message="Hello World";
// alert(message)

//  var a="Anusha"
//  var b="Anwar"
//  var c= a + " " + b
//  alert(c)

// var age;
//  age="I am 20 years old"
//  alert(age)

//  var qualification;
//  qualification="Certificate in Information Technology (CIT)";
//  alert(qualification);

// var dish="PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(dish)

// var a="My email address is";
// var email="Anushafatima213@gmail.com";
// var c= a +" " + email;
// alert(c);

// var Book="I am trying to learn from the Book A smarter way to learn JavaScript";
// alert(Book);

// document.write("Yah! I can write HTML content through JavaScript")

// var characters="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(characters);

/* Chapter#3 "VARIABLES FOR NUMBERS" */

// var Age="I am 20 years old";
// alert(Age);

// var birthYear="My birth year is 2000 <br/> Data type of my declared variable is number"
// document.write(birthYear)

// var Visitorbio="<b>Nabeel Hussain </b> ordered <b>8 Shirt</b>(s) on Online Clothing store."
// document.write(Visitorbio)

/* Chapter#4 "VARIABLE NAMES: LEGAL & ILLEGAL" */

// var x="WELCOME TO";
// var y="KARACHI";
// var z= x + " " + y;
// alert(z)

// /* 5 illegal variable */
// var 1ali;
// var -ali;
// var %ali;
// var @ali;
// var ali#

// /* 5 legal variable */
// var ali8;
// var ali$;
// var $ali;
// var _ali;
// var ali!;

// document.write(" <b>“Rules for naming JS variables” </b> <br/><br/><br/>  Variable names can only contain numbers,$ and_ For example $my_1stVariable <br/>Variables must begin with a letters, $ or_. For example $name, _name or name <br/> Variable names are case sensitive.<br/>Variable names should not be JS keywords")

/* Chapter#5 "MATH EXPRESSIONS" */

//  var a = 4;
//  var b = 7;
//  var c = a + b;
// document.write("The sum of 4 and 7, the result is" + " " + c)

// var a = 9;
// var b = "4";
// var c = a - b;
// document.write("4 is substract from 9, the result is" + " " + c)

// var a = 5;
// var b = "8";
// var c = a * b;
// document.write("5 multiply by 8, the result is" + " " + c)

// var g = 48;
// var h = 8;
// var i = g / h;"
// document.write("48 is divided by 8, the result is" + " " + i)

// var x = 26;
// var y = 15;
// var z = x % y;
// document.write("The result after modulus operation is" + " " + z)

// var a = 5;
// var b = ++a;
// var c = b + 7;
// var d = --c;
// var e = d /3;
// var f = d % 3;
// document.write("Value after variable declaration is <b>a</b> <br/> Initial value:"+" "+ "5" +"<br/>"+"Value after increment is:"+" "+b+"<br/>"+"Value after addition is:"+" "+"13"+"<br/>"+"Value after decrement is:"+" "+d+"<br/>"+"The remainder is :"+" "+f);

// var ticketprice = 600;
// var total = 600 * 5;
// document.write("Total cost to buy 5 tickets to a movie is" + " " + total + "PKR" );

// var heading="<b>Table of 15</b> <br/><br/>"
// document.write(heading)
//  for(var i=1;i<=10;i++)
//  document.write("15"+"x"+i+"="+15*i+ "<br/>");

// var heading="<b>Temperature Converter:</b> <br/><br/>"
//  document.write(heading)
//  var CelsiusTemperature = 20;
//  var a = (CelsiusTemperature*9/5)+32;
//  var FahrenheitTemperature = 55;
//  var b = (FahrenheitTemperature - 32)* 5/9;
//  document.write("25<sup>0</sup>C is"+" "+a+"<sup>0</sup>F"+"<br/>"+"55<sup>0</sup>F is"+" "+b+"<sup>0</sup>C");

// var heading="<b>Shiping Cart</b> <br/><br/>"
// document.write(heading)
// var item1 = 650;
// var quantityofItem1 = 3;
// var item2 = 100;
// var quantityofItem2 = 7;
// var Shippingcharges = 100;
// var a = item1*quantityofItem1;
// var b = item2*quantityofItem2;
// var c = a+b+Shippingcharges;
// document.write("Price of item 1 is" + " " + item1  +"<br/>"+ "Quantity of item 1 is" + " " + quantityofItem1 + "<br/>" + "Price of item 2 is"  + " " + item2  +"<br/>"+ "Quantity of item 2 is" + " " + quantityofItem2 + "<br/>" + "Shippping Charges" + " " + Shippingcharges + "<br/>"+"<br/>" + "Total cost of your products is" + " " + c)

// var heading="<b>Marks Sheet</b> <br/><br/>"
//  document.write(heading);
//  var totalmarks = 980;
//  var marksobtained = 804;
//  var a = (marksobtained / totalmarks) *100;
//  document.write("Total marks:"+ " "+ totalmarks+ "<br/>"+"Marks obtained:"+ " "+marksobtained + "<br/>"+ "Percentage:"+ " "+ a+"%")

//  var heading="<b>Currency in PKR</b> <br/><br/>"
//  document.write(heading);
//  var USdollars= 10 * 104.80;
//  var SaudiRiyal= 25 * 28;
//  var a = USdollars + SaudiRiyal;
//  document.write("Total Currency in PKR:" + " " + a)

// var a= 10;
// var b= ((a+5)*10)/2;
// document.write("The output is"+" "+ b);

// var heading="<b>Age Calculator</b> <br/><br/>"
// document.write(heading);
// var currentyear = 2021;
// var birthyear = 2000;
// var age = currentyear - birthyear;
// document.write("Current Year:"+" "+ currentyear+ "<br/>" + "Birth Year:"+" "+birthyear+"<br/>"+"Your Age is:"+" "+ age);

// var heading="<b>The Geometrizer:</b> <br/><br/>"
// document.write(heading);
// var r = 30;
// var c = (2*3.142)*r;
// var a = (r*r)*3.142;
// document.write("Radius of a circle:"+" "+r+"<br/>"+"The circumference is:"+" "+c+"<br/>"+"The area is:"+" "+a);

// var heading="<b>The Lifetime Supply Calculator:</b> <br/><br/>"
// document.write(heading);
// var favoritesnack = "Chocolate Sandwich";
// var currentage = 20;
// var maximumage = 85;
// var estimatedamount = 4;
// var total = (maximumage-currentage)*4;
// document.write("Favorite Snack :"+" "+favoritesnack+"<br/>"+"Current Age :"+" "+currentage+"<br/>"+"Estimated Maximum Age :"+" "+maximumage+"<br/>"+"Amount of snack per day :"+" "+estimatedamount+"<br/>"+"You will need"+" "+ total +" "+favoritesnack+" "+ "to last you until the ripe old age of"+" "+maximumage);

/* Chapter#6-9 "MATH EXPRESSIONS" */

// var a="<b>Result:</b> <br/> The value of x is: 20 <br/> ------------------------------------ <br/><br/>"
// document.write(a);
// var b="The value of ++x is: 21  <br/> Now the value of x is: 21 <br/><br/><br/>"
// document.write(b);
// var c="The value of x++ is: 21  <br/> Now the value of x is: 22 <br/><br/><br/>"
// document.write(c);
// var d="The value of --x is: 21  <br/> Now the value of x is: 21 <br/><br/><br/>"
// document.write(d);
// var e="The value of x-- is: 21  <br/> Now the value of x is: 20 <br/><br/><br/>"
// document.write(e);

// var a = 2; 
// var b = 1;
// var result = --a - --b + ++b + b--;
//            /* 1  -  0  +  1  + 1 */
// document.write("a is:"+" "+a+"<br/>"+"b is:"+" "+b+"<br/>"+"Result is:"+" "+result);

// var x = prompt("UserName?");
//  if (x === "Anusha","Harmain") {
//  alert("Welcome Mamm!");
//  }

// var table = prompt("Enter table name",'5');

// document.write(table+"x"+"1"+"="+table*1)

// var subject1 = prompt("Enter subject 1 name");
// var subject2 = prompt("Enter subject 2 name");
// var subject3 = prompt("Enter subject 3 name");

// var totalMarks = 100;

// var sub1Obtained = +prompt("Enter subject 1 marks");
// var sub2Obtained = +prompt("Enter subject 2 marks");
// var sub3Obtained = +prompt("Enter subject 3 marks");

// var sub1Per = (sub1Obtained/totalMarks)*100;
// var sub2Per = (sub2Obtained/totalMarks)*100;
// var sub3Per = (sub3Obtained/totalMarks)*100;

// document.write("<table>")
// document.write("<tr>")
// document.write("<th>")
// document.write("Subjects")
// document.write("</th>")
// document.write("<th>")
// document.write("Total Marks")
// document.write("</th>")
// document.write("<th>")
// document.write("Obtained Marks")
// document.write("</th>")
// document.write("<th>")
// document.write("Percentage")
// document.write("</th>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>")
// document.write(subject1)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub1Obtained)
// document.write("</td>")
// document.write("<td>")
// document.write(sub1Per+"%")
// document.write("</td>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>")
// document.write(subject2)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub2Obtained)
// document.write("</td>")
// document.write("<td>")
// document.write(sub2Per+"%")
// document.write("</td>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>")
// document.write(subject3)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub3Obtained)
// document.write("</td>")
// document.write("<td>")
// document.write(sub3Per+"%")
// document.write("</td>")
// document.write("</tr>")
// document.write("<tr>")
// document.write("<td>")
// document.write(" ")
// document.write("</td>")
// document.write("<th>")
// document.write(totalMarks+totalMarks+totalMarks)
// document.write("</th>")
// document.write("<th>")
// document.write(sub1Obtained+sub2Obtained+sub3Obtained)
// document.write("</th>")
// document.write("<th>")
// document.write((sub1Obtained+sub2Obtained+sub3Obtained)/300*100+"%")
// document.write("</td>")
// document.write("</tr>")
// document.write("</table>")

/* Chapter#9-11 "USER INPUT & CONDITIONAL STATEMENT" */

// var x = prompt("City Name");
// if (x === "karachi") {
//      alert("Welcome to city of lights!");
// }

// var a = prompt("Gender");
// if (a === "male") {
//      alert("Good Morning Sir!");
//      }
//      if (a === "female")  {
//         alert("Good Morning Ma'am!");
//      }

// var g = prompt("Color of Road Traffic Signal");
// if (g === "red") {
//     alert("Must Stop!");
// }
// if (g === "yellow") {
//     alert("Ready to move!");
// }
// if (g === "green") {
//     alert("Move now!");
// }

// var x = prompt("Fuel in Car (in litres)");
// if (x <= "0.25litres") {
//     alert("Please refill the fuel in your car!");
// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// var sub1Obtained = +prompt("Enter subject 1 marks");
// var sub2Obtained = +prompt("Enter subject 2 marks");
// var sub3Obtained = +prompt("Enter subject 3 marks");
//  var totalMarks = prompt("Enter total marks");
//  var percentage = (sub1Obtained+sub2Obtained+sub3Obtained)/totalMarks*100
//  if (percentage >=80 && percentage <=100) {
//          Grade = "A-one";
//          Remarks = "Excellent"
//   }
//  else if (percentage >=70 && percentage <=80) {
//     Grade = "A";
//     Remarks = "Good"
// }
// else if (percentage >=60 && percentage <=70) {
//     Grade = "B";
//     Remarks = "You need to improve"
// }
// else if (percentage >=40 && percentage <=60) {
//     Grade = "Fail";
//     Remarks = "Sorry"
// }

// document.write("<b>Marks Sheet</b> <br/><br/><br/>  Total Marks :"+" "+totalMarks+"<br/>"+"Obtained Marks :"+" "+(sub1Obtained+sub2Obtained+sub3Obtained)+"<br/>"+ "Percentage :"+" "+(sub1Obtained+sub2Obtained+sub3Obtained)/totalMarks*100+"%"+"<br/>"+ "Grade :"+" "+Grade+"<br/>"+ "Remarks :"+" "+Remarks)

// var a = prompt("Guess the secret number?");
//   if (a === "5") {
//       alert("Bingo! Correct answer.");
//  }
//   else if (a ==="4")  {
//       alert("Close enough to the correct answer.");
//  }

// var e = prompt("Choose a number which is divisible by 3?");
//   if (e==="3","6","9","12","15","18","21","24","27","30") {
//       alert("Correct! This number is divisible by 3");
//  }

// var b= prompt("Give a number?");
//   if (b=== "2","4","6","8","10","12","14","16","18","20") {
//       alert("Even Number");
//  }
//    else if  (b=== "1","3","5","7","9","11","13","15","17","19") {
//       alert("Odd Number");
//   }

// var temperature= prompt("Temperature?");
// if (temperature > 40){
//     alert("It is too hot outside.");
// }
// else if (temperature > 30){
//     alert("The Weather today is Normal.");
// }
// else if (temperature > 20){
//     alert("Today’s Weather is cool.")
// }
// else if (temperature > 10){
//      alert("OMG! Today’s weather is so Cool.")
//  }

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var sign = prompt("Enter your operator") ;
// if (sign === '+'){
//     alert(firstNumber+secondNumber)
// }else if (sign === '-'){
//     alert(firstNumber-secondNumber)
// }else if (sign === '*'){
//     alert(firstNumber*secondNumber)
// }else if (sign === '/'){
//     alert(firstNumber/secondNumber)
// }else if (sign === '%'){
//     alert(firstNumber%secondNumber)
// }

/* Chapter#12-13 "IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS" */

// var a = prompt("Enter your value");
//  if (a >= 65  &&  a <= 90){
//      alert("Uppercase");
//  }
//  else if (a >= 97 && a <= 122){
//      alert("Lower Case");
//  }
//  else{
//      alert("It's a number")
//  }

//  var e = prompt("Integer 1");
//  var f = prompt("Integer 2");
//  if (e > f ){
//      alert(e)
//  }else if (f > e){
//      alert(f)
//  }else if (e === f){
//      alert("Both numbers are equal")
//  }

// var number = prompt("Enter a number");
// if (number ==="9"|| number ==="8"|| number ==="7"|| number ==="6"|| number ==="5"|| number ==="4"|| number ==="3"|| number ==="2"|| number ==="1"){
//      alert("Positive Number");
//  }
//  else if (number === "-9"|| number ==="-8"|| number ==="-7"|| number ==="-6"|| number ==="-5"|| number ==="-4"|| number ==="-3"|| number ==="-2"|| number ==="-1"){
//     alert("Negative Number");
// }
// else if(number === "0"){
//     alert("Zero");
// }

// var vowel = prompt("Enter your alphabates");
// if(vowel==="a"|| vowel==="e"|| vowel==="i"|| vowel==="o"|| vowel==="u"){
//     alert("true")
// }else  {
//     alert("false")
// }

// var password = prompt("ENTER YOUR PASSWORD" , "Please enter your password");
// var a= "anusha123";
// if(a === password ){
//     alert("Correct! The password you entered matches the original password.");
// }else if (a !== password){
//     alert("Incorrect password")
// }

// var hour;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// }
// else {
//     alert("Good evening");
// }

// var time = prompt("Enter a current time?");
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon");
// }else if(time >= 1700 && time < 2100){
//     alert("Good Evening");
// }else if(time >= 2100 && time <= 2359){
//     alert("Good Night")
// }

/* Chapter#14-16 "ARRAYS" */

// arr= ["","","","",""] // literal notation 
//  var = newArray("","","","") // object notation

// var arr = ["","",""] //string array
// var arr = ["2","4","8","9"] // number array
// var arr = ["true","false"] // boolean array
// var arr = [1, "Bob", "Now is", true] // mixed array

// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD" + "<br/>"]
// for (i = 1; i <= 8; i++ ,) {
//     document.write(qualification )
// }

// var colors = ["orange","red","pink","blue"];
// console.log(colors);

// var addcolorInbeginning = prompt("Add color the beginning","purple");
// colors.unshift(addcolorInbeginning);
// console.log(addcolorInbeginning +" added in the array");
// console.log(colors);
// var addcolorInEnd = prompt("Add color at the end of the array", "yellow");
// colors.push(addcolorInEnd);
// console.log(addcolorInEnd +"added at the end of the array");
// console.log(colors);
// var addcolorInbeginning2 = prompt("enter item in the array on start", "brown");
// var addcolorInbeginning3 = prompt("enter item in the array on start", "green");
// colors.unshift(addcolorInbeginning2,addcolorInbeginning3);
// console.log(addcolorInbeginning2 +"and"+addcolorInbeginning3 + "are added in the array");
// console.log(colors);
// var deletefromBeginning = colors.shift();
// console.log(deletefromBeginning + "is deleted from the array");
// console.log(colors);
// var deletefromEnd= colors.pop();
// console.log(deletefromEnd + "is deleted from the array");
// console.log(colors);
// var deletecolorInIndex = +prompt("enter index nnumber to delete color from array", 2);
// var deletecolorfromIndex = deletecolorInIndex;
// var colorsDeleted = colors.splice(deletecolorInIndex , deletecolorfromIndex);
// console.log(colorsDeleted+ "are deleted from array");
// console.log(colors);

// var scores =[320, 230, 480, 120];
// document.write("Scores of Students:"+ scores +"<br/>" +"Ordered Scores of Students" + scores.sort());





