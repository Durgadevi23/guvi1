const readline=require('readline');
const imp=readline.createInterface({input:process.stdin});
var userInput=[];
imp.on("line",(data)=>{
  userInput.push(data);
});
imp.on("close",()=>{
  var c=[];
  var b=userInput[0];
  var a=userInput[1].split(" ");
  for(var i=(b-1);i>=0;i--)
  {
     c.push(a[i]);
  }
  
  console.log(c.join(" "));
});
