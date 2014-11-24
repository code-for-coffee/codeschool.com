// test spec
describe("Sample Jasmine Spec based on arrays", function() {

	it("get item from array", function() {

		var arr = new test();
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