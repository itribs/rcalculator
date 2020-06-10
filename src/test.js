let lexer = require('./interpreter/lexer')

let code = `
cos(2+1)
dd = 1+1*2/(21-21)+&^@!#%@2/3
cc = 732% 2
`
console.log(lexer.tokenize(code).toString())