class Node {

    constructor(type, text) {
        this.parent = null
        this._children = []
        this.type = type
        this.text = text
    }

    getChildren () {
        return this._children.concat()
    }

    addChild (child) {
        this._children.push(child)
        child.parent = this
    }

    dumpAST (node, indent) {
        console.log(indent + node.type + " " + node.text)
        let list = node.getChildren()
        for (let i = 0; i < list.length; i++) {
            this.dumpAST(list[i], indent + "\t");
        }
    }
}

Node.type = {
    Programm: 'Programm',           //程序入口，根节点

    Assignment: 'Assignment',     //赋值语句
    Function: 'Function',     //方法调用

    Multiplicative: 'Multiplicative',     //乘法表达式
    Additive: 'Additive',           //加法表达式
    Mod: 'Mod',                 //求余表达式

    Identifier: 'Identifier',         //标识符
    IntLiteral: 'IntLiteral',          //整型字面量
    FloatLiteral: 'FloatLiteral',         //浮点数型字面量
    Blank: 'Blank',
}

module.exports = Node