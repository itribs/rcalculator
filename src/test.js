const lexer = require('./interpreter/lexer')
const grammar = require('./interpreter/grammar')
const interpreter = require('./interpreter/interpreter')

let code = `
1-2--3+-4
`
let tokens = lexer.tokenize(code)
console.log(tokens.toString())
let node = grammar.treeRootNode(tokens)
node.dumpAST(node, '')
//let result = interpreter.evaluate(node)
//console.log(result)
let result = interpreter.evaluateCode(code)
console.log(result)