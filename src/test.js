const lexer = require('./interpreter/lexer')
const grammar = require('./interpreter/grammar')
const interpreter = require('./interpreter/interpreter')

let code = `
aa(1, 2, c)
`
let tokens = lexer.tokenize(code)
console.log(tokens.toString())
// let node = grammar.treeRootNode(tokens)
// node.dumpAST(node, '')
// let result = interpreter.evaluate(node)
// console.log(result)
// result = interpreter.evaluateCode(code)
// console.log(result)