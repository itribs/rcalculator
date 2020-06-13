const Node = require('./node')
const Token = require('./token')

/*
Expression := Assignment | Additive
Assignment := Identifier '=' Additive
Additive := Multiplicative | Additive '+' Multiplicative | Additive '-' Multiplicative 
Multiplicative := Function | Multiplicative '*' Function | Multiplicative '/' Function | Multiplicative '%' Function
Function := Identifier '(' (Additive (',' Additive)?)? ')' | Primary
Primary := Identifier | IntLiteral | FloatLiteral | '(' Additive ')'
*/

function primary (tokens) {
    let node = null
    let token = tokens.peek()
    if (token) {
        switch (token.type) {
            case Token.type.IntLiteral:
            case Token.type.FloatLiteral:
                token = tokens.read()
                let type = token.type == Token.type.IntLiteral ? Node.type.IntLiteral : Node.type.FloatLiteral
                node = new Node(type, token)
                break
            case Token.type.Identifier:
                token = tokens.read()
                node = new Node(Token.type.Identifier, token)
                break
            case Token.type.LeftParen:
                token = tokens.read()
                node = additive(tokens)
                if (node) {
                    token = tokens.peek()
                    if (token && token.type == Token.type.RightParen) {
                        tokens.read()
                    } else {
                        if (!token) {
                            tokens.unread()
                            token = tokens.peek()
                        }
                        let e = new Error(`error:格式错误\n缺少右括号\n行:${token.lineNumber}\n列:${token.startColumn}`)
                        throw e
                    }
                } else {
                    let e = new Error(`error:格式错误\n括号内缺少表达式\n行:${token.lineNumber}\n列:${token.startColumn}`)
                    throw e
                }
                break
            case Token.type.Unknown:
                let e = new Error(`error:格式错误\n发现未知字符\n行:${token.lineNumber}\n列:${token.startColumn}`)
                throw e
                break
        }
    }
    return node
}

function func (tokens) {
    let node = null
    let token = tokens.peek()
    if (token && token.type == Token.type.Identifier) {
        let identifierToken = tokens.read()
        token = tokens.peek()
        if (token && token.type == Token.type.LeftParen) {
            tokens.read()
            node = new Node(Node.type.Function, identifierToken)
            let children = []
            let child1 = additive(tokens)
            if (child1) {
                children.push(child1)
                while (true) {
                    token = tokens.peek()
                    if (token && token.type == Token.type.Comma) {
                        tokens.read()
                        let child = additive(tokens)
                        if (!child) {
                            let e = new Error(`error:格式错误\n缺少参数\n行:${token.lineNumber}\n列:${token.startColumn}`)
                            throw e
                        }
                        children.push(child)
                    } else {
                        break
                    }
                }
            }
            token = tokens.peek()
            if (token && token.type == Token.type.RightParen) {
                tokens.read()
            } else {
                if (!token) {
                    tokens.unread()
                    token = tokens.peek()
                }
                let e = new Error(`error:格式错误\n缺少右括号\n行:${token.lineNumber}\n列:${token.startColumn}`)
                throw e
            }
            for (let i = 0; i < children.length; i++) {
                node.addChild(children[i])
            }
        } else {
            tokens.unread()
        }
    }
    if (!node) {
        node = primary(tokens)
    }
    return node
}

function multiplicative (tokens) {
    let child1 = func(tokens)
    let node = child1
    if (child1) {
        while (true) {
            let token = tokens.peek()
            if (token && (token.type == Token.type.Star || token.type == Token.type.Slash || token.type == Token.type.Percent)) {
                tokens.read()
                let child2 = func(tokens)
                if (child2) {
                    node = new Node(Node.type.Multiplicative, token)
                    node.addChild(child1)
                    node.addChild(child2)
                    child1 = node
                } else {
                    let e = new Error(`error:格式错误\n表达式缺少右边值\n行:${token.lineNumber}\n列:${token.startColumn}`)
                    throw e
                }
            } else {
                break
            }
        }
    }
    return node
}

function additive (tokens) {
    let child1 = multiplicative(tokens)
    let node = child1
    if (child1) {
        while (true) {
            let token = tokens.peek()
            if (token && (token.type == Token.type.Plus || token.type == Token.type.Minus)) {
                tokens.read()
                let child2 = multiplicative(tokens)
                if (child2) {
                    node = new Node(Node.type.Additive, token)
                    node.addChild(child1)
                    node.addChild(child2)
                    child1 = node
                } else {
                    let e = new Error(`error:格式错误\n表达式缺少右边值\n行:${token.lineNumber}\n列:${token.startColumn}`)
                    throw e
                }
            } else {
                break
            }
        }
    }
    return node
}

function assignment (tokens) {
    let token = tokens.peek()
    if (token && token.type == Token.type.Identifier) {
        tokens.read()
        let child1 = new Node(Node.type.Identifier, token)
        token = tokens.peek()
        if (token && token.type == Token.type.Equal) {
            tokens.read()
            let node = new Node(Node.type.Assignment, token)
            let child2 = additive(tokens)
            if (child2) {
                node.addChild(child1)
                node.addChild(child2)
                return node
            }
        }
    }
    return null
}

function blank (tokens) {
    let token = tokens.peek()
    if (token && token.type == Token.type.LineBreak) {
        tokens.read()
        return new Node(Node.type.Blank, token)
    }
    return null
}

function expression (tokens) {
    let pos = tokens.getPos()
    let node = blank(tokens)
    if (!node) {
        node = assignment(tokens)
    }
    if (!node) {
        tokens.setPos(pos)
        node = additive(tokens)
        token = tokens.peek()
    }

    if (node && node.type != Node.type.Blank) {
        token = tokens.peek()
        if (!token || token.type == Token.type.LineBreak) {
            if (token) {
                tokens.read()
            }
        } else {
            let e = new Error(`error:格式错误\n每个语句独占一行\n行:${token.lineNumber}\n列:${token.startColumn}`)
            throw e
        }
    }

    return node
}

function treeRootNode (tokens) {
    let rootToken = new Token()
    rootToken.type = Token.type.Identifier
    rootToken.text = 'Calculator'
    let node = new Node(Node.type.Programm, rootToken)
    while (true) {
        let child = expression(tokens)
        if (child) {
            node.addChild(child)
        } else {
            break
        }
    }
    tokens.setPos(0)
    return node
}

module.exports = {
    treeRootNode
}