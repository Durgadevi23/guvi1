const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0];
    var b=n[1].split(' ');
    sum=0;
    for(i=0;i<a;i++)
    {
        if(b[i]<0)
        {
            sum+=parseInt(b[i])
        }
    }
    console.log(sum)
   
});
