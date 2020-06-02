//2.2 Insert a new key called email and assign a value email1@gmail.com and
email2@gmail.com respectively in both authorDetails object;
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

library[0].authordetails.email="email1@gmail.com";
library[1].authordetails.email="email1@gmail.com";
console.log(library[0])
}
library();
