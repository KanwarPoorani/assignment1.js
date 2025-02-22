
// <-----Chapter-1------->
 console.log ("Hello World")

  var name = prompt("What is your name?");
  alert ("Hello, " + name + "! Welcome to our website!");

var input= "Welcome to My Website"
alert(input);

var input= "Error! Please enter a valid password "
alert(input)

var input= "Welcome to JS Land... \n Happy Codding!"
alert(input)

var input= "Welcome to JS Land..."
alert(input)

var input= "Happy Coding!\n Prevent this page from creating additional dialogs."
alert(input)



// <-----Chapter-2------->

var username = prompt ("username")


var myName = (" Enter Your Full Name")


var message = "Hello World"
alert (message)


var Name = ("Jhone Doe")
var Age = ("15 Years Old")
var Course = ("Certified Mobile Application Developmet")
alert (Name)
alert (Age)
alert (Course)


var Food = (" PIZZA \n PIZZ \n PIZ \n PI \n P")
alert(Food)


var email= ("pooranikanwar@gmail.com")
alert ("My email adress is "+ email)


var Book = ("A smarter way to learn JavaScript. ")
alert (" I'm trying to Learn from Book "+ Book)


document.write ("Yah! I can write HTML content through JavaScript")


var Symbol = (" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ")
alert (Symbol)



// <-----Chapter-3------->
var age = 20; 
alert("I'm "+age + " years old.");

var siteViewed = 14;
alert ("You have visted this site" + siteViewed +" times") 


var birthYear = 1990;
document.write("My birth year is " + birthYear + "\nData type of my declared variable is " + typeof birthYear);


var VisitorName = 'John Doe'
var ProductTitle = 'T-shirt'
var Quantity = '5'
document.write ("<b>"+ VisitorName+ "</b>"+ " ordered " + "<b>"+ Quantity +"</b>"+ "<b>"+ ProductTitle + "</b>"+ "(s) on XYZ Clothing Store")





// <-----Chapter-4------->

// legal
var inputName =("inputName")
var courseName1 = ("courseName")
var subjectTeacher =("subjectTeacher")
var Class10Student = ("Class10Student ")
var cityName =("cityName")


// Illegal
var 1stPositionHolder = ("1stPositionHolder")      // Cannot start with a number
var #mobileNo = ("mobileNo")                      // Never use of special Characteers
var my-variable = ("my variable")                 // Hyphens are not allowed
var my Name = ("My name")                       // Spaces are not allowed
var var= ("Var")                               // "var" is a reserved keyword



document.write ("<b>" +"Rules for naming JS variables" + "</b> <br>") 
document.write (" <br> Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable. <br>")
document.write ("Variable names must begin with a letter, $, or _. For example: $name, _name, or name. <br>")
document.write ("Variable names are case-sensitive. <br> ")
document.write ("Variable names should not be JS keywords.")





// <-----Chapter-9-11 Qno 1------->
var CityName = prompt ("Enter the City Name")
if (CityName === "Karachi") {
    alert ("Welcome To City Of Lights!")
}
else {
    alert (" ")
}


// <-----Chapter-9-11 Qno 2------->
var Gender = prompt ("Gender")
if (Gender === "Male") {
    alert ("Good Morning Sir")
}
else if (Gender === "Female") {
    alert ("Good Morning Ma'm")
}
else {
    alert (" ")
}


// <-----Chapter-9-11 Qno 3------->

var SignalColor = prompt ("Enter the Signal Color")
if (SignalColor === "Red") {
    alert("Must Stop")
}
else if (SignalColor === "Yellow") {
    alert ("Ready to move")
}
else if (SignalColor === "Green") {
    alert ("Move Now")
}
else {
    alert ("")
}



// <-----Chapter-9-11 Qno 4------->

var RemainingFuel = +prompt ("Check the remaiing fuel")

if (RemainingFuel < 0.25) {
    alert ("Please Refill the fuel in your car")
}
else {
    alert ("You have Sufficient Fuel in Car.")
}



// <-----Chapter-9-11 Qno 5------->

// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}                            //True

// b
var b = 82;       //(Not Running)
if (b++ === 83){
alert("given condition for variable b is true");
}       

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");      //Ruun
}
if (c === 13){
alert("condition 2 is true");     //True
}
if (++c < 14){
alert("condition 3 is true");    //No Run
}
if(c === 14){
alert("condition 4 is true");    //True
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");             
}                             //True

// e. 
if (true) {
alert("True");
}
if (false){
alert("False");
}               //True



// <-----Chapter-9-11 Qno 6------->

var ObtMarks= +prompt("Enter Your Marks")

var totalMarks = 300
var Percentage = (ObtMarks / totalMarks) * 100;
console.log ("Percentage:", Percentage);

if (Percentage >= 60 && Percentage < 70) {
    console.log (" your grade is B");
    console.log (" Remarks: You need to improve")
}

else if (Percentage >= 70 && Percentage < 80) {
    console.log(" Grade: your grade is A");
    console.log (" Remarks: Good")
}

else if (Percentage >= 80 && Percentage <= 100) {
    console.log(" Grade: your grade is A+");
    console.log (" Remarks: Excellent")
}

else {
    console.log(" Grade: Fail");
    console.log (" Remarks: Sorry")
}



// <-----Chapter-9-11 Qno 7------->

var SelectNumber = +prompt ("Guess a number")
var SecretNumber =  4
var HighestNumber = 10

if ( SelectNumber === SecretNumber)
    {
    alert ("Bingo! Correct answer.")
}
else if (SelectNumber === SecretNumber +1) {
    alert ("Close enough to the correct answer")
}
else {
    alert ("")
}



// <-----Chapter-9-11 Qno 8------->

var GivenNumber = parseInt(prompt("Enter a Number"));
var number = 3;
if (GivenNumber % number === 0) { 
    console.log("Yes, Divisible");
} else {
    console.log("Not Divisible");
}



// <-----Chapter-9-11 Qno 9------->

var GivenNumber = prompt ("Enter a Number")
var number = 2;
if (GivenNumber % number === 0) {
    console.log ("Even")
}

else {
    console.log ("Odd")
}




// <-----Chapter-9-11 Qno 10------->
var Temperature = +prompt ("Enter the Temperature")
var HighestTemp = 40;

if (Temperature > HighestTemp) {
    console.log ("It's too hot Outside")
}
else if (Temperature > 30 && Temperature < HighestTemp) {
    console.log ("The Weather today is Normal")
}
else if (Temperature > 20 && Temperature < 30) {
    console.log ("Today's Weather is Cool")
}
else {
    console.log ("OMG! Today's weather is so Cool")
}




// <----- Chapter 9-11 Qno 11------->

// <--------Division--------->
var FirstNumber = +prompt ("Enter a number 1")
var SecondNumber = +prompt ("Enter a number 2")
var Result = FirstNumber / SecondNumber
alert (Result);


// <--------Subtraction--------->
var FirstNumber = +prompt ("Enter a number 1")
var SecondNumber = +prompt ("Enter a number 2")
var Result = FirstNumber - SecondNumber
alert (Result);


// <--------Mod--------->
var FirstNumber = +prompt ("Enter a number 1")
var SecondNumber = +prompt ("Enter a number 2")
var Result = FirstNumber % SecondNumber
alert (Result);


// <--------Multiplicaion--------->
var FirstNumber = +prompt ("Enter a number 1")
var SecondNumber = +prompt ("Enter a number 2")
var Result = FirstNumber * SecondNumber
alert (Result);


// <--------Addition--------->
var FirstNumber = +prompt ("Enter a number 1")
var SecondNumber = +prompt ("Enter a number 2")
var Result = FirstNumber + SecondNumber
alert (Result);



// <-----Chapter-12-13 Qno 1------->

var asciiValue = prompt("Enter the Value")

if (asciiValue >= 48 && asciiValue <=57) {
    alert ("This a number")
}
else if (asciiValue >= 97 && asciiValue <= 122) {
    alert ("This a lower case letter")
}
else if (asciiValue >= 65 && asciiValue <= 90) {
    alert ("This a upper case letter")
}
else {
    alert ("")
}


// <-----Chapter-12-13 Qno 2------->

var FirstNumber = parseInt (+prompt ("Enter the 1st Number"))
var SecondNumber = parseInt (+prompt ("Enter the 2nd Number"))

if (FirstNumber > SecondNumber) {
    alert ("First Number is Larger than Second")
}
else if (FirstNumber < SecondNumber) {
    alert ("Second Number is Larger than First")
}
else {
    alert ("Both numbers are equal")
}


// <-----Chapter-12-13 Qno 3------->

var InputNumber = +prompt ("Enter the Number")

if (InputNumber > 0) {
    alert ("The number is positive.")
}
 else if (InputNumber < 0) {
    alert ("The number is negative.")
} 
else {
    alert ("The number is zero.")
}


// <-----Chapter-12-13 Qno 4------->

var Character = prompt("Enter the Alphabet");

if (Character === 'a' || Character === 'e' || Character === 'i' || Character === 'o' || Character === 'u') {
    alert("True");
} else {
    alert("False");
}



// <-----Chapter-12-13 Qno 5------->

var InputPassword = prompt ("Enter the Password")
var Password = 'Kanwar'

if (InputPassword === Password) {
    alert ("Correct! The password you entered matches the original password.")
}
else if (InputPassword === '') {
    alert ("Please enter your password")
}
else {
    alert ("Incorrect password")
} 




// <-----Chapter-12-13 Qno 6------->

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"
} else { 
    greeting = "Good evening"
}
alert(greeting)



// <-----Chapter-12-13 Qno 7------>

var InputTime  = +prompt ("Enter Time")
var Time = 2400;

if (InputTime >= 0 && InputTime < 1200 ) {
    alert ("Good Morning")
}
else if (InputTime >= 1200 && InputTime < 1700 ) {
    alert ("Good Afternoon")
}
else if (InputTime >= 1700 && InputTime < 2100 ) {
    alert ("Good Evening")
}
else if (InputTime >= 2100 && InputTime <= 2359 ) {
    alert ("Good Night")
}
else {
    alert ("")
}
