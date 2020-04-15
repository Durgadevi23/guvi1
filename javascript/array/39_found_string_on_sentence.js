const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0].split(' ');
    var b=n[1];
    var d=0;
    
    for(i=0;i<a.length;i++)
    {
        if(b==a[i])
        {
            d+=1;
        }
    }
    if(d==0)
    {
        console.log("-1")
    }
    else
    {
   console.log(d)
    }
});
