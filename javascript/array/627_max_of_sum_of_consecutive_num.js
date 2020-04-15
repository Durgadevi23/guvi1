const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0];
    var b=n[1].split(' ');
    var c=[];
    for(i=0;i<a;i++)
    {
        var d=parseInt(b[i])+parseInt(b[i+1]);
        c.push(d);
    }
    c.sort(function(a,b){
        return a-b;
    });
    console.log(c[a-2]);
});
