const antlr4 = require("antlr4/index");
const rcParser = require("./rcParser");

function myParserBase (input) {
    antlr4.Parser.call(this, input);
}

myParserBase.prototype = Object.create(antlr4.Parser.prototype);

myParserBase.prototype.p = function (str) {
    return this.prev(str);
};

myParserBase.prototype.prev = function (str) {
    const source = this._input.LT(-1).source[1].strdata;
    const start = this._input.LT(-1).start;
    const stop = this._input.LT(-1).stop;
    const prev = source.slice(start, stop + 1);
    return prev === str;
};

myParserBase.prototype.notLineTerminator = function () {
    return !this.here(rcParser.LineTerminator);
};

myParserBase.prototype.notOpenBraceAndNotFunction = function () {
    const nextTokenType = this._input.LT(1).type;
    return (
        nextTokenType !== rcParser.OpenBrace &&
        nextTokenType !== rcParser.Function
    );
};

myParserBase.prototype.closeBrace = function () {
    return this._input.LT(1).type === rcParser.CloseBrace;
};

myParserBase.prototype.here = function (type) {
    const possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
    const ahead = this._input.get(possibleIndexEosToken);
    return ahead.channel === antlr4.Lexer.HIDDEN && ahead.type === type;
};

myParserBase.prototype.lineTerminatorAhead = function () {
    let possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
    let ahead = this._input.get(possibleIndexEosToken);
    if (ahead.channel !== antlr4.Lexer.HIDDEN) {
        return false;
    }

    if (ahead.type === rcParser.LineTerminator) {
        return true;
    }

    if (ahead.type === rcParser.WhiteSpaces) {
        possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 2;
        ahead = this._input.get(possibleIndexEosToken);
    }

    const text = ahead.type;
    const type = ahead.type;

    return (
        (type === rcParser.MultiLineComment &&
            (text.includes("\r") || text.includes("\n"))) ||
        type === rcParser.LineTerminator
    )
}

module.exports.myParserBase = myParserBase