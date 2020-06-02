//2.4 Create a New Object in the library for a new Book called SQL.

function newobject(){

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

library[2].newbook={
New book : "SQL"
}
console.log(library[1])
}
newobject();
