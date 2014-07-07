var Generator = require('..'),
  chai = require('chai'),
  chaiAsPromised = require("chai-as-promised"),
  should = chai.Should();

chai.use(chaiAsPromised);
describe('Generator', function() {
  it('should return a array', function() {
    var generator = new Generator();
    generator.setConfig({
      json: './test/mocked.json'
    });

    return generator.createData().should.eventually.become([{
      table: "one"
    }, {
      table: "two"
    }]);
  });
  it('should return a filtered array', function() {
    var generator = new Generator();
    generator.setConfig({
      json: './test/mocked.json'
    });

    generator.setFilters([{
      table: ['one']
    }]);

    return generator.createData().should.eventually.become([{
      table: "one"
    }]);
  });
});
