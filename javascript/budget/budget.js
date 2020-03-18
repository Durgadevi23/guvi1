function add()
{
 var total=document.getElementById("mybudget").value;
    console.log(total);
   document.getElementById("b").innerHTML="$"+total;

}
function newElement()
{
var li = document.createElement("li");
var product = document.getElementById("t").value;
console.log(product);
var t1= document.createTextNode(product);
li.appendChild(t1);

if (product === '') {
  alert("You must write something!");
} else {
  document.getElementById("myUL").appendChild(li);
}
var li = document.createElement("li");
var productprice = document.getElementById("price").value;
console.log(productprice);
var t2= document.createTextNode(productprice);
li.appendChild(t2);

if (productprice === '') {
  alert("You must write something!");
} else {
  document.getElementById("myUL2").appendChild(li);
}
var sum=0;
for(var  i=0;i<li.length;i++)
{
 sum+=productprice;
 console.log(sum);
}

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

/*for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var r = this.parentElement;
    r.;
  }
}*/
}
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
  console.log("Delete Task...");

  var listItem=this.parentNode;
  var ul=listItem.parentNode;
  //Remove the parent list item from the ul.
  ul.removeChild(listItem);

}
}
