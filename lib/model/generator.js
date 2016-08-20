var migration = require('../migration');

module.exports = {
  run: function(object, params) {
    console.log('generate model', object, params);
    migration.generator.run(object, params);
  }
};