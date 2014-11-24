//test.js
test = function() {

	data = new Array();

	this.add = function(value) {
		console.log("add: " + value);
		try {
			data.push(value);
			return true;
		} catch(ex) {
			return false;
		}
	};

	this.get = function(index) {
		console.log("get: " + data[index]);
		return data[index];
	}

	this.pop = function() {
		return data.pop();
	};

}