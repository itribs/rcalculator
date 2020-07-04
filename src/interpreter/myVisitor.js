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
        if (value instanceof myNumber) {
            value.radix = 2
        }
        return value
    },
    oct: function (value) {
        if (value instanceof myNumber) {
            value.radix = 8
        }
        return value
    },
    hex: function (value) {
        if (value instanceof myNumber) {
            value.radix = 16
        }
        return value
    },
    timestamp: function (date) {
        if (date instanceof moment) {
            return new myNumber(date.toDate().getTime())
        }
        return date
    }
}

function checkErrorNode (ctx) {
    if (ctx instanceof antlrTree.ErrorNodeImpl || ctx.exception != null) {
        return true
    }
    if (ctx.children) {
        for (let i = 0; i < ctx.children.length; i++) {
            if (ctx.children[i] instanceof antlrTree.ErrorNodeImpl || ctx.children[i].exception != null) {
                return true
            }
        }
    }
    return false
}

function parseNumber (value) {
    if (value == null || typeof value == 'number' || value instanceof myNumber)
        return value

    let radix = 10
    if (value.startsWith("0x")) {
        radix = 16
    } else if (value.startsWith("0b")) {
        radix = 2
    } else if (value.startsWith("0o")) {
        radix = 8
    }
    if (radix != 10) {
        value = value.substr(2)
        return parseInt(value, radix)
    }

    let func = value.toString().indexOf('.') > -1 ? parseFloat : parseInt
    return func(value)
}

function myNumber (value) {
    this.value = parseNumber(value)
    this.radix = 10
}

myNumber.prototype.toString = function () {
    if (this.value.toString().indexOf('.') > -1) {
        return this.value.toString()
    }
    let value = this.value.toString(this.radix)
    switch (this.radix) {
        case 2:
            return '0b' + value
        case 8:
            return '0o' + value
        case 16:
            return '0x' + value
    }
    return value
}

myNumber.prototype.valueOf = function () {
    return this.value
}

moment.prototype.toString = function () {
    return this.format('YYYY-MM-DD')
}

function myVisitor () {
    rcVisitor.call(this)
    this.variables = {}
    return this
}

myVisitor.prototype = Object.create(rcVisitor.prototype)
myVisitor.prototype.constructor = myVisitor

myVisitor.prototype.getVariable = function (name) {
    let vars = Object.assign({}, defaultVariables, this.variables)
    return vars[name]
}

myVisitor.prototype.setVariable = function (name, value) {
    this.variables[name] = value
}

myVisitor.prototype.visitProg = function (ctx) {
    if (checkErrorNode(ctx)) return []
    return this.visitChildren(ctx)
}


myVisitor.prototype.visitStat = function (ctx) {
    if (checkErrorNode(ctx))
        return
    let result = this.visit(ctx.children[0])
    if (result != null) {
        return result.toString()
    }
    return
}

myVisitor.prototype.visitValue = function (ctx) {
    if (checkErrorNode(ctx))
        return
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitPriorityExpr = function (ctx) {
    if (checkErrorNode(ctx))
        return
    return this.visit(ctx.children[1])
}

myVisitor.prototype.visitExpr = function (ctx) {
    if (checkErrorNode(ctx))
        return

    if (ctx.children.length == 3) {
        let result = null
        let bop = ctx.children[1].symbol.type
        let leftValue = this.visit(ctx.children[0])
        let rightValue = this.visit(ctx.children[2])

        if (leftValue == null || rightValue == null)
            return

        switch (bop) {
            case rcParser.Add:
                result = leftValue.valueOf() + rightValue.valueOf()
                break
            case rcParser.Sub:
                result = leftValue.valueOf() - rightValue.valueOf()
                break
            case rcParser.Mul:
                result = leftValue.valueOf() * rightValue.valueOf()
                break
            case rcParser.Div:
                result = leftValue.valueOf() / rightValue.valueOf()
                break
            case rcParser.Mod:
                result = leftValue.valueOf() % rightValue.valueOf()
                break
            case rcParser.LShift:
                result = leftValue.valueOf() << rightValue.valueOf()
                break
            case rcParser.RShift:
                result = leftValue.valueOf() >> rightValue.valueOf()
                break
            case rcParser.BitOr:
                result = leftValue.valueOf() | rightValue.valueOf()
                break
            case rcParser.BitAnd:
                result = leftValue.valueOf() & rightValue.valueOf()
                break
            case rcParser.Caret:
                result = leftValue.valueOf() ^ rightValue.valueOf()
                break
        }
        return new myNumber(result)
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitAssigExpr = function (ctx) {
    if (checkErrorNode(ctx))
        return

    if (ctx.children.length == 3) {
        let result = null
        let bop = ctx.children[1].symbol.type
        let rightValue = this.visit(ctx.children[2])
        if (rightValue == null)
            return

        let variableName
        if (bop != rcParser.Assign) {
            variableName = this.visit(ctx.children[0].children[0])
            let leftValue = this.visit(ctx.children[0])

            if (variableName == null || leftValue == null)
                return

            switch (bop) {
                case rcParser.Add_Assign:
                    result = leftValue.valueOf() + rightValue.valueOf()
                    break
                case rcParser.Sub_Assign:
                    result = leftValue.valueOf() - rightValue.valueOf()
                    break
                case rcParser.Mul_Assign:
                    result = leftValue.valueOf() * rightValue.valueOf()
                    break
                case rcParser.Div_Assign:
                    result = leftValue.valueOf() / rightValue.valueOf()
                    break
                case rcParser.Mod_Assign:
                    result = leftValue.valueOf() % rightValue.valueOf()
                    break
                case rcParser.And_Assign:
                    result = leftValue.valueOf() & rightValue.valueOf()
                    break
                case rcParser.Or_Assign:
                    result = leftValue.valueOf() | rightValue.valueOf()
                    break
                case rcParser.XOr_Assign:
                    result = leftValue.valueOf() ^ rightValue.valueOf()
                    break
                case rcParser.LShift_Assign:
                    result = leftValue.valueOf() << rightValue.valueOf()
                    break
                case rcParser.RShift_Assign:
                    result = leftValue.valueOf() >> rightValue.valueOf()
                    break
            }
        } else {
            variableName = this.visit(ctx.children[0])

            if (variableName == null)
                return

            result = rightValue.valueOf()
        }
        result = new myNumber(result)
        this.setVariable(variableName, result)
        return result
    }
    return
}

myVisitor.prototype.visitDateDiff = function (ctx) {
    if (checkErrorNode(ctx))
        return

    if (ctx.children.length == 3) {
        let date1 = this.visit(ctx.children[0])
        let date2 = this.visit(ctx.children[2])
        if (date1 && date2) {
            return date1.diff(date2, 'days')
        }
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitPriorityDateDiff = function (ctx) {
    if (checkErrorNode(ctx))
        return
    return this.visit(ctx.children[1])
}

myVisitor.prototype.visitDateOp = function (ctx) {
    if (checkErrorNode(ctx))
        return

    if (ctx.children.length == 5) {
        let date = this.visit(ctx.children[0])
        let bop = ctx.children[1].symbol.type
        let value = this.visit(ctx.children[2])
        let key = this.visit(ctx.children[4])
        let unit = {
            'd': 'days',
            'w': 'weeks',
            'm': 'months',
            'y': 'years'
        }
        value = bop == rcParser.Add ? value : value * -1
        if (date && value != null && key) {
            return date.add(value.valueOf(), unit[key])
        }
        return
    }
    return this.visit(ctx.children[0])
}

myVisitor.prototype.visitFuncInvo = function (ctx) {
    if (checkErrorNode(ctx))
        return

    if (ctx.children.length >= 3) {
        let funcName = this.visit(ctx.children[0])
        if (funcName == null)
            return

        let func = eval('Math.' + funcName)
        let args = ctx.children.length == 4 ? this.visit(ctx.children[2]) : null

        if (func && typeof func == 'function') {
            return new myNumber(func.apply(null, args))
        } else {
            func = funcs[funcName]
        }

        if (func) {
            return func.apply(this, args)
        } else {
            ctx.parser.notifyErrorListeners("unknown function：'" + funcName + "'")
            return
        }
    }
    return
}

myVisitor.prototype.visitArgs = function (ctx) {
    if (checkErrorNode(ctx))
        return

    let args = []
    for (let i = 0; i < ctx.children.length; i++) {
        let arg = this.visit(ctx.children[i])
        if (arg == null)
            return

        if (arg != ',') {
            args.push(arg)
        }
    }
    return args
}

rcVisitor.prototype.visitVarVal = function (ctx) {
    if (checkErrorNode(ctx))
        return

    let variableName = this.visit(ctx.children[0])
    if (variableName == null)
        return

    let result = this.getVariable(variableName)
    if (result == null) {
        ctx.parser.notifyErrorListeners("undefined variable：'" + variableName + "'")
        return
    }
    return result
}

rcVisitor.prototype.visitNegativeVal = function (ctx) {
    if (checkErrorNode(ctx))
        return

    if (ctx.children.length == 2) {
        let value = this.visit(ctx.children[1])
        return new myNumber(0 - value)
    }
    return
}

myVisitor.prototype.visitTerminal = function (node) {
    if (checkErrorNode(node))
        return

    switch (node.symbol.type) {
        case rcParser.LineBreak:
        case rcParser.EOF:
            return ''
        case rcParser.IntegerLiteral:
        case rcParser.FloatingPointLiteral:
            let value = node.symbol.text.replace(/_/g, '').toLowerCase()
            return new myNumber(value)
        case rcParser.DateLiteral:
            return moment(node.symbol.text.replace(/#/g, ''))
    }
    return node.symbol.text
}

myVisitor.prototype.visitErrorNode = function (node) {
    return
}

exports.myVisitor = myVisitor