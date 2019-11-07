'use strict';

(function() {
  var parsePromised, promise;

  parsePromised = function(json) {
    return new Promise(function(fulfill, reject) {
      var e, error;
      try {
        return fulfill(JSON.parse(json));
      } catch (error) {
        e = error;
        return reject(e);
      }
    });
  };

  promise = parsePromised(process.argv[2]);

  promise.then(null, console.log);

}).call(this);