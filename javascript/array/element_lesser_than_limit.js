const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0].split(' ');
    var b=n[1].split(' ');
    var d=[];
    for(i=0;i<a[0];i++)
   {
    if(b[i]<a[1])
    {
        d.push(b[i])
    }
   }
   d.sort();
   if(d.length==0)
   {
       console.log('-1')
   }
   else
   {
   console.log(d.join(' '));
   }
});

