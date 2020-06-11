let Node = require('./node')
let Token = require('./token')

/*
Expression := Assignment | Additive
Assignment := Identifier '=' Additive
Additive := Multiplicative |  Additive '+' Multiplicative |  Additive '-' Multiplicative
Multiplicative := Primary | Primary '*' Multiplicative | Primary '/' Multiplicative | Primary '%' Multiplicative
Primary := Identifier | IntLiteral | FloatLiteral | (Additive)
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
                node = new Node(type, token.text)
                break
            case Token.type.Identifier:
                token = tokens.read()
                node = new Node(Token.type.Identifier, token.text)
                break
            case Token.type.LeftParen:
                token = tokens.read()
                node = additive(tokens)
                if (node) {
                    token = tokens.peek()
                    if (token && token.type == Token.type.RightParen) {
                        tokens.read()
                    } else {
                        throw "缺少右括号"
                    }
                } else {
                    throw "括号内缺少表达式"
                }
                break
        }
    }
    return node
}

function multiplicative (tokens) {
    let child1 = primary(tokens)
    let node = child1
    let token = tokens.peek()
    if (child1 && token) {
        if (token.type == Token.type.Star || token.type == Token.type.Slash || token.type == Token.type.Percent) {
            token = tokens.read()
            let child2 = multiplicative(tokens)
            if (child2) {
                node = new Node(Node.type.Multiplicative, token.text)
                node.addChild(child1)
                node.addChild(child2)
            } else {
                throw "表达式缺少右边值"
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
                token = tokens.read()
                let child2 = multiplicative(tokens)
                node = new Node(Node.type.Additive, token.text)
                node.addChild(child1)
                node.addChild(child2)
                child1 = node
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
        token = tokens.read()
        let child1 = new Node(Node.type.Identifier, token.text)
        token = tokens.peek()
        if (token && token.type == Token.type.Equal) {
            token = tokens.read()
            let node = new Node(Node.type.Assignment, token.text)
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

function expression (tokens) {
    let pos = tokens.getPos()
    let node = assignment(tokens)
    if (!node) {
        tokens.setPos(pos)
        node = additive(tokens)
    }
    token = tokens.peek()
    if (!token || token.type == Token.type.LineBreak) {
        if (token) {
            tokens.read()
        }
    } else {
        throw "每个语句独占一行"
    }

    while (true) {
        token = tokens.peek()
        if (token && token.type == Token.type.LineBreak) {
            tokens.read()
        } else {
            break
        }
    }
    return node
}

function treeRootNode (tokens) {
    let node = new Node(Node.type.Programm, 'Calculator')
    while (true) {
        let child = expression(tokens)
        if (child) {
            node.addChild(child)
        } else {
            break
        }
    }
    return node
}

module.exports = {
    treeRootNode
}