const lexer = require('./interpreter/lexer')
const grammar = require('./interpreter/grammar')
const interpreter = require('./interpreter/interpreter')

let code = `
a=bin(123)
0x21
`
let tokens = lexer.tokenize(code)
console.log(tokens.toString())
let node = grammar.treeRootNode(tokens)
node.dumpAST(node, '')
let result = interpreter.evaluate(node)
console.log(result)
//let result = interpreter.evaluateCode(code)
//console.log(result)