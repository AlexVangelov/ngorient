var model = require('../model');

module.exports = {
  run: function(object, params) {
    console.log('destroy scaffold', object, params);
    return model.destroyer.run(object, params);
  }
};