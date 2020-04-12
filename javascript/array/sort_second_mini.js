const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0],d;
var b=n[1];
var s=b.split(" ")
s.sort(function(a,b){
  return a-b 
});
console.log(s)
});
