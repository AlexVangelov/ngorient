var parser = require('./parser');
var GENERATORS = {
  scaffold: require('./scaffold'),
  model: require('./model'),
  migration: require('./migration')
}
var COMMANDS = {
  generate: 'generator',
  g: 'generator', 
  destroy: 'destroyer',
  d: 'destroyer'
}

module.exports = {
  run: function(argv) {
    var command = COMMANDS[argv[0]];
    if (!command) {
      console.error('Unknown command', argv[0]);
      process.exit(-1);
    }
    var generator = GENERATORS[argv[1]];
    if (generator) {
      var classObject = parser.parseClass(argv[2]);
      var classProperties = parser.parseProperties(argv.slice(3))
      return generator[command].run(classObject, classProperties);
    }
    console.error('Invalid command');
    process.exit(-1);
  }
};