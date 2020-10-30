const rcParser = require('./rcParser').rcParser
const myErrorStrategy = require('./myErrorStrategy').myErrorStrategy

function myParser (input) {
    rcParser.call(this, input)
    this._errHandler = new myErrorStrategy()
    return this
}

myParser.prototype = Object.create(rcParser.prototype)
myParser.prototype.constructor = myParser

exports.myParser = myParser