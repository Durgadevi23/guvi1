const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const n=[];
inp.on("line", (data) => {
    n.push(data);});
inp.on("close",(data)=>{
    var a=n[0],b=n[1];
    var count=0;
   var c=a.split(' ');
   var d=b.split(' ');
   
   for(i=0;i<=c.length;i++){
       if(d[i]==c[1])
       {
           count+=1;
       }
   }
   if(count!=0){
       console.log(count-1)
   }
   else{
       console.log("-1")
   }
});
