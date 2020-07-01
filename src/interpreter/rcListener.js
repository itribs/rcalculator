// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by rcParser.
function rcListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

rcListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
rcListener.prototype.constructor = rcListener;

// Enter a parse tree produced by rcParser#expression.
rcListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by rcParser#expression.
rcListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by rcParser#assignmentExpression.
rcListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by rcParser#assignmentExpression.
rcListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by rcParser#assignmentOperator.
rcListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by rcParser#assignmentOperator.
rcListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by rcParser#additiveExpression.
rcListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by rcParser#additiveExpression.
rcListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by rcParser#operator.
rcListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by rcParser#operator.
rcListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by rcParser#multiplicativeExpression.
rcListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by rcParser#multiplicativeExpression.
rcListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by rcParser#methodInvocation.
rcListener.prototype.enterMethodInvocation = function(ctx) {
};

// Exit a parse tree produced by rcParser#methodInvocation.
rcListener.prototype.exitMethodInvocation = function(ctx) {
};


// Enter a parse tree produced by rcParser#argumentList.
rcListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by rcParser#argumentList.
rcListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by rcParser#primary.
rcListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by rcParser#primary.
rcListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by rcParser#identifier.
rcListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by rcParser#identifier.
rcListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by rcParser#literal.
rcListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by rcParser#literal.
rcListener.prototype.exitLiteral = function(ctx) {
};



exports.rcListener = rcListener;