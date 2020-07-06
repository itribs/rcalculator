const antlr4 = require('antlr4/index')
const myLexer = require('./interpreter/myLexer').myLexer
const myParser = require('./interpreter/myParser').myParser
const myVisitor = require('./interpreter/myVisitor').myVisitor
const myErrorListener = require('./interpreter/myErrorListener').myErrorListener

let code = `
#now# + 5
`
let input = new antlr4.InputStream(code)
let lexer = new myLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new myParser(tokens)
let listener = new myErrorListener()
lexer.removeErrorListeners()
parser.removeErrorListeners()
lexer.addErrorListener(listener)
parser.addErrorListener(listener)
let tree = parser.prog()
let visitor = new myVisitor()
console.log(tree.accept(visitor))
console.log(tree.toStringTree(null, parser))
