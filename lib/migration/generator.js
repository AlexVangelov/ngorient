var Manager = require('./manager');
module.exports = {
  run: function(object, params) {
    var migrationName = "create"+object.name;
    console.log('generate migration '+migrationName, object, params);
    var manager = new Manager({ dir: process.cwd()+'/migrations' });
    manager.classObject = object;
    manager.classProperties = params;
    return manager.create(migrationName).then(function(migration) {
      console.log("Migration: ", migration);
    });
  }
};