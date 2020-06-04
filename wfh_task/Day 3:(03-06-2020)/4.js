//4. Do the below programs in arrow functions
//4.1. Print odd numbers in an array

var array = [1,2,3,4,5,6]
var odd = array.filter ((t)=>
	 t =(t%2 !=0)
);
console.log(odd)

//4.2 Convert all the strings to title caps in a string array
var str = "durga devi deepi"
var demo = function titlecase(str) {
 //to convert this with titlecase
	str = str.split(' ');
for(i=0;i<str.length;i++){
	str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
}
return str.join(' ')
}
console.log(demo(str));

//4.3. Sum of all numbers in an array

var array = [1,2,3,4,5,6]
var sum = array.reduce((t1,t2)=>
	t=t1+t2
);
console.log(sum)

//4.4. Return all the prime numbers in an array

var array = [1,2,3,4,5,6]
var prime = array.filter((t)=>{
 for(i=2;i<t;i++){
 if(t%i == 0)
 {
 return false;
 }
 return t !==1;
 }
});
 console.log(prime)
 
 
//4.5. Return all the palindromes in an array

var array = ['sas','task','madam']
var palindrome = array.filter((t)=>{
  array2=t.split('').reverse().join('')
  if(t == array2)
  {
   return t
  }
  });
  console.log(palindrome)
