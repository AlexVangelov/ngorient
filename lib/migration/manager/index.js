var MigrationManager = require('orientjs/lib/migration/manager');
var upBuilder = require('./upBuilder');
var downBuilder = require('./downBuilder');

MigrationManager.prototype.generateMigration = function (config) {
  var content = '"use strict";\nexports.name = ' + JSON.stringify(config.name) + ';\n\n';
  content += 'exports.up = function (db) {\n'+upBuilder.build(this.classObject, this.classProperties)+'\n};\n\n';
  content += 'exports.down = function (db) {\n'+downBuilder.build(this.classObject)+'\n};\n\n';
  return content;
};

module.exports = MigrationManager;