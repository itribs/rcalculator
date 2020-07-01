// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by rcParser.

function rcVisitor () {
    antlr4.tree.ParseTreeVisitor.call(this);
    return this;
}

rcVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
rcVisitor.prototype.constructor = rcVisitor;

// Visit a parse tree produced by rcParser#expression.
rcVisitor.prototype.visitExpression = function (ctx) {
    console.log(11)
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#assignmentExpression.
rcVisitor.prototype.visitAssignmentExpression = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#assignmentOperator.
rcVisitor.prototype.visitAssignmentOperator = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#additiveExpression.
rcVisitor.prototype.visitAdditiveExpression = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#operator.
rcVisitor.prototype.visitOperator = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#multiplicativeExpression.
rcVisitor.prototype.visitMultiplicativeExpression = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#methodInvocation.
rcVisitor.prototype.visitMethodInvocation = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#argumentList.
rcVisitor.prototype.visitArgumentList = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#primary.
rcVisitor.prototype.visitPrimary = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#identifier.
rcVisitor.prototype.visitIdentifier = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#literal.
rcVisitor.prototype.visitLiteral = function (ctx) {
    return this.visitChildren(ctx);
};



exports.rcVisitor = rcVisitor;