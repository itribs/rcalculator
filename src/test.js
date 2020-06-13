const lexer = require('./interpreter/lexer')
const grammar = require('./interpreter/grammar')
const interpreter = require('./interpreter/interpreter')

let code = `
a
`
//let tokens = lexer.tokenize(code)
//console.log(tokens.toString())
//let node = grammar.treeRootNode(tokens)
//node.dumpAST(node, '')
//let result = interpreter.evaluate(node)
//console.log(result)
let result = interpreter.evaluateCode('a=2\nb=a')
console.log(result)
result = interpreter.evaluateCode('a')
console.log(result)