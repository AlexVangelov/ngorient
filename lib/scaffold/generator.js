var model = require('../model');

module.exports = {
  run: function(object, params) {
    console.log('generate scaffold', object, params);
    return model.generator.run(object, params);
  }
};