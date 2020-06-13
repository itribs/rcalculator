const Node = require('./node')
const lexer = require('./lexer')
const grammar = require('./grammar')

let variables = {}
let defaultVariables = {
    E: Math.E,
    LN2: Math.LN2,
    LN10: Math.LN10,
    LOG2E: Math.LOG2E,
    LOG10E: Math.LOG10E,
    PI: Math.PI,
    SQRT1_2: Math.SQRT1_2,
    SQRT2: Math.SQRT2
}

function getVariable (name) {
    let vars = Object.assign(defaultVariables, variables);
    return vars[name]
}

function setVariable (name, value) {
    variables[name] = value
}

function freeVariables () {
    variables = {}
}

function excFunc (node) {
    let funcName = node.token.text
    let func = eval('Math.' + funcName)
    if (func && typeof func == 'function') {
        let children = node.getChildren()
        let args = []
        for (let i = 0; i < children.length; i++) {
            args.push(evaluate(children[i]))
        }
        return func.apply(null, args)
    } else {
        let e = new Error(`error:运行错误\n未知的函数:${funcName}\n行:${node.token.lineNumber}\n列:${node.token.startColumn}`)
        throw e
    }
}

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
            freeVariables()
            break
        case Node.type.Assignment:
            var variableName = children[0].token.text
            var expressionValue = evaluate(children[1])
            setVariable(variableName, expressionValue)
            result = expressionValue
            break
        case Node.type.Multiplicative:
            var leftValue = evaluate(children[0])
            var rightValue = evaluate(children[1])
            if (node.token.text == '*') {
                result = leftValue * rightValue
            } else if (node.token.text == '/') {
                result = leftValue / rightValue
            } else {
                result = leftValue % rightValue
            }
            break
        case Node.type.Additive:
            var leftValue = evaluate(children[0])
            var rightValue = evaluate(children[1])
            if (node.token.text == '+') {
                result = leftValue + rightValue
            } else {
                result = leftValue - rightValue
            }
            break
        case Node.type.Function:
            result = excFunc(node)
            break
        case Node.type.Identifier:
            var variableName = node.token.text
            result = getVariable(variableName)
            if (!result) {
                let e = new Error(`error:运行错误\n未定义的变量:${variableName}\n行:${node.token.lineNumber}\n列:${node.token.startColumn}`)
                throw e
            }
            break
        case Node.type.IntLiteral:
            result = parseInt(node.token.text)
            break
        case Node.type.FloatLiteral:
            result = parseFloat(node.token.text)
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