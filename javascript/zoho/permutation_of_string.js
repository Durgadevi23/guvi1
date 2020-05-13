const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var u=[];
inp.on("line",(data)=>{
  u.push(data);
});
inp.on("close",()=>{
    var a=u[0];
    function permt(s) {
  if (s.length < 2)
    return s;
var permutations = [];
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
 if (s.indexOf(char) != i)
      continue;
var remaining = s.slice(0, i) + s.slice(i + 1,s.length); 
    for (var Permutation of permt(remaining))
      permutations.push(char + Permutation);
  }
  return permutations;
}
var b=[];
b=permt(a);
for(var i=0;i<b.length;i++)
{
    console.log(b[i]);
}
});
