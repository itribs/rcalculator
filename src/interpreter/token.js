class Token {

    constructor() {
        this.type = null
        this.text = ''
        this.startPos = 0
        this.endPos = 0
        this.lineNumber = 0
        this.startColumn = 0
        this.endColumn = 0
    }

    append (token, newType) {
        if (!token) return

        let newToken = new Token()
        newToken.text = this.text + token.text
        newToken.startPos = this.startPos
        newToken.startColumn = this.startColumn
        newToken.lineNumber = this.lineNumber
        newToken.endPos = token.endPos
        newToken.endColumn = token.endPos
        newToken.type = newType
        return newToken
    }

    toString () {
        let rtn = this.type
        rtn += ":"
        if (this.text) {
            rtn += this.text
        }
        return rtn;
    }

}

Token.type = {
    Unknown: 'Unknown',
    Identifier: 'Identifier',
    IntLiteral: 'IntLiteral',
    FloatLiteral: 'FloatLiteral',
    ShiftLeft: 'ShiftLeft',
    ShiftRight: 'ShiftRight',
    LessThan: 'LessThan',
    GreaterThan: 'GreaterThan',
    Bar: 'Bar',
    Ampersand: 'Ampersand',
    Caret: 'Caret',
    Equal: 'Equal',
    Plus: 'Plus',
    Minus: 'Minus',
    Star: 'Star',
    Slash: 'Slash',
    Percent: 'Percent',
    LeftParen: 'LeftParen',
    RightParen: 'RightParen',
    LineBreak: 'LineBreak',
    Comma: 'Comma'
}

module.exports = Token