const rcLexer = require('./rcLexer').rcLexer

function myLexer (input) {
    rcLexer.call(this, input)
    return this
}

myLexer.prototype = Object.create(rcLexer.prototype)
myLexer.prototype.constructor = myLexer

myLexer.prototype.notifyListeners = function (e) {
    var start = this._tokenStartCharIndex
    var stop = this._input.index
    var text = this._input.getText(start, stop)
    var msg = "未识别字符: '" + this.getErrorDisplay(text) + "'"
    var listener = this.getErrorListenerDispatch()
    listener.syntaxError(this, null, this._tokenStartLine,
        this._tokenStartColumn, msg, e)
}

exports.myLexer = myLexer