let lexer = require('./interpreter/lexer')

window.lexer = function (code) {
    return lexer.tokenize(code)
}