const antlr4 = require("antlr4/index");
const rcParser = require("./rcParser");

function myParser (input) {
    antlr4.Parser.call(this, input);
}

myParser.prototype = Object.create(antlr4.Parser.prototype);

module.exports.myParser = myParser