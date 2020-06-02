//2.8. Print how many readers for javascript in console.

function readercount(){

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

var rcount = 0;
  for (var c in library[0].readers) {
    rcount = rcount + 1;
    }
console.log(rcount)
}
readercount();
