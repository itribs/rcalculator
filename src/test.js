const lexer = require('./interpreter/lexer')
const grammar = require('./interpreter/grammar')
const interpreter = require('./interpreter/interpreter')

let code = `
E
1+2*3/4%5+6/7
`
let tokens = lexer.tokenize(code)
console.log(tokens.toString())
let node = grammar.treeRootNode(tokens)
node.dumpAST(node, '')
let result = interpreter.evaluate(node)
console.log(result)
// result = interpreter.evaluateCode(code)
// console.log(result)