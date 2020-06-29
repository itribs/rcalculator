const lexer = require('./interpreter/lexer')
const grammar = require('./interpreter/grammar')
const interpreter = require('./interpreter/interpreter')

let code = `
a=2
a+=a+1
`
let tokens = lexer.tokenize(code)
console.log(tokens.toString())
let node = grammar.treeRootNode(tokens)
node.dumpAST(node, '')
let result = interpreter.evaluate(node)
console.log(result)
//let result = interpreter.evaluateCode(code)
//console.log(result)