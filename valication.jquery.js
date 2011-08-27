
/*
Valication for jQuery Ninjas
AMAURER
*/

;(function($){
	
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
		},
		currency : function(val){
			var re = /^-?\$?[0-9\,]+(\.\d{2})?$/;
			return re.test(val); 
		},
		usd : function(val){
			var re = /^\$?(\d{1,3},?(\d{3},?)*\d{3}(\.\d{0,2})?|\d{1,3}(\.\d{0,2})?|\.\d{1,2}?)$/;
			return re.test(val); 
		},
		url : function(val){
			var re = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
			return re.test(val);
		},
		date : function(val){
			var re = /^((0?\d)|(1[012]))\/([012]?\d|30|31)\/\d{1,4}$/;
			return re.test(val);
		},
		coldfusionUID : function(val){
			var re = /^(\{?([0-9a-fA-F]){8}-(([0-9a-fA-F]){4}-){3}([0-9a-fA-F]){12}\}?)$/;
			return re.test(val):
		},
		time12 : function(val){
			var re = /^[01]?\d:[0-5]\d?\s?[aApP]\.?[mM]\.?$/;
			return re.test(val);
		},
		time24 : function(val){
			var re = /^(20|21|22|23|[01]\d|\d)(([:][0-5]\d){1,2})$/;
			return re.test(val);
		}
	
	};

	$.valication = function(val, type){

		var lType = type.toLowerCase();
		if(typeof validation[lType] !== 'undefined'){
			return validation[lType](val.toString());
		} else {
			return Boolean(val.length);
		}

	};

})(jQuery);