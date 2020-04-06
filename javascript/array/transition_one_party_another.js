const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0];
    var b=n[1].split(' ');
    var d=[]
    var c=n[2].split(' ');
    var i=n[1].split(' ');
    var e=i.sort();
    for(i=0;i<a;i++)
    {
        for(j=0;j<a;j++)
        {
            if(e[i]==b[j])
            {
               d.push(c[j]);
            }
        }
    }
   for(i=0;i<a;i++)
   {
       if(d[i]!=d[i+1])
       {
        console.log(e[i+1])
        break;
       }
   }
 });
