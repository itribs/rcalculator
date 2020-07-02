const antlr4 = require('antlr4/index')
const antlrTree = require('antlr4/tree/Tree')
const rcVisitor = require('./rcVisitor').rcVisitor
const rcParser = require('./rcParser').rcParser

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
    let vars = Object.assign({}, defaultVariables, variables)
    return vars[name]
}

function setVariable (name, value) {
    variables[name] = value
}

function freeVariables () {
    variables = {}
}

let funcs = {
    bin: function (value) {
        return value ? '0b' + value.toString(2) : ''
    },
    oct: function (value) {
        return value ? '0o' + value.toString(8) : ''
    },
    hex: function (value) {
        return value ? '0x' + value.toString(16) : ''
    }
}

function checkErrorNode (ctx) {
    if (ctx.children) {
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i] instanceof antlrTree.ErrorNodeImpl) {
                return ctx.children[i]
            } else {
                let result = checkErrorNode(ctx.children[i])
                if (result) {
                    return result
                }
            }
        }
    }
    return ctx instanceof antlrTree.ErrorNodeImpl ? ctx : null
}

function myVisitor () {
    rcVisitor.call(this)
    return this
}

myVisitor.prototype = Object.create(rcVisitor.prototype)
myVisitor.prototype.constructor = myVisitor

myVisitor.prototype.visitExpressions = function (ctx) {
    return this.visitChildren(ctx)
}

myVisitor.prototype.visitExpression = function (ctx) {
    let errorNode = checkErrorNode(ctx)
    if (errorNode) {
        return this.visitErrorNode(errorNode)
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitAssignmentExpression = function (ctx) {
    if (ctx.children.length == 3) {
        let result = null
        let bop = this.visit(ctx.children[1])
        let rightValue = this.visit(ctx.children[2])
        let variableName = ctx.children[0].children[0].symbol.text
        if (bop != '=') {
            let leftValue = this.visit(ctx.children[0])
            switch (bop) {
                case '+=':
                    result = leftValue + rightValue
                    break
                case '-=':
                    result = leftValue - rightValue
                    break
                case '*=':
                    result = leftValue * rightValue
                    break
                case '/=':
                    result = leftValue / rightValue
                    break
                case '%=':
                    result = leftValue % rightValue
                    break
                case '&=':
                    result = leftValue & rightValue
                    break
                case '|=':
                    result = leftValue | rightValue
                    break
                case '^=':
                    result = leftValue ^ rightValue
                    break
                case '<<=':
                    result = leftValue << rightValue
                    break
                case '>>=':
                    result = leftValue >> rightValue
                    break
            }
        } else {
            result = rightValue
        }
        setVariable(variableName, result)
        return result
    }
    return this.visitChildren(ctx)[0]
}

myVisitor.prototype.visitAssignmentOperator = function (ctx) {
    return this.visitChildren(ctx)[0]
}

myVisitor.prototype.visitAdditiveExpression = function (ctx) {
    let children = this.visitChildren(ctx)
    if (children.length == 3) {
        switch (children[1]) {
            case '+':
                return children[0] + children[2]
            case '-':
                return children[0] - children[2]
            case '<<':
                return children[0] << children[2]
            case '>>':
                return children[0] >> children[2]
            case '|':
                return children[0] | children[2]
            case '&':
                return children[0] & children[2]
            case '^':
                return children[0] ^ children[2]
        }
    }
    return children[0]
}

myVisitor.prototype.visitAdditiveOperator = function (ctx) {
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitMultiplicativeExpression = function (ctx) {
    let children = this.visitChildren(ctx)
    if (children.length == 3) {
        switch (children[1]) {
            case '*':
                return children[0] * children[2]
            case '/':
                return children[0] / children[2]
            case '%':
                return children[0] % children[2]
        }
    }
    return children[0]
}

myVisitor.prototype.visitMultiplicativeOperator = function (ctx) {
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitPrimary = function (ctx) {
    let children = this.visitChildren(ctx)
    if (!children) return null

    if (children.length == 3) {
        return children[1]
    }
    return children[0]
}

myVisitor.prototype.visitMethodInvocation = function (ctx) {
    if (ctx.children.length == 4) {
        let funcName = ctx.children[0].children[0].symbol.text
        let func = eval('Math.' + funcName)
        if (!func || typeof func != 'function') {
            func = funcs[funcName]
        }
        if (func) {
            let args = this.visitChildren(ctx.children[2])
            for (let i = 0; i < args.length; i++) {
                if (args[i] == ',') {
                    args.splice(i, 1)
                }
            }
            return func.apply(null, args)
        } else {
            ctx.parser.notifyErrorListeners('unknown function：' + funcName)
            return null
        }
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitIdentifier = function (ctx) {
    let variableName = this.visit(ctx.children[0])
    let result = getVariable(variableName)
    if (result == null) {
        ctx.parser.notifyErrorListeners('undefined variable：' + variableName)
        return null
    }
    return result
}

myVisitor.prototype.visitLiteral = function (ctx) {
    let value = this.visit(ctx.children[0]).replace(/_/g, '').toLowerCase()
    let radix = 0
    if (value.startsWith("0x")) {
        radix = 16
    } else if (value.startsWith("0b")) {
        radix = 2
    } else if (value.startsWith("0o")) {
        radix = 8
    }
    if (radix > 0) {
        value = value.substr(2)
        return parseInt(value, radix)
    }

    return parseInt(value)
}

myVisitor.prototype.visitTerminal = function (node) {
    return node.symbol.text
}

myVisitor.prototype.visitErrorNode = function (node) {
    return null
}

exports.myVisitor = myVisitor