//Problem 0 : Part A (15 mins):
//Playing with JSON object’s Values:

var cat = {
 "name": "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
//Add height and weight to Fluffy
cat.height = "5m"
cat.weight = "50kg"

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy"

//List all the activities of Fluffyy’s catFriends.
var allactivity=[]
for(var i in cat.catFriends)
{
allactivity.push(cat.catFriends[i].activities)
}
console.log(allactivity)

//Print the catFriends names.
var catFriendsName=[]
for(var i in cat.catFriends)
{
catFriendsName.push(cat.catFriends[i].name)
}
console.log(catFriendsName)


//Print the total weight of catFriends
var totalweight=0
for(var i in cat.catFriends)
{
 totalweight += (cat.catFriends[i].weight)
}
console.log(totalweight);
//console.log(cat);

//List all the activities of Fluffyy’s catFriends.

//Print the total activities of all cats (op:6)
var totalactivities = 0
for(var j in cat.catFriends){
 totalactivities += cat.catFriends[i].activities.length
 }
 totalactivities += cat.activities.length
 console.log(totalactivities)
 
 //Add 2 more activities to bar & foo cats
 cat.catFriends[0].activities[2]="play"
 cat.catFriends[0].activities[3]="dance"
 cat.catFriends[1].activities[2]="play"
 cat.catFriends[1].activities[3]="dance"
 console.log(cat.catFriends[0].activities)
 
//Update the fur color of bar
 var updatecolor =cat.catFriends[0].furcolor ="pink"
 console.log(cat.catFriends[0].furcolor)
 
 //Problem 0 : Part B (15 mins):
var myCar = {
 make: "Bugatti",
 model: "Bugatti La Voiture Noire",
 year: 2019,
 accidents: [
 {
 date: "3/15/2019",
 damage_points: "5000",
 atFaultForAccident: true
 },
 {
 date: "7/4/2022",
 damage_points: "2200",
 atFaultForAccident: true
 },
 {
 date: "6/22/2021",
 damage_points: "7900",
 atFaultForAccident: true
 }
 ]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.

//Updating atFaultForAccident to false
for(var i in myCar.accidents){
var update = myCar.accidents[i].atFaultForAccident ="false"
}
//console the output
console.log(myCar.accidents[0].atFaultForAccident)

//2. Print the dated of my accidents
//declaring empty array
accidentdate=[]
for(var i in myCar.accidents){
	//push all accident date into accidentdate array
	accidentdate.push(myCar.accidents[i].date)
}
console.log(accidentdate)

//Real challenges starts here
//:bowtie:
//Problem 1 (5 mins):

//Parsing an JSON object’s Values:

//Write a function called “printAllValues” which returns an newArray of all the input object’s values.



var obj = {"name" : "RajiniKanth", "age" : 33, hasPets : false};
//function declaration
function printAllKeys(obj) {
	//declaring empty array
    var objkey=[]
  //iterating values from the object   
 for(var i in obj)
 {
     var testkey=i;
     var testvalue=obj[i]
	 //stores all key as empty array
     objkey.push(testvalue);
     
 }
 console.log(objkey)
}
printAllKeys(obj);


//Problem 2 (5 mins):

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj = {"name" : "RajiniKanth", "age" : 33, hasPets : false};
//function declaration
function printAllKeys(obj) {
	//declaring empty array
    var objval=[]
  //iterating values from the object   
 for(var i in obj)
 {
     var testkey=i;
     var testvalue=obj[i]
	 //stores all value as empty array
     objval.push(testkey);
     
 }
 console.log(objval)
}
printAllKeys(obj);


//Problem 3( 7–9 mins):

//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.

var obj = ["GUVI", "I", "am", "Geek"]
//function declaration
function convertListToObject(obj) {
	var array=[]
	var object=[]
 for(var i in obj)
 {
	//to get first and last element
	if(i==0 || i==(obj.length)-1){
     var testvalue=obj[i]
	 //stores all value and key as array in empty array
     array.push(testvalue);
	 }
  }
  object[array[0]]=array[1]
 console.log(object)
}
convertListToObject(obj);


//Problem 5 ( 7 -9 mins):

//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.


//Problem 5 ( 7 -9 mins):
//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
//function declaration
function fromListToObject(arr) {
 var newObject = {};
 //iterate and convert the list to json
 for(var i=0;i<arr.length;i++)
 {
    newObject[arr[i][0]]=arr[i][1] 
 }
 return newObject;
}
console.log(fromListToObject(arr))


//Problem 6 (10 mins):
//Write a function called “transformGeekData” that transforms some set of data from one format to another.
var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(var i=0;i<arr.length;i++)
{
var obj={};
for(var j=0;j<arr[i].length;j++)
{
//iterating each sub array into individual array
 obj[arr[i][j][0]]=arr[i][j][1];
}
tranformEmployeeList.push(obj)
 }
 //console.log(obj)
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr))

//Problem 7 (10 — 20 mins):
//Write an “assertObjectsEqual” function from scratch.Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

var expected = {foo: 5, bar: 6};
var actual = {foo: 4, bar: 6}
function assertObjectsEqual(actual, expected, testName){
var c=0
 for(var i in expected){
 //checking whether expected is same as actual
 if(expected[i]!=actual[i])
 {
   c=1
 }
}
if(c==0)
{
//if yes print passed
console.log("passed")
}
else{
console.log("FAILED[my test] Expected",expected,"but got",actual)
}
}
//function calling
assertObjectsEqual(actual, expected, 'detects that two objects are equal');


//Problem 8(10 mins):

//I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer

var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"
 },
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"
 }
]
function chksecurityQuestions(securityQuestions,question,answer) {
for(var i in securityQuestions){
	//To check whether security Questions and answer are same or not 
	if(securityQuestions[i].question==ques && securityQuestions[i].answer==ans)
	{
	//if yes print true
	return true
	}
	else{
	return false
	}
	}
}
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status)

//Problem 9(20 mins):

//Write a function to return the list of characters below 20 age

var students = [
 {
 name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
 {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
 {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
 {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
 {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
 {name: "Devdas",age: 56} 
 ];
 
 function returnMinnors(arr)
 {
 var age=[]
 for( var i=0;i<students.length;i++){
 //condition to check age is below 20 or not
 if(students[i].age<20)
 {
 age.push(students[i].age)
 }
 }
 return age
 }
 console.log(returnMinnors(students))
 



