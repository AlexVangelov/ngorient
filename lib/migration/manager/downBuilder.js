var ejs = require('ejs');
var fs = require('fs');

module.exports = {
  build: function(object) {
    return ejs.render(fs.readFileSync(__dirname + '/templates/dropClass.ejs', 'UTF-8'), {
      object: object
    });
  }
}