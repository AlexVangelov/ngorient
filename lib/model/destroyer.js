var migration = require('../migration');

module.exports = {
  run: function(object, params) {
    console.log('destroy model', object, params);
    migration.destroyer.run(object, params);
  }
};