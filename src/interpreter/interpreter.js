const Node = require('./node')
const lexer = require('./lexer')
const grammar = require('./grammar')

let variables = {}

function evaluate (node) {
    let result = 0
    let children = node.getChildren()
    switch (node.type) {
        case Node.type.Programm:
            let list = node.getChildren()
            result = []
            for (let i = 0; i < list.length; i++) {
                result.push(evaluate(list[i]))
            }
            variables = {}
            break
        case Node.type.Assignment:
            var variableName = children[0].text
            var expressionValue = evaluate(children[1])
            variables[variableName] = expressionValue
            result = expressionValue
            break
        case Node.type.Multiplicative:
            var leftValue = evaluate(children[0])
            var rightValue = evaluate(children[1])
            if (node.text == '*') {
                result = leftValue * rightValue
            } else if (node.text == '/') {
                result = leftValue / rightValue
            } else {
                result = leftValue % rightValue
            }
            break
        case Node.type.Additive:
            var leftValue = evaluate(children[0])
            var rightValue = evaluate(children[1])
            if (node.text == '+') {
                result = leftValue + rightValue
            } else {
                result = leftValue - rightValue
            }
            break
        case Node.type.Identifier:
            result = variables[node.text]
            if (!result) {
                result = ''
            }
            break
        case Node.type.IntLiteral:
            result = parseInt(node.text)
            break
        case Node.type.FloatLiteral:
            result = parseFloat(node.text)
            break
        case Node.type.Blank:
            result = ''
            break
    }
    return result
}


function evaluateCode (code) {
    let result = {}
    try {
        let tokens = lexer.tokenize(code)
        let node = grammar.treeRootNode(tokens)
        let value = evaluate(node)
        result.value = value
    } catch (e) {
        result.error = e
    }
    return result
}

module.exports = {
    evaluate,
    evaluateCode
}