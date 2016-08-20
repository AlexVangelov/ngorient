module.exports = {
  build: function(object, params) {
    return "  return db.class.drop('"+object.name+"');";
  }
}