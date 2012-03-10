fl.outputPanel.clear();

var doc = fl.getDocumentDOM();
var typeToSearchFor = "instance"; 
var results = fl.findObjectInDocByType(typeToSearchFor, doc); 
for each (var g in results ){
	 var name1=g.layer.name.toString();
	 //mc name rule
   var patten = name1.match(/^mc[0-9]*$/);
if(patten){
	fl.trace("comp name:"+g.name);
	fl.trace("layer name:"+g.layer.name);
	if(!g.name){
		g.obj.name=g.layer.name;
		
	}
}
}

