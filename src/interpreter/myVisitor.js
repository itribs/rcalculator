const antlrTree = require('antlr4/tree/Tree')
const rcVisitor = require('./rcVisitor').rcVisitor
const rcParser = require('./rcParser').rcParser
const moment = require('moment')

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

let funcs = {
    bin: function (value) {
        return value ? '0b' + value.toString(2) : ''
    },
    oct: function (value) {
        return value ? '0o' + value.toString(8) : ''
    },
    hex: function (value) {
        return value ? '0x' + value.toString(16) : ''
    },
    timestamp: function (date) {
        return date.getTime()
    }
}

function checkErrorNode (ctx) {
    if (ctx instanceof antlrTree.ErrorNodeImpl || ctx.exception != null) {
        return true
    } else if (ctx.children) {
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i] instanceof antlrTree.ErrorNodeImpl) {
                return true
            }
        }
    }
    return false
}

function myVisitor () {
    rcVisitor.call(this)
    this.variables = {}
    return this
}

myVisitor.prototype = Object.create(rcVisitor.prototype)
myVisitor.prototype.constructor = myVisitor

myVisitor.prototype.visitProg = function (ctx) {
    if (checkErrorNode(ctx)) return []

    return this.visitChildren(ctx)
}

myVisitor.prototype.getVariable = function (name) {
    let vars = Object.assign({}, defaultVariables, this.variables)
    return vars[name]
}

myVisitor.prototype.setVariable = function (name, value) {
    this.variables[name] = value
}

myVisitor.prototype.visitStat = function (ctx) {
    if (checkErrorNode(ctx)) return null
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitPriorityExpr = function (ctx) {
    if (checkErrorNode(ctx)) return null
    return this.visit(ctx.children[1])
}

myVisitor.prototype.visitExpr = function (ctx) {
    if (checkErrorNode(ctx)) return null

    if (ctx.children.length == 3) {
        let bop = ctx.children[1].symbol.type
        let leftValue = this.visit(ctx.children[0])
        let rightValue = this.visit(ctx.children[2])
        switch (bop) {
            case rcParser.ADD:
                return leftValue + rightValue
            case rcParser.SUB:
                return leftValue - rightValue
            case rcParser.MUL:
                return leftValue * rightValue
            case rcParser.DIV:
                return leftValue / rightValue
            case rcParser.MOD:
                return leftValue % rightValue
            case rcParser.LSHIFT:
                return leftValue << rightValue
            case rcParser.RSHIFT:
                return leftValue >> rightValue
            case rcParser.BITOR:
                return leftValue | rightValue
            case rcParser.BITAND:
                return leftValue & rightValue
            case rcParser.CARET:
                return leftValue ^ rightValue
        }
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitAssigExpr = function (ctx) {
    if (checkErrorNode(ctx)) return null

    if (ctx.children.length == 3) {
        let result = null
        let bop = ctx.children[1].symbol.type
        let rightValue = this.visit(ctx.children[2])
        let variableName = ctx.children[0].symbol.text
        if (bop != rcParser.ASSIGN) {
            let leftValue = this.visit(ctx.children[0])
            switch (bop) {
                case ADD_ASSIGN:
                    result = leftValue + rightValue
                    break
                case SUB_ASSIGN:
                    result = leftValue - rightValue
                    break
                case MUL_ASSIGN:
                    result = leftValue * rightValue
                    break
                case DIV_ASSIGN:
                    result = leftValue / rightValue
                    break
                case MOD_ASSIGN:
                    result = leftValue % rightValue
                    break
                case AND_ASSIGN:
                    result = leftValue & rightValue
                    break
                case OR_ASSIGN:
                    result = leftValue | rightValue
                    break
                case XOR_ASSIGN:
                    result = leftValue ^ rightValue
                    break
                case LSHIFT_ASSIGN:
                    result = leftValue << rightValue
                    break
                case RSHIFT_ASSIGN:
                    result = leftValue >> rightValue
                    break
            }
        } else {
            result = rightValue
        }
        this.setVariable(variableName, result)
        return result
    }
    return null
}

myVisitor.prototype.visitDateDiff = function (ctx) {
    if (checkErrorNode(ctx)) return null

    if (ctx.children.length == 3) {
        let dateStr1 = this.visit(ctx.children[0])
        let dateStr2 = this.visit(ctx.children[2])
        return moment(dateStr1).diff(moment(dateStr2), 'days')
    }
    return null
}


myVisitor.prototype.visitDateOp = function (ctx) {
    if (checkErrorNode(ctx)) return null

    if (ctx.children.length == 4) {
        let dateStr = this.visit(ctx.children[0])
        let date = moment(dateStr)
        let bop = ctx.children[1].symbol.type
        let value = this.visit(ctx.children[2])
        let key = this.visit(ctx.children[3])
        let unit = {
            'd': 'days',
            'w': 'weeks',
            'm': 'months',
            'y': 'years'
        }
        value = bop == rcParser.ADD ? value : value * -1
        return date.add(value, unit[key]).format('YYYY-MM-DD')
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitFuncInvo = function (ctx) {
    if (checkErrorNode(ctx)) return null

    if (ctx.children.length >= 3) {
        let funcName = ctx.children[0].symbol.text
        let func = eval('Math.' + funcName)
        if (!func || typeof func != 'function') {
            func = funcs[funcName]
        }
        if (func) {
            let args = ctx.children.length == 4 ? this.visit(ctx.children[2]) : null
            return func.apply(null, args)
        } else {
            ctx.parser.notifyErrorListeners("unknown function：'" + funcName + "'")
            return null
        }
    }
    return null
}

myVisitor.prototype.visitArgs = function (ctx) {
    if (checkErrorNode(ctx)) return null

    let args = []
    for (let i = 0; i < ctx.children.length; i++) {
        let arg = this.visit(ctx.children[i])
        if (arg != ',') {
            args.push(arg)
        }
    }
    return args
}

myVisitor.prototype.visitIdentifier = function (ctx) {
    if (checkErrorNode(ctx)) return null

    let variableName = this.visit(ctx.children[0])
    let result = this.getVariable(variableName)
    if (result == null) {
        ctx.parser.notifyErrorListeners("undefined variable：'" + variableName + "'")
        return null
    }
    return result
}

function parseNumber (node) {
    let value = node.symbol.text.replace(/_/g, '').toLowerCase()
    let radix = 0
    if (value.startsWith("0x")) {
        radix = 16
    } else if (value.startsWith("0b")) {
        radix = 2
    } else if (value.startsWith("0o")) {
        radix = 8
    }
    let func = node.symbol.type == rcParser.IntegerLiteral ? parseInt : parseFloat
    if (radix > 0) {
        value = value.substr(2)
        return func(value, radix)
    }

    return func(value)
}

myVisitor.prototype.visitTerminal = function (node) {
    if (checkErrorNode(node)) return null

    switch (node.symbol.type) {
        case rcParser.LineBreak:
        case rcParser.EOF:
            return ''
        case rcParser.IntegerLiteral:
        case rcParser.FloatingPointLiteral:
            return parseNumber(node)
        case rcParser.DateLiteral:
            return node.symbol.text.replace(/#/g, '')
    }
    return node.symbol.text
}

myVisitor.prototype.visitErrorNode = function (node) {
    return null
}

exports.myVisitor = myVisitor