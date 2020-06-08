let demoObj = [
{name: "Banu Prakash",
age: "45"},
{name: "Banu",
age: "41"},
{name: "demo",
age: "6"},
{name: "ddemo1",
age: "34"},
{name: "ddemo2",
age: "23"},
{name: "ddemo3",
age: "21"}
]

//using for loop
 newArray = []
 for(let i = 0; i<demoObj.length;i++){
  if(demoObj[i].age>30){
     newArray.push(demoObj[i])
   }
  }

//anonymous function
let newArray = demoObj.map( function (t){
return t.age*10;
})
