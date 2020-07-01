// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcListener = require('./rcListener').rcListener;
var rcVisitor = require('./rcVisitor').rcVisitor;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001e[\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "*\n\u0005\f\u0005\u000e\u0005-\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u00078\n\u0007\f\u0007\u000e\u0007;\u000b\u0007\u0003\b",
    "\u0003\b\u0003\b\u0005\b@\n\b\u0003\b\u0003\b\u0003\b\u0005\bE\n\b\u0003",
    "\t\u0003\t\u0003\t\u0007\tJ\n\t\f\t\u000e\tM\u000b\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nU\n\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0002\u0004\b\f\r\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0002\u0005\u0004\u0002\b\b\u0013\u001c\u0003",
    "\u0002\t\u0012\u0003\u0002\u0003\u0004\u0002W\u0002\u001a\u0003\u0002",
    "\u0002\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006 \u0003\u0002",
    "\u0002\u0002\b\"\u0003\u0002\u0002\u0002\n.\u0003\u0002\u0002\u0002",
    "\f0\u0003\u0002\u0002\u0002\u000eD\u0003\u0002\u0002\u0002\u0010F\u0003",
    "\u0002\u0002\u0002\u0012T\u0003\u0002\u0002\u0002\u0014V\u0003\u0002",
    "\u0002\u0002\u0016X\u0003\u0002\u0002\u0002\u0018\u001b\u0005\u0004",
    "\u0003\u0002\u0019\u001b\u0005\b\u0005\u0002\u001a\u0018\u0003\u0002",
    "\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u0003\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0005\u0014\u000b\u0002\u001d\u001e\u0005\u0006",
    "\u0004\u0002\u001e\u001f\u0005\b\u0005\u0002\u001f\u0005\u0003\u0002",
    "\u0002\u0002 !\t\u0002\u0002\u0002!\u0007\u0003\u0002\u0002\u0002\"",
    "#\b\u0005\u0001\u0002#$\u0005\f\u0007\u0002$+\u0003\u0002\u0002\u0002",
    "%&\f\u0003\u0002\u0002&\'\u0005\n\u0006\u0002\'(\u0005\f\u0007\u0002",
    "(*\u0003\u0002\u0002\u0002)%\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\t\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\t\u0003\u0002\u0002/",
    "\u000b\u0003\u0002\u0002\u000201\b\u0007\u0001\u000212\u0005\u000e\b",
    "\u000229\u0003\u0002\u0002\u000234\f\u0003\u0002\u000245\u0005\n\u0006",
    "\u000256\u0005\u000e\b\u000268\u0003\u0002\u0002\u000273\u0003\u0002",
    "\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003",
    "\u0002\u0002\u0002:\r\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002",
    "<=\u0005\u0014\u000b\u0002=?\u0007\u0006\u0002\u0002>@\u0005\u0010\t",
    "\u0002?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0003\u0002",
    "\u0002\u0002AB\u0007\u0007\u0002\u0002BE\u0003\u0002\u0002\u0002CE\u0005",
    "\u0012\n\u0002D<\u0003\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002E",
    "\u000f\u0003\u0002\u0002\u0002FK\u0005\b\u0005\u0002GH\u0007\u0005\u0002",
    "\u0002HJ\u0005\b\u0005\u0002IG\u0003\u0002\u0002\u0002JM\u0003\u0002",
    "\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\u0011",
    "\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002NU\u0005\u0014\u000b",
    "\u0002OU\u0005\u0016\f\u0002PQ\u0007\u0006\u0002\u0002QR\u0005\b\u0005",
    "\u0002RS\u0007\u0007\u0002\u0002SU\u0003\u0002\u0002\u0002TN\u0003\u0002",
    "\u0002\u0002TO\u0003\u0002\u0002\u0002TP\u0003\u0002\u0002\u0002U\u0013",
    "\u0003\u0002\u0002\u0002VW\u0007\u001d\u0002\u0002W\u0015\u0003\u0002",
    "\u0002\u0002XY\t\u0004\u0002\u0002Y\u0017\u0003\u0002\u0002\u0002\t",
    "\u001a+9?DKT"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "','", "'('", "')'", "'='", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'&'", "'|'", "'^'", "'<<'", 
                     "'>>'", "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", 
                     "'|='", "'^='", "'<<='", "'>>='" ];

var symbolicNames = [ null, "IntegerLiteral", "FloatingPointLiteral", "COMMA", 
                      "LPAREN", "RPAREN", "ASSIGN", "ADD", "SUB", "MUL", 
                      "DIV", "MOD", "BITAND", "BITOR", "CARET", "LSHIFT", 
                      "RSHIFT", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
                      "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                      "XOR_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "Identifier", 
                      "WS" ];

var ruleNames =  [ "expression", "assignmentExpression", "assignmentOperator", 
                   "additiveExpression", "operator", "multiplicativeExpression", 
                   "methodInvocation", "argumentList", "primary", "identifier", 
                   "literal" ];

function rcParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

rcParser.prototype = Object.create(antlr4.Parser.prototype);
rcParser.prototype.constructor = rcParser;

Object.defineProperty(rcParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

rcParser.EOF = antlr4.Token.EOF;
rcParser.IntegerLiteral = 1;
rcParser.FloatingPointLiteral = 2;
rcParser.COMMA = 3;
rcParser.LPAREN = 4;
rcParser.RPAREN = 5;
rcParser.ASSIGN = 6;
rcParser.ADD = 7;
rcParser.SUB = 8;
rcParser.MUL = 9;
rcParser.DIV = 10;
rcParser.MOD = 11;
rcParser.BITAND = 12;
rcParser.BITOR = 13;
rcParser.CARET = 14;
rcParser.LSHIFT = 15;
rcParser.RSHIFT = 16;
rcParser.ADD_ASSIGN = 17;
rcParser.SUB_ASSIGN = 18;
rcParser.MUL_ASSIGN = 19;
rcParser.DIV_ASSIGN = 20;
rcParser.MOD_ASSIGN = 21;
rcParser.AND_ASSIGN = 22;
rcParser.OR_ASSIGN = 23;
rcParser.XOR_ASSIGN = 24;
rcParser.LSHIFT_ASSIGN = 25;
rcParser.RSHIFT_ASSIGN = 26;
rcParser.Identifier = 27;
rcParser.WS = 28;

rcParser.RULE_expression = 0;
rcParser.RULE_assignmentExpression = 1;
rcParser.RULE_assignmentOperator = 2;
rcParser.RULE_additiveExpression = 3;
rcParser.RULE_operator = 4;
rcParser.RULE_multiplicativeExpression = 5;
rcParser.RULE_methodInvocation = 6;
rcParser.RULE_argumentList = 7;
rcParser.RULE_primary = 8;
rcParser.RULE_identifier = 9;
rcParser.RULE_literal = 10;


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.assignmentExpression = function() {
    return this.getTypedRuleContext(AssignmentExpressionContext,0);
};

ExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ExpressionContext = ExpressionContext;

rcParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rcParser.RULE_expression);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.assignmentExpression();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this.additiveExpression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_assignmentExpression;
    return this;
}

AssignmentExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AssignmentExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};

AssignmentExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitAssignmentExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.AssignmentExpressionContext = AssignmentExpressionContext;

rcParser.prototype.assignmentExpression = function() {

    var localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, rcParser.RULE_assignmentExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.identifier();
        this.state = 27;
        this.assignmentOperator();
        this.state = 28;
        this.additiveExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.ASSIGN = function() {
    return this.getToken(rcParser.ASSIGN, 0);
};

AssignmentOperatorContext.prototype.MUL_ASSIGN = function() {
    return this.getToken(rcParser.MUL_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.DIV_ASSIGN = function() {
    return this.getToken(rcParser.DIV_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.MOD_ASSIGN = function() {
    return this.getToken(rcParser.MOD_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.ADD_ASSIGN = function() {
    return this.getToken(rcParser.ADD_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.SUB_ASSIGN = function() {
    return this.getToken(rcParser.SUB_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.LSHIFT_ASSIGN = function() {
    return this.getToken(rcParser.LSHIFT_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.RSHIFT_ASSIGN = function() {
    return this.getToken(rcParser.RSHIFT_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.AND_ASSIGN = function() {
    return this.getToken(rcParser.AND_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.XOR_ASSIGN = function() {
    return this.getToken(rcParser.XOR_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.OR_ASSIGN = function() {
    return this.getToken(rcParser.OR_ASSIGN, 0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitAssignmentOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.AssignmentOperatorContext = AssignmentOperatorContext;

rcParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, rcParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ASSIGN) | (1 << rcParser.ADD_ASSIGN) | (1 << rcParser.SUB_ASSIGN) | (1 << rcParser.MUL_ASSIGN) | (1 << rcParser.DIV_ASSIGN) | (1 << rcParser.MOD_ASSIGN) | (1 << rcParser.AND_ASSIGN) | (1 << rcParser.OR_ASSIGN) | (1 << rcParser.XOR_ASSIGN) | (1 << rcParser.LSHIFT_ASSIGN) | (1 << rcParser.RSHIFT_ASSIGN))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AdditiveExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_additiveExpression;
    return this;
}

AdditiveExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

AdditiveExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

AdditiveExpressionContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitAdditiveExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



rcParser.prototype.additiveExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, rcParser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 41;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_additiveExpression);
                this.state = 35;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 36;
                this.operator();
                this.state = 37;
                this.multiplicativeExpression(0); 
            }
            this.state = 43;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.ADD = function() {
    return this.getToken(rcParser.ADD, 0);
};

OperatorContext.prototype.SUB = function() {
    return this.getToken(rcParser.SUB, 0);
};

OperatorContext.prototype.MUL = function() {
    return this.getToken(rcParser.MUL, 0);
};

OperatorContext.prototype.DIV = function() {
    return this.getToken(rcParser.DIV, 0);
};

OperatorContext.prototype.MOD = function() {
    return this.getToken(rcParser.MOD, 0);
};

OperatorContext.prototype.RSHIFT = function() {
    return this.getToken(rcParser.RSHIFT, 0);
};

OperatorContext.prototype.LSHIFT = function() {
    return this.getToken(rcParser.LSHIFT, 0);
};

OperatorContext.prototype.BITAND = function() {
    return this.getToken(rcParser.BITAND, 0);
};

OperatorContext.prototype.BITOR = function() {
    return this.getToken(rcParser.BITOR, 0);
};

OperatorContext.prototype.CARET = function() {
    return this.getToken(rcParser.CARET, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.OperatorContext = OperatorContext;

rcParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, rcParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ADD) | (1 << rcParser.SUB) | (1 << rcParser.MUL) | (1 << rcParser.DIV) | (1 << rcParser.MOD) | (1 << rcParser.BITAND) | (1 << rcParser.BITOR) | (1 << rcParser.CARET) | (1 << rcParser.LSHIFT) | (1 << rcParser.RSHIFT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplicativeExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_multiplicativeExpression;
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.methodInvocation = function() {
    return this.getTypedRuleContext(MethodInvocationContext,0);
};

MultiplicativeExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

MultiplicativeExpressionContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitMultiplicativeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



rcParser.prototype.multiplicativeExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, rcParser.RULE_multiplicativeExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.methodInvocation();
        this._ctx.stop = this._input.LT(-1);
        this.state = 55;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_multiplicativeExpression);
                this.state = 49;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 50;
                this.operator();
                this.state = 51;
                this.methodInvocation(); 
            }
            this.state = 57;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function MethodInvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_methodInvocation;
    return this;
}

MethodInvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodInvocationContext.prototype.constructor = MethodInvocationContext;

MethodInvocationContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MethodInvocationContext.prototype.LPAREN = function() {
    return this.getToken(rcParser.LPAREN, 0);
};

MethodInvocationContext.prototype.RPAREN = function() {
    return this.getToken(rcParser.RPAREN, 0);
};

MethodInvocationContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

MethodInvocationContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

MethodInvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterMethodInvocation(this);
	}
};

MethodInvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitMethodInvocation(this);
	}
};

MethodInvocationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitMethodInvocation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.MethodInvocationContext = MethodInvocationContext;

rcParser.prototype.methodInvocation = function() {

    var localctx = new MethodInvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rcParser.RULE_methodInvocation);
    var _la = 0; // Token type
    try {
        this.state = 66;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.identifier();
            this.state = 59;
            this.match(rcParser.LPAREN);
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier))) !== 0)) {
                this.state = 60;
                this.argumentList();
            }

            this.state = 63;
            this.match(rcParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.primary();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.additiveExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AdditiveExpressionContext);
    } else {
        return this.getTypedRuleContext(AdditiveExpressionContext,i);
    }
};

ArgumentListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rcParser.COMMA);
    } else {
        return this.getToken(rcParser.COMMA, i);
    }
};


ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitArgumentList(this);
	}
};

ArgumentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitArgumentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ArgumentListContext = ArgumentListContext;

rcParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, rcParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.additiveExpression(0);
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.COMMA) {
            this.state = 69;
            this.match(rcParser.COMMA);
            this.state = 70;
            this.additiveExpression(0);
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

PrimaryContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryContext.prototype.LPAREN = function() {
    return this.getToken(rcParser.LPAREN, 0);
};

PrimaryContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
};

PrimaryContext.prototype.RPAREN = function() {
    return this.getToken(rcParser.RPAREN, 0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.PrimaryContext = PrimaryContext;

rcParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rcParser.RULE_primary);
    try {
        this.state = 82;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rcParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.identifier();
            break;
        case rcParser.IntegerLiteral:
        case rcParser.FloatingPointLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.literal();
            break;
        case rcParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 78;
            this.match(rcParser.LPAREN);
            this.state = 79;
            this.additiveExpression(0);
            this.state = 80;
            this.match(rcParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.IdentifierContext = IdentifierContext;

rcParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, rcParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(rcParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(rcParser.IntegerLiteral, 0);
};

LiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(rcParser.FloatingPointLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof rcListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.LiteralContext = LiteralContext;

rcParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, rcParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        _la = this._input.LA(1);
        if(!(_la===rcParser.IntegerLiteral || _la===rcParser.FloatingPointLiteral)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


rcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 5:
			return this.multiplicativeExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

rcParser.prototype.additiveExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

rcParser.prototype.multiplicativeExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.rcParser = rcParser;
