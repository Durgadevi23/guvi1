let demoObj = {

name : "Banu Prakash",
age : "45",
demoFun : function(name){
  console.log(this.name)
}

}

demoObj.demoFun()
