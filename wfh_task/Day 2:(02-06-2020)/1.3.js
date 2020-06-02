<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>
var request = new XMLHttpRequest()
//Http request for getting API
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload = function(){
//converting data inform of json
var jsonData = JSON.parse(this.response)
for(var i in jsonData)
{
  //displaying country name, alphacode and population
  console.log("country name:",jsonData[i].name,"alpha3Code:" ,jsonData[i].alpha3Code,"population:",jsonData[i].population)
}
}
request.send()

</script>
</body>
</html>
