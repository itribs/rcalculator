const antlr4 = require('antlr4/index')
const RcLexer = require('./interpreter/lexer/rcLexer')

let code = `
a=2_22_2
2+3
`
var input = new antlr4.InputStream(code)
var rcLexer = new RcLexer.rcLexer(input)
var tokens = new antlr4.CommonTokenStream(rcLexer)