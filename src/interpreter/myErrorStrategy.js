const DefaultErrorStrategy = require('antlr4/error/ErrorStrategy').DefaultErrorStrategy
const Token = require('antlr4/Token').Token
const Errors = require('antlr4/error/Errors')
const NoViableAltException = Errors.NoViableAltException
const InputMismatchException = Errors.InputMismatchException
const FailedPredicateException = Errors.FailedPredicateException
const ParseCancellationException = Errors.ParseCancellationException
const ATNState = require('antlr4/atn/ATNState').ATNState
const Interval = require('antlr4/IntervalSet').Interval
const IntervalSet = require('antlr4/IntervalSet').IntervalSet

function myErrorStrategy () {
    DefaultErrorStrategy.call(this)
    return this
}

myErrorStrategy.prototype = Object.create(DefaultErrorStrategy.prototype)
myErrorStrategy.prototype.constructor = myErrorStrategy


myErrorStrategy.prototype.reportNoViableAlternative = function (recognizer, e) {
    var tokens = recognizer.getTokenStream()
    var input
    if (tokens !== null) {
        if (e.startToken.type === Token.EOF) {
            input = "<EOF>"
        } else {
            input = tokens.getText(new Interval(e.startToken.tokenIndex, e.offendingToken.tokenIndex))
        }
    } else {
        input = "<未知输入>"
    }
    var msg = "语法错误，未识别语句 " + this.escapeWSAndQuote(input)
    recognizer.notifyErrorListeners(msg, e.offendingToken, e)
}

myErrorStrategy.prototype.reportInputMismatch = function (recognizer, e) {
    var expecting = this.getExpectedTokens(recognizer)
    var literalNames = recognizer.literalNames.concat()
    for (let i = 0; i < recognizer.symbolicNames.length; i++) {
        switch (recognizer.symbolicNames[i]) {
            case "DateLiteral":
                literalNames[i] = "日期"
                break
            case "IntegerLiteral":
                literalNames[i] = "整数"
                break
            case "FloatingPointLiteral":
                literalNames[i] = "浮点数"
                break
            case "Identifier":
                literalNames[i] = "变量"
                break
        }
    }
    var type = expecting.toString(literalNames, recognizer.symbolicNames)
    var msg = "不匹配的输入 " + this.getTokenErrorDisplay(e.offendingToken) + "，期望 " + type
    recognizer.notifyErrorListeners(msg, e.offendingToken, e);
}

myErrorStrategy.prototype.reportMissingToken = function (recognizer) {
    if (this.inErrorRecoveryMode(recognizer)) {
        return;
    }
    this.beginErrorCondition(recognizer)
    var t = recognizer.getCurrentToken()
    var expecting = this.getExpectedTokens(recognizer)
    var literalNames = recognizer.literalNames.concat()
    for (let i = 0; i < recognizer.symbolicNames.length; i++) {
        switch (recognizer.symbolicNames[i]) {
            case "DateLiteral":
                literalNames[i] = "日期"
                break
            case "IntegerLiteral":
                literalNames[i] = "整数"
                break
            case "FloatingPointLiteral":
                literalNames[i] = "浮点数"
                break
            case "Identifier":
                literalNames[i] = "变量"
                break
        }
    }
    var type = expecting.toString(literalNames, recognizer.symbolicNames)
    var msg = "缺少'" + type + "'，在" + this.getTokenErrorDisplay(t) + "处"
    recognizer.notifyErrorListeners(msg, t, null)
}

myErrorStrategy.prototype.reportUnwantedToken = function (recognizer) {
    if (this.inErrorRecoveryMode(recognizer)) {
        return
    }
    this.beginErrorCondition(recognizer)
    var t = recognizer.getCurrentToken()
    var tokenName = this.getTokenErrorDisplay(t)
    var expecting = this.getExpectedTokens(recognizer)
    var msg = "额外输入" + tokenName + "，仅支持每行一个语句"
    recognizer.notifyErrorListeners(msg, t, null)
};

exports.myErrorStrategy = myErrorStrategy