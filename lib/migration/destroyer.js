module.exports = {
  run: function(object, params) {
    var migrationName = "create"+object.name;
    console.log('destroy migration '+migrationName, object, params);
  }
};