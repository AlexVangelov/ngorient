var ejs = require('ejs');
var fs = require('fs');

module.exports = {
  build: function(object, params) {
    return ejs.render(fs.readFileSync(__dirname + '/templates/createClass.ejs', 'UTF-8'), {
      object: object,
      params: params
    });
  }
}