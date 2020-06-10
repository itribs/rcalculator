let Token = require('./token')
let TokenReader = require('./tokenReader')

let lexicals = [
    { type: Token.type.CosFunc, rule: 'cos' },
    { type: Token.type.Identifier, rule: /^[a-zA-Z_][0-9a-zA-Z_]*$/ },
    { type: Token.type.IntLiteral, rule: /^\d+$/ },
    { type: Token.type.FloatLiteral, rule: /^\d+(\.\d+)?$/ },
    { type: Token.type.Equal, rule: '=' },
    { type: Token.type.Plus, rule: '+' },
    { type: Token.type.Minus, rule: '-' },
    { type: Token.type.Star, rule: '*' },
    { type: Token.type.Slash, rule: '/' },
    { type: Token.type.Percent, rule: '%' },
    { type: Token.type.LeftParen, rule: '(' },
    { type: Token.type.RightParen, rule: ')' },
    { type: Token.type.LineBreak, rule: '\n' }
]

let tokens = []
let initialState = true
let tokenText = ''
let curLexical = null
let lineNumber = 0
let column = 0

function initialToken (ch, pos) {
    if (tokenText.length > 0 && (curLexical || !isBlank(tokenText))) {
        let token = new Token()
        token.type = curLexical ? curLexical.type : Token.type.Unknown
        token.text = tokenText
        token.endPos = pos
        token.startPos = token.endPos - tokenText.length
        token.lineNumber = lineNumber
        token.endColumn = column
        token.startColumn = token.endColumn - tokenText.length
        tokens.push(token)

        if (token.type == Token.type.LineBreak) {
            lineNumber++
            column = 0
        }
    }

    tokenText = ''
    initialState = false
    curLexical = matchLexical(ch)
    tokenText += ch
}

function matchLexical (text) {
    for (let j = 0; j < lexicals.length; j++) {
        let lexical = lexicals[j]
        if (match(lexical, text)) {
            return lexical
        }
    }
    return null
}

function match (lexical, text) {
    if ((typeof lexical.rule == 'string' && lexical.rule.startsWith(text)) ||
        (typeof lexical.rule == 'object' && lexical.rule.test(text))) {
        return true
    }
    return false
}

function isBlank (text) {
    return /\s+/.test(text);
}

function tokenize (code) {
    if (!code) return

    lineNumber = 1
    code = code.trim()
    for (let i = 0; i < code.length; i++) {
        let ch = code[i]

        if (initialState) {
            initialToken(ch, i)
        } else {
            if (curLexical) {
                if (match(curLexical, tokenText + ch)) {
                    tokenText += ch
                } else {
                    let lexical = matchLexical(tokenText + ch)
                    if (lexical) {
                        curLexical = lexical
                        tokenText += ch
                    } else {
                        initialToken(ch, i)
                    }
                }
            } else {
                let lexical = matchLexical(tokenText + ch)
                if (lexical) {
                    curLexical = lexical
                    tokenText += ch
                } else {
                    lexical = matchLexical(ch)
                    if (lexical) {
                        initialToken(ch, i)
                    } else {
                        tokenText += ch
                    }
                }
            }
        }

        column++
    }

    initialToken()

    return new TokenReader(tokens)
}

module.exports = {
    tokenize
}