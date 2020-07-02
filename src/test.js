const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer').rcLexer
const rcParser = require('./interpreter/rcParser').rcParser
const myVisitor = require('./interpreter/myVisitor').myVisitor
const myErrorListener = require('./interpreter/myErrorListener').myErrorListener

let code = `a=1

a+1`
let input = new antlr4.InputStream(code.trim())
let lexer = new rcLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new rcParser(tokens)
let listener = new myErrorListener()
lexer.addErrorListener(listener)
parser.addErrorListener(listener)
let tree = parser.expressions()
let visitor = new myVisitor()

console.log(tree.accept(visitor))
1
