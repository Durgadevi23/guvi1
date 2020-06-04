//3. Write a callback which is called
//3.1. if the give number is even

function demoFun(a,even){
if(a%2 ==0){
even()
}
}
function even(){
console.log("Even")
}
demoFun(4,even)

//3.2. if the given number is prime

function demoFun(a,prime){
var c=0
for(var i=2;i<a;i++){
if(a%i ==0){
c=1
break;
}
}
if(c==0)
{
prime()
}
}
function prime(){
console.log("prime")
}
demoFun(4,prime)
console.log("no")

//3.3. if the number is palindrome

function demoFun(a,palindrome){
var b=a.split('').reverse().join('')
if(b == a){
palindrome()
}
}
function palindrome(){
console.log("palindrome")
}
demoFun('madam',palindrome)

