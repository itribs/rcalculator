const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer')
const rcParser = require('./interpreter/rcParser')
const rcVisitor = require('./interpreter/rcVisitor')

let code = `
a=2_22_2
a+3
`
let input = new antlr4.InputStream(code)
let lexer = new rcLexer.rcLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new rcParser.rcParser(tokens)
console.log(parser)