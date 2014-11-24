// test spec
describe("Sample Jasmine Spec based on arrays", function() {

	var arr = new test();

	// setup
	beforeEach(function() {
		console.log(arr.data());
	});

	// teardown
	afterEach(function() {
		console.log(arr.data());
	});

	it("get item from array", function() {

		//var arr = new test();
		arr.add("hello");
		arr.add("salut");
		arr.add("bonjour");
		var result = arr.get(1);

		expect(result).toEqual("salut");

	});

	it("popped item from array", function() {

		var arr = new test();
		arr.add("test");
		arr.add("hello");
		arr.add("funky");
		var result = arr.pop();

		expect(result).toEqual("funky");

	});

	it("add item to array", function() {

		var arr = new test();
		var result = arr.add("hi");

		expect(result).toEqual(true);

	});

});

describe("test ajax call with mock-ajax", function() {

	beforeEach(function() {
		jasmine.Ajax.install();
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
	});

	it("specifies responseText", function() {
		
		var doneFn = jasmine.createSpy("success");

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function (args) {
			if (this.readyState == this.DONE) {
				doneFn(this.responseText);
			}
		};

		xhr.open("GET", "/api/test");
		xhr.send();

		expect(jasmine.Ajax.requests.mostRecent().url).toBe("/api/test");
		expect(doneFn).not.toHaveBeenCalled();

		jasmine.Ajax.requests.mostRecent().response({

        "status": 200,
        "contentType": 'text/plain',
        "responseText": 'test test'

      	});

      	expect(doneFn).toHaveBeenCalledWith('test test');

	});

	it("can read status codes", function() {

		var doneFn = jasmine.createSpy("success");

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function (args) {
			if (this.readyState == this.DONE) {
				doneFn(this.status);
			}
		};

		xhr.open("GET", "/api/test");
		xhr.send();

		expect(jasmine.Ajax.requests.mostRecent().url).toBe("/api/test");
		expect(doneFn).not.toHaveBeenCalled();

		jasmine.Ajax.requests.mostRecent().response({

        "status": 403,
        "contentType": 'text/plain',
        "responseText": 'Not authorized'

      	});

      	expect(doneFn).toHaveBeenCalledWith(403);

	});



});