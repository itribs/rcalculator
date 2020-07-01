const rcVisitor = require('./rcVisitor').rcVisitor

function myVisitor() {
	rcVisitor.call(this)
	return this
}

myVisitor.prototype = Object.create(rcVisitor.prototype)
myVisitor.prototype.constructor = myVisitor

myVisitor.prototype.visitExpressions = function (ctx) {
	return this.visitChildren(ctx)
}

myVisitor.prototype.visitExpression = function (ctx) {
	console.log(ctx)
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitAssignmentExpression = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitAssignmentOperator = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitAdditiveExpression = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitOperator = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitMultiplicativeExpression = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitMethodInvocation = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitArgumentList = function (ctx) {
	return this.visitChildren(ctx)
}

myVisitor.prototype.visitPrimary = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitIdentifier = function (ctx) {
	return this.visitChildren(ctx)
}


myVisitor.prototype.visitLiteral = function (ctx) {
	return this.visitChildren(ctx)
}

exports.myVisitor = myVisitor