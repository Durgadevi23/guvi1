const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0].split(' ');
    var b=n[1].split(' ');
    var c=n[1]+' '+n[1];
    var e=c.split(' ');
    var d=[];
    var f=parseInt(a[0])+parseInt(a[1])
    for(i=(a[1]-1);i<(f-1);i++)
   {
    d.push(e[i])
   }
   console.log(d.join(' '))
});
