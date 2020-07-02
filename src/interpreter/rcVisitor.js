// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by rcParser.

function rcVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

rcVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
rcVisitor.prototype.constructor = rcVisitor;

// Visit a parse tree produced by rcParser#prog.
rcVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#stat.
rcVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#Identifier.
rcVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#FuncInvo.
rcVisitor.prototype.visitFuncInvo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#Literal.
rcVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#Operation.
rcVisitor.prototype.visitOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#PriorityExpr.
rcVisitor.prototype.visitPriorityExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#assigExpr.
rcVisitor.prototype.visitAssigExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by rcParser#args.
rcVisitor.prototype.visitArgs = function(ctx) {
  return this.visitChildren(ctx);
};



exports.rcVisitor = rcVisitor;