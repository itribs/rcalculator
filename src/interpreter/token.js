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