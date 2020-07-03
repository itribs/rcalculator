const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer').rcLexer
const rcParser = require('./interpreter/rcParser').rcParser
const myVisitor = require('./interpreter/myVisitor').myVisitor
const myErrorListener = require('./interpreter/myErrorListener').myErrorListener

let code = `
1
#2012-12-17# + 2y
`
let input = new antlr4.InputStream(code)
let lexer = new rcLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new rcParser(tokens)
let listener = new myErrorListener()
lexer.removeErrorListeners()
parser.removeErrorListeners()
lexer.addErrorListener(listener)
parser.addErrorListener(listener)
let tree = parser.prog()
let visitor = new myVisitor()
console.log(tree.accept(visitor))
console.log(tree.toStringTree())
