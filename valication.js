


;(function($){
	
	$.fn.valication = function(val, type){
		/*
		switch(type.toLowerCase()){
			case 'phone' :
				break;
			case 'email' :
				break;
			default :
				/* Check length *
				return Boolean(val.length);
		}
		*/
		var lType = type.toLowerCase();
		if(typeof valication[lType] !== 'undefined'){
			return validation[lType](val.toString());
		} else {
			return Boolean(val.length);
		}

	}

	var validation = {
		email : function(val){ 
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(val); //test
		},
		phone : function(val){ 
			var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
			return re.test(val); 
		},
		float : function(val){
			return (isNaN(parseFloat(value)));
		},
		int : function(val){
			return (parseInt(value) !== value);
		},
		integer : function(val){
			return validation.int(val);
		}

	}

})(jQuery);