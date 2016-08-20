var ejs = require('ejs');
var fs = require('fs');

module.exports = {
  build: function(object, params) {
    // var classDeclaration = "'"+object.name+"'";
    // if (object.superClass) {
    //   classDeclaration += ", '"+object.superClass+"'";
    // }
    // var result = "return db.class.create("+classDeclaration+")";
    // if (Object.keys(params).length > 0) {
    //   var propertiesDeclaration = "    return object.property.create([";
    //   propertiesDeclaration = propertiesDeclaration + "\n    ]);"
    //   result = result+".then(function(object){\n"+propertiesDeclaration+"\n  })";
    // }
    // return result+';';
    return ejs.render(fs.readFileSync(__dirname + '/templates/createClass.ejs', 'UTF-8'), {
      object: object,
      params: params
    });
  }
}