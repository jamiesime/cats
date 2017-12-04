var assert = require('assert');
var Cat = require("../public/cat.js");

describe("Cat", function(){
var newCat1;

  beforeEach(function(){
    newCat1 = new Cat("Cup", "Handlebars");
  });

  it('should have a name', function(){
    assert.strictEqual(newCat1.name, "Cup");
  });



});
