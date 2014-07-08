var Q = require('q'),
  _ = require('underscore'),
  Parent = require('heinzelmannchen-generator'),
  Generator = Parent.inherit();

Generator.prototype.createData = function(jsonFilePath) {
  var q = Q.defer(),
    data = require(process.cwd() + '/' + this.config.json);
  if (this.filters) {
    data = _.filter(data, function(item) {
      return _.any(this.filters, function(filter) {
        var key = _.keys(filter)[0];
        return _.contains(filter[key], item[key]);
      }, this);
    }, this);
  }
  q.resolve(data);
  return q.promise;
};

Generator.explain = function() {
  return 'NOTHING EXPLAINED!';
};

Generator.help = function() {
  return 'NO HELP!';
};

module.exports = Generator;
