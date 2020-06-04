//Problem:
//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

addFive(5);  //10
addFive(0);  //5
addFive(-5); //-10

var num = 10;
//function declaration
function addFive(num) { 
	if(num>0){
	return num+5
	}
	else{
	return num+num
	}
}
var result = addFive(-5)
console.log(result)

//Write a function called “getOpposite”.Given a number, return its opposite

//input
getOpposite(5);	//-5
getOpposite(0); //0
getOpposite(-5); //5
getOpposite(“5a”); //-1
getOpposite(5.5); //-1

var num = 5.5;
function getOpposite(num) {
   if(typeof(num) == "number"){
   var res = -num
   return res
   }
   else if(typeof(num) == "string"){
   return "-1"
   }
}
var result = getOpposite(num)
console.log(result)

//Fill in your code that takes an number minutes and converts it to seconds.
//Examples
toSeconds(5) ➞ 300
toSeconds(3) ➞ 180
toSeconds(2) ➞ 120

var min = 5;
function toSeconds(min) {
	return(min*60)
}
var secs = toSeconds(min)
console.log(secs)

//Create a function that takes a string and returns it as an integer.
//Examples
toInteger(“6”) ➞ 6
toInteger(“1000”) ➞ 1000
toInteger(“12”) ➞ 12

var mystr = "5";
function toInteger(mystr) {
	var integer = parseInt(mystr)
	return integer
}
var myint = toInteger(mystr)
console.log(myint)

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
Examples
nextNumber(0) ➞ 1
nextNumber(9) ➞ 10
nextNumber(-3) ➞ -2

var myint = 0;
function nextNumber(myint) {
	if(myint>0){
	return myint+1
	}
	else{
	return myint-1
	}
}
var myNextint = nextNumber(myint)
console.log(myNextint)

//Create a function that takes an array and returns the first element.
//Examples
//getFirstElement([1, 2, 3]) ➞ 1

var arr = [80, 5, 100];
function getFirstElement(arr) {
	return arr[0]
}
var data = getFirstElement(arr)
console.log(data)

//Write a function that converts hours into seconds.
//Examples
//hourToSeconds(2) ➞ 7200

var arr = 2;
function hourToSeconds(arr) {
	return (arr*60*60)
}
var data = hourToSeconds(arr)
console.log(data)

//Find the Perimeter of a Rectangle.Create a function that takes height and width and finds the perimeter of a rectangle.
//Examples
//findPerimeter(6, 7) ➞ 26

function findPerimeter(num1,num2) {
	var rectangle = 2*(num1+num2)
	return rectangle
}
var peri = findPerimeter(6,7)
console.log(peri)

//Less Than 100?.Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
//Examples
//lessThan100(22, 15) ➞ true
// 22 + 15 = 37

function lessThan100(num1,num2) {
	var check = num1+num2
	if(check <100){
	return "true"
	}
	else{
	return "false"
	}
}
var res = lessThan100(22,15)
console.log(res)

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
//Examples
//remainder(1, 3) ➞ 1

function remainder(num1,num2) {
	var div = (num1%num2)
	if(div == 0){
	return "0"
	}
	else{
	return num1
	}
}
var res = remainder(1,3)
console.log(res)

//Examples
//CountAnimals(2, 3, 5) ➞ 36

function CountAnimals(tur,horse,pigs) {
	var total = ((tur*2)+(horse*4)+(pigs*4))
	return total
}
var legs = CountAnimals(2,3,5)
console.log(legs)

//Frames Per Second.Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//Examples
//frames(1, 1) ➞ 60

function frames(num1,num2) {
	var fsec = (num1*num2*60)
	return fsec
}
var fps = frames(1,2)
console.log(fps)

//Check if an Integer is Divisible By Five
//Examples
//divisibleByFive(5) ➞ true

function divisibleByFive(num1) {
	if(num1%5 ==0){
	return "true"
	}
	else{
	return "false"
	}
}
var divisible = divisibleByFive(57)
console.log(divisible)

//Given a number, “isEven” returns whether it is even.

//Input:
//isEven(12);	//true

function isEven(num){
	if(typeof(num) == "number")
	{
	if(num%2 == 0){
		return "true"
	}
	else{
		return "false"
	}
	}
	else{
	return "-1"
	}
 }
var even = isEven(5)
console.log(even)

//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
//Input:
//areBothOdd(1, 3);      //true

function areBothOdd(num1, num2){
	if((num1%2 == 0) && (num2%2 == 0)){
	return "true"
	}
	else{
	return "false"
	}
}
var result = areBothOdd(1, 4)
console.log(result)

//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
//Input:
//getFullName(“GUVI”, “GEEK”);

function getFullName(firstName, lastName){
	var res = firstName+ " " +lastName
	return res
}
var result = getFullName('GUVI',);
console.log(result)

//Given a word, “getLengthOfWord” returns the length of the given word.
//Input:
//getLengthOfWord(“GUVI”);

function getLengthOfWord(word1){
	if(typeof(word1) == "string")
	{
	var strlength = word1.length;
	return strlength;
	}
}
var result = getLengthOfWord('GUVI');
console.log(result)

//Given two words, “isSameLength” returns whether the given words have the same length.
//Input:
//isSameLength(“GUVI”, “GEEK”);		//true


function isSameLength(word1, word2){
	var strlength1 = word1.length;
	var strlength2 = word2.length;
	if(strlength1 == strlength1){
	return "true"
	}
	else{
	return "false"
	}
}
var result = isSameLength('GUVI', 'GEEK');	
console.log(result)


//Create a function to calculate the distance between two points defined by their x, y coordinates

Math.getDistance = function( x1, y1, x2, y2 ) {
	var xs = x2 - x1,
		ys = y2 - y1;		
		xs *= xs;
		ys *= ys;
	return Math.sqrt( xs + ys );
};
var result = getDistance(100,100,400,300);	
console.log(result)

//Write a function called “getNthElement”
//Input:
//getNthElement([1, 3, 5], 1);

function getNthElement(array,n){
	return (array[n])
}
console.log(getNthElement([1, 3, 5], 1));

//Write a function called “getLastElement”.

//Input:
//getLastElement([1, 2, 3, 4]);

function getLastElement(array){
	var last = array[array.length-1]
	return last
}
console.log(getLastElement([1, 2, 3, 4]));

//Write a function called “getProperty”.
//Input:
//getProperty(obj,’mykey’);		//value
//getProperty(obj,’dummykey’);	//NA

var obj = {
 mykey: 'value'
};
function getProperty(obj, key) {
	return obj.key
}	
console.log(getProperty(obj,"dummykey"));

//Write a function called “addProperty”.
//Input:
//removeProperty(obj, “mykey”);
//removeProperty(obj, “name”);
//Output:
//{myProperty: true}

var obj = {
 mykey: 'value'
};
function addProperty(obj, key){
	obj.key = 'Guvi'
	return obj
}
console.log(addProperty(obj, 'my'));

//Write a function called “removeProperty”.
//Input:
//removeProperty(obj, “name”);		//undefined

var obj = {
 mykey: 'value'
};
function removeProperty(obj, key){
	delete obj[key]
	return obj
}
console.log(removeProperty(obj, 'mykey'));

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
	var pcount=0,ncount=0
	var array=[]
	for(i=0;i<arr.length;i++)
	{
	if(arr[i] >= 0){
	pcount +=1;
	}	
	else{
	ncount +=1;
	}
	}
	array.push(pcount)
	array.push(ncount)
	console.log(array)
 }
 var res = ar2(arr)

//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
	var newar =[]
	for(i=0;i<arr.length;i++)
	{
	if(arr[i] >= 0){
	newar.push(arr[i]);
	}	
	}
	return newar
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
//Input:
//powersOfTwo(0)	//0
//powersOfTwo(1)	//2
//powersOfTwo(2)	//4

function powersOfTwo(n){
  var res = 2**n;
  return res;
}
console.log(powersOfTwo(2))

//Find the maximum number in an array of numbers


function findMax(ar)
{
var check = ar[0]
for(i=0;i<ar.length;i++)
{
if(check < ar[i])
{
check = ar[i]
}
}
return check
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(max);

//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
 var i=[],push=[]
 for(j=nPrimes;j<=startAt;j++)
 {
  i.push(j)
 }
 isPrime(i)
}
// Returns true if a number is prime
function isPrime(n)
{
 var c=0
 for(k=2;k<i;k++)
 {
 if(i/k == 0){
 c=1
 }
 }
if(c==0){
prime.push(i)
 }
 
//Reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return (s.split('').reverse().join(''))
}

//Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 
//Some piece of code goes here 
 return result;
}

//Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV(“1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9”));
function sumCSV(s)
{
  var sum=0
  for(var i in s)
  {
   sum += parseInt(a)
  }
}
