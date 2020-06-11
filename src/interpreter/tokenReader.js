class TokenReader {

    constructor(tokens) {
        this.pos = 0
        this.tokens = tokens
    }

    read () {
        if (this.pos < this.tokens.length) {
            return this.tokens[this.pos++]
        }
    }

    peek () {
        if (this.pos < this.tokens.length) {
            return this.tokens[this.pos]
        }
    }

    unread () {
        if (this.pos > 0) {
            this.pos--
        }
    }

    getPos () {
        return this.pos;
    }

    setPos (pos) {
        this.pos = pos
    }

    toString () {
        let result = ''
        for (let i = 0; i < this.tokens.length; i++) {
            result += this.tokens[i].toString() + '\n'
        }
        return result
    }
}

module.exports = TokenReader