module.exports = {
  parseClass: function(arg) {
    var classObject = {};
    console.log('parser class', arg);
    var match = /^(\w+)(?:\[(\w+)\])?/.exec(arg);
    if (match) {
      classObject.name = match[1];
      if (match[2]) {
        classObject.superClass = match[2];
        return classObject;
      }
      return classObject;
    }
    console.error('Error parsing argument "'+arg+'" as Class object');
    process.exit(-1);
  },
  parseProperties: function(argv) {
    var properties = [];
    var errorProperties = [];
    console.log('parser Properties', argv);
    argv.forEach(function(arg) {
      var match = arg.match(/^(\w+)\:(\w+)(?:\[(\w+)\])?/);
      if (match) {
        var property = { name: match[1], type: match[2] };
        if (match[3]) {
          property.linkedClass = match[3];
        }
        properties.push(property);
      } else {
        errorProperties.push(argv);
      }
    });
    if (errorProperties.length > 0) {
      console.error('Invalid properties', errorProperties);
      process.exit(-1);
    }
    return properties;
  }
};