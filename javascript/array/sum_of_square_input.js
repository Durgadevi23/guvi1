const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
inp.on("line", (data) => {
var a=data.split(" ");
console.log(data);
console.log(a);
sum=0;
for(i=0;i<a.length;i++)
{
    var b =a[i]**2;
    sum=parseInt(sum)+parseInt(b);
}
console.log(sum)
});
