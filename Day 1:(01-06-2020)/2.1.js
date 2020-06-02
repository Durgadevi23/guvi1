//2.1 Update the count of Person 2 inside readers Array in Javascript;
function library(){

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

library[0].readers[1].count=500;
console.log(library[0])
}
library();
