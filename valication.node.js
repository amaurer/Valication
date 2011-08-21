
/*
Valication for Node Ninjas
AMAURER
*/

	
exports.valication = function(val, type){

	var lType = type.toLowerCase();
	if(typeof validation[lType] !== 'undefined'){
		return validation[lType](val.toString());
	} else {
		return Boolean(val.length);
	};

};

var validation = {
	email : function(val){ 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(val);
	},
	phone : function(val){ 
		var re = /^\(?(\d{3})\)?[-,\. ]?(\d{3})[-,\. ]?(\d{4})$/;  
		return re.test(val); 
	},
	zip : function(val){ 
		var re = /^\d{5}$|^\d{5}-\d{4}$/;  
		return re.test(val); 
	},
	float : function(val){
		return (isNaN(parseFloat(val)));
	},
	int : function(val){
		return (parseInt(val) !== val);
	},
	integer : function(val){
		return validation.int(val);
	}

};
