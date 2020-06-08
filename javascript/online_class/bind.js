let demoVar = {
name : "Guvi",
prop : {

    name : "Geek",
    getname : function(){
		return name;
	}
}

} 

let name = demoVar.prop.getname.bind(demoVar);
