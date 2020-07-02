const antlr4 = require('antlr4/index')
const rcLexer = require('./interpreter/rcLexer').rcLexer
const rcParser = require('./interpreter/rcParser').rcParser
const myVisitor = require('./interpreter/myVisitor').myVisitor
const myErrorListener = require('./interpreter/myErrorListener').myErrorListener

let code = `
a=$2+1
max(1,2
a+1`
let input = new antlr4.InputStream(code)
let lexer = new rcLexer(input)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new rcParser(tokens)
let listener = new myErrorListener()
lexer.removeErrorListeners()
lexer.addErrorListener(listener)
parser.removeErrorListeners()
parser.addErrorListener(listener)
let tree = parser.prog()
try {
    let visitor = new myVisitor()
    console.log(tree.accept(visitor))
    console.log(tree.toStringTree())
} catch {
}
