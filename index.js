var Q = require('q'),
  Parent = require('heinzelmannchen-generator'),
  Generator = Parent.inherit();

Generator.prototype.createData = function(jsonFilePath) {
  var q = Q.defer();
  q.resolve(require(this.config.json));
  return q.promise;
};

Generator.explain = function() {
  return 'NOTHING EXPLAINED!';
};

Generator.help = function() {
  return 'NO HELP!';
};

module.exports = Generator;
