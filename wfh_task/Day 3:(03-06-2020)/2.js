//2. Do the below programs in anonymous function
//2.1. Print odd numbers in an array

var array = [1,2,3,4,5,6]
var odd = array.filter (function(t){
	return(t%2 !=0)
});
console.log(odd)

//2.2 Convert all the strings to title caps in a string array
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


//2.3. Sum of all numbers in an array

var array = [1,2,3,4,5,6]
var sum = array.reduce(function(t1,t2){
	return t1+t2
});
console.log(sum)

//2.4. Return all the prime numbers in an array

var array = [1,2,3,4,5,6]
var prime = array.filter(function(t){
 if(t>1){
 var inc=0
 for(i=2;i<t;i++){
 if(t%i == 0)
 {
 inc = 1
 }
 }
 }
 if(inc==0)
 {
 return t
 }
 })
 console.log(prime)
 
//2.5. Return all the palindromes in an array

var array = ['sas','task','madam']
var palindrome = array.filter(function(t){
  array2=t.split('').reverse().join('')
  if(t == array2)
  {
  return t
  }
  });
  console.log(palindrome)
 
//2.6 Return median of two sorted arrays of same size

var array = [


//2.7. Remove duplicates from an array
var array = [1,2,5,4,5]
var duplicate = function(array){
    var a=[...new Set(array)];
    return a;
}
console.log(duplicate(array));
 
//2.8. Rotate an array by k times and return the rotated array
var array = [1,2,3,4,5],k=3
var rotate = function(array,k){
	for(var i=0;i<k;i++){
	var res = array.shift();
	array.push(res);
	}
	return array;
	}
console.log(rotate(array,k))
