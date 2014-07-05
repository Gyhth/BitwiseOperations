$(function() {
    var bitwiseOperator = new bitwiseOperationsClass();
	$("body").append(bitwiseOperator.calculate(5, "and", 6));
	$("body").append("<br />");
	$("body").append(bitwiseOperator.calculate(5, "or", 6));
	$("body").append("<br />");
	$("body").append(bitwiseOperator.calculate(5, "xor", 6));
	$("body").append("<br />");
	$("body").append(bitwiseOperator.calculate(5, "not", 6));
	$("body").append("<br />");
	$("body").append(bitwiseOperator.calculate(5, "left_shift", 6));
	$("body").append("<br />");
	$("body").append(bitwiseOperator.calculate(5, "right_shift", 6));
	$("body").append("<br />");
	try {
	$("body").append(bitwiseOperator.calculate(5, "right_shift"));
	$("body").append("<br />");
	}
	catch (e) {
		console.log(e.toString());
	}
});

var bitwiseOperationsClass = function(){};

bitwiseOperationsClass.prototype = {
	message: "",
	
	calculate: function(firstValue, operation, secondValue) {
		this.message = "";
		var operationLower = operation.toLowerCase();
		switch (operationLower) {
			case "and":
				if (firstValue === undefined) {
					this.error(1)
				}
				else if (secondValue === undefined) {
					this.error(2);
				}
				return this.and(firstValue, secondValue);
				break;
			case "or":
				if (firstValue === undefined) {
					this.error(1)
				}
				else if (secondValue === undefined) {
					this.error(2);
				}
				return this.or(firstValue, secondValue);
				break;
			case "xor":
				if (firstValue === undefined) {
					this.error(1)
				}
				else if (secondValue === undefined) {
					this.error(2);
				}
				return this.xor(firstValue, secondValue);
				break;
			case "not":
				if (secondValue !== undefined) {
					console.log("Second value is unused in not operations. Ignoring passed parameter.");
				}
				return this.not(firstValue, secondValue);
				break;
			case "left_shift":
				if (firstValue === undefined) {
					this.error(1)
				}
				else if (secondValue === undefined) {
					this.error(2);
				}
				return this.left_shift(firstValue, secondValue);
				break;
			case "right_shift":
				if (firstValue === undefined) {
					this.error(1)
				}
				else if (secondValue === undefined) {
					this.error(2);
				}
				return this.right_shift(firstValue, secondValue);
				break;
			default:
				throw "Error: Invalid operation."
				break;
		}
    },

	and: function(firstValue, secondValue) {
		return firstValue & secondValue;
	},
	
	or: function(firstValue, secondValue) {
		return firstValue | secondValue;
	},
	
	xor: function(firstValue, secondValue) {
		return firstValue ^ secondValue;	
	},
	
	not: function(firstValue) {
		return ~firstValue;  
	},
	
	left_shift: function(firstValue, secondValue) {
		return firstValue << secondValue;
	},
	
	right_shift: function(firstValue, secondValue) {
		return firstValue >> secondValue;
	},
	
	error: function(value) {
		if (value === 1) {
			this.message = "First parameter not passed.";
			throw new this.syntaxError(value, message);
			
		}
		else if (value === 2) {
			this.message = "Second parameter not passed";
			throw new this.syntaxError(value, this.message);
		}	
	},
	
	syntaxError: function(value, message) {
		this.value = value;
		this.message = message;
		this.toString = function () {
			return this.value + " " + this.message;
		}
	}
};

