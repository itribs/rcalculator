const antlr4 = require('antlr4/index')

function myErrorListener () {
    antlr4.error.ErrorListener.call(this)
    this.errors = []
    return this
}

myErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
myErrorListener.prototype.constructor = myErrorListener;

myErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {

    let errmsg = "行：" + line + "，列：" + column + "\nerror：" + msg
    errmsg += "\n--------------------------------"
    console.warn(errmsg)
    this.errors.push(errmsg)
}

exports.myErrorListener = myErrorListener