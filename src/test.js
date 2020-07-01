const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer')
const rcParser = require('./interpreter/rcParser')
const myVisitor = require('./interpreter/myVisitor')

let code = `
a=2_22_2`
let input = new antlr4.InputStream(code.trim())
let lexer = new rcLexer.rcLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new rcParser.rcParser(tokens)
let tree = parser.expressions()
let visitor = new myVisitor.myVisitor()
visitor.visit(tree)
