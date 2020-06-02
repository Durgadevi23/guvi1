//2.5 Find the datatype of author age in Nodejs Object

function findage(){

var library = [
{
	title : "javascript",
	price : 500,
	readers : [
		{
			name : "Person 1",
			count : 300
		},
		{
			name : "Person 2",
			count : 400
		}
		],
		authordetails : {
			name : "Raj",
			age : 40
			}
		},
		{
			title : "Nodejs",
			price : 600,
			readers : [],
			authordetails : {
				name : "Raj",
				age : 40
			}
		}
	]

var age=library[1].authordetails.age
console.log(typeof(age))
}
findage();
