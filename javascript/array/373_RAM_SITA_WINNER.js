const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0].split(" ");
    var b=n[1].split(' ');
    if(a[0]==2)
    {
        var e=n[2].split(' ');
    }
    var c=0;
    var d=0;
    if(a[0]==2)
    {
      for(i=0;i<a[1];i++)
    {
        if(e[i]==0)
        {
            c+=1; 
        }
        else if(e[i]==1)
        {
            d+=1;
        }
    }
    }
    for(i=0;i<a[1];i++)
    {
        if(b[i]==0)
        {
           c+=1; 
        }
        else if(b[i]==1)
        {
            d+=1;
        }
    }
    
    console.log("RAM:",c)
    console.log("SITA:",d)
});
