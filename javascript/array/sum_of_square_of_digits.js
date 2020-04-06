const readline = require('readline');
const inp = readline.createInterface({input:process.stdin});
inp.on("line", (data) => {
    sum=0;
    for(i=0;i<data.length;i++)
    {
        a=data[i]**2;
        sum+=a;
    }
    console.log(sum)
   
});
