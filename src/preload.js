const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer').rcLexer
const rcParser = require('./interpreter/rcParser').rcParser
const myVisitor = require('./interpreter/myVisitor').myVisitor
const myErrorListener = require('./interpreter/myErrorListener').myErrorListener

window.evaluateCode = function (code) {
    let oldCode = utools.db.get("code")
    let data = {
        _id: "code",
        data: code
    }
    if (oldCode) {
        data._rev = oldCode._rev
    }
    utools.db.put(data)

    let input = new antlr4.InputStream(code)
    let lexer = new rcLexer(input)
    let tokens = new antlr4.CommonTokenStream(lexer)
    let parser = new rcParser(tokens)
    let listener = new myErrorListener()

    lexer.removeErrorListeners()
    parser.removeErrorListeners()
    lexer.addErrorListener(listener)
    parser.addErrorListener(listener)

    let result = {
        value: []
    }
    let tree = parser.prog()
    let visitor = new myVisitor()
    result.value = tree.accept(visitor).join('\n')
    if (listener.errors.length > 0) {
        result.error = listener.errors.join('\n')
    }
    return result
}

window.saveClipboard = function (text) {
    utools.copyText(text)
}