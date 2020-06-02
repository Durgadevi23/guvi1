//2.3 Insert a new reader in the readers array for Nodejs.

function reader(){

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

library[1].readers={
person : "new reader"
}
console.log(library[1])
}
reader();
