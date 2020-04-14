const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0].split(' ');
    var b=n[1].split(' ');
    var c=n[2];
    var d=0;
    for(i=0;i<b.length;i++)
    {
       if(b[i]==c)
       {
           d=1;
       }
    }
    if(d==0)
    {
        console.log("no")
    }
    else{
        console.log("yes")
    }
});
