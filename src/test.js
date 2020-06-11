let lexer = require('./interpreter/lexer')
let grammar = require('./interpreter/grammar')

let code = `
cc = 732% 2+33

2+1*2.2`
let tokens = lexer.tokenize(code)
console.log(tokens.toString())
let node = grammar.treeRootNode(tokens)
node.dumpAST(node, '')