// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcVisitor = require('./rcVisitor').rcVisitor;

var myParser = require('./myParser').myParser;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001fB\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0006\u0002",
    "\u000e\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0019",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "\u001f\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u00041\n\u0004\f\u0004\u000e\u00044\u000b\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "=\n\u0006\f\u0006\u000e\u0006@\u000b\u0006\u0003\u0006\u0002\u0003\u0006",
    "\u0007\u0002\u0004\u0006\b\n\u0002\u0006\u0003\u0003\u001f\u001f\u0003",
    "\u0002\u000b\r\u0004\u0002\t\n\u000e\u0012\u0004\u0002\b\b\u0013\u001c",
    "\u0002G\u0002\r\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002",
    "\u0002\u0006(\u0003\u0002\u0002\u0002\b5\u0003\u0002\u0002\u0002\n9",
    "\u0003\u0002\u0002\u0002\f\u000e\u0005\u0004\u0003\u0002\r\f\u0003\u0002",
    "\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002",
    "\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0003\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0005\u0006\u0004\u0002\u0012\u0013\t\u0002",
    "\u0002\u0002\u0013\u0019\u0003\u0002\u0002\u0002\u0014\u0015\u0005\b",
    "\u0005\u0002\u0015\u0016\t\u0002\u0002\u0002\u0016\u0019\u0003\u0002",
    "\u0002\u0002\u0017\u0019\u0007\u001f\u0002\u0002\u0018\u0011\u0003\u0002",
    "\u0002\u0002\u0018\u0014\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002",
    "\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a\u001b\b\u0004",
    "\u0001\u0002\u001b\u001c\u0007\u001d\u0002\u0002\u001c\u001e\u0007\u0006",
    "\u0002\u0002\u001d\u001f\u0005\n\u0006\u0002\u001e\u001d\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f \u0003\u0002",
    "\u0002\u0002 )\u0007\u0007\u0002\u0002!)\u0007\u0003\u0002\u0002\")",
    "\u0007\u0004\u0002\u0002#)\u0007\u001d\u0002\u0002$%\u0007\u0006\u0002",
    "\u0002%&\u0005\u0006\u0004\u0002&\'\u0007\u0007\u0002\u0002\')\u0003",
    "\u0002\u0002\u0002(\u001a\u0003\u0002\u0002\u0002(!\u0003\u0002\u0002",
    "\u0002(\"\u0003\u0002\u0002\u0002(#\u0003\u0002\u0002\u0002($\u0003",
    "\u0002\u0002\u0002)2\u0003\u0002\u0002\u0002*+\f\t\u0002\u0002+,\t\u0003",
    "\u0002\u0002,1\u0005\u0006\u0004\n-.\f\b\u0002\u0002./\t\u0004\u0002",
    "\u0002/1\u0005\u0006\u0004\t0*\u0003\u0002\u0002\u00020-\u0003\u0002",
    "\u0002\u000214\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u00023\u0007\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u000256\u0007\u001d\u0002\u000267\t\u0005\u0002\u000278\u0005\u0006",
    "\u0004\u00028\t\u0003\u0002\u0002\u00029>\u0005\u0006\u0004\u0002:;",
    "\u0007\u0005\u0002\u0002;=\u0005\u0006\u0004\u0002<:\u0003\u0002\u0002",
    "\u0002=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002",
    "\u0002\u0002?\u000b\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "\t\u000f\u0018\u001e(02>"].join("");


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
                      "WhiteSpaces", "LineBreak" ];

var ruleNames =  [ "prog", "stat", "expr", "assigExpr", "args" ];

function rcParser (input) {
	myParser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

rcParser.prototype = Object.create(myParser.prototype);
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
rcParser.WhiteSpaces = 28;
rcParser.LineBreak = 29;

rcParser.RULE_prog = 0;
rcParser.RULE_stat = 1;
rcParser.RULE_expr = 2;
rcParser.RULE_assigExpr = 3;
rcParser.RULE_args = 4;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ProgContext = ProgContext;

rcParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rcParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 10;
            this.stat();
            this.state = 13; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier) | (1 << rcParser.LineBreak))) !== 0));
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


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatContext.prototype.LineBreak = function() {
    return this.getToken(rcParser.LineBreak, 0);
};

StatContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
};

StatContext.prototype.assigExpr = function() {
    return this.getTypedRuleContext(AssigExprContext,0);
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.StatContext = StatContext;

rcParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, rcParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 22;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 15;
            this.expr(0);
            this.state = 16;
            _la = this._input.LA(1);
            if(!(_la===rcParser.EOF || _la===rcParser.LineBreak)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 18;
            this.assigExpr();
            this.state = 19;
            _la = this._input.LA(1);
            if(!(_la===rcParser.EOF || _la===rcParser.LineBreak)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 21;
            this.match(rcParser.LineBreak);
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IdentifierContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierContext.prototype = Object.create(ExprContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

rcParser.IdentifierContext = IdentifierContext;

IdentifierContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};
IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncInvoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncInvoContext.prototype = Object.create(ExprContext.prototype);
FuncInvoContext.prototype.constructor = FuncInvoContext;

rcParser.FuncInvoContext = FuncInvoContext;

FuncInvoContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};

FuncInvoContext.prototype.LPAREN = function() {
    return this.getToken(rcParser.LPAREN, 0);
};

FuncInvoContext.prototype.RPAREN = function() {
    return this.getToken(rcParser.RPAREN, 0);
};

FuncInvoContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};
FuncInvoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitFuncInvo(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralContext.prototype = Object.create(ExprContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

rcParser.LiteralContext = LiteralContext;

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(rcParser.IntegerLiteral, 0);
};

LiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(rcParser.FloatingPointLiteral, 0);
};
LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OperationContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OperationContext.prototype = Object.create(ExprContext.prototype);
OperationContext.prototype.constructor = OperationContext;

rcParser.OperationContext = OperationContext;

OperationContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

OperationContext.prototype.MUL = function() {
    return this.getToken(rcParser.MUL, 0);
};

OperationContext.prototype.DIV = function() {
    return this.getToken(rcParser.DIV, 0);
};

OperationContext.prototype.MOD = function() {
    return this.getToken(rcParser.MOD, 0);
};

OperationContext.prototype.ADD = function() {
    return this.getToken(rcParser.ADD, 0);
};

OperationContext.prototype.SUB = function() {
    return this.getToken(rcParser.SUB, 0);
};

OperationContext.prototype.BITAND = function() {
    return this.getToken(rcParser.BITAND, 0);
};

OperationContext.prototype.BITOR = function() {
    return this.getToken(rcParser.BITOR, 0);
};

OperationContext.prototype.CARET = function() {
    return this.getToken(rcParser.CARET, 0);
};

OperationContext.prototype.LSHIFT = function() {
    return this.getToken(rcParser.LSHIFT, 0);
};

OperationContext.prototype.RSHIFT = function() {
    return this.getToken(rcParser.RSHIFT, 0);
};
OperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PriorityExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PriorityExprContext.prototype = Object.create(ExprContext.prototype);
PriorityExprContext.prototype.constructor = PriorityExprContext;

rcParser.PriorityExprContext = PriorityExprContext;

PriorityExprContext.prototype.LPAREN = function() {
    return this.getToken(rcParser.LPAREN, 0);
};

PriorityExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PriorityExprContext.prototype.RPAREN = function() {
    return this.getToken(rcParser.RPAREN, 0);
};
PriorityExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitPriorityExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



rcParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, rcParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FuncInvoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 25;
            this.match(rcParser.Identifier);
            this.state = 26;
            this.match(rcParser.LPAREN);
            this.state = 28;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier))) !== 0)) {
                this.state = 27;
                this.args();
            }

            this.state = 30;
            this.match(rcParser.RPAREN);
            break;

        case 2:
            localctx = new LiteralContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 31;
            this.match(rcParser.IntegerLiteral);
            break;

        case 3:
            localctx = new LiteralContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 32;
            this.match(rcParser.FloatingPointLiteral);
            break;

        case 4:
            localctx = new IdentifierContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 33;
            this.match(rcParser.Identifier);
            break;

        case 5:
            localctx = new PriorityExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 34;
            this.match(rcParser.LPAREN);
            this.state = 35;
            this.expr(0);
            this.state = 36;
            this.match(rcParser.RPAREN);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 48;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 46;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new OperationContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 40;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 41;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.MUL) | (1 << rcParser.DIV) | (1 << rcParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 42;
                    this.expr(8);
                    break;

                case 2:
                    localctx = new OperationContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 43;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 44;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ADD) | (1 << rcParser.SUB) | (1 << rcParser.BITAND) | (1 << rcParser.BITOR) | (1 << rcParser.CARET) | (1 << rcParser.LSHIFT) | (1 << rcParser.RSHIFT))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 45;
                    this.expr(7);
                    break;

                } 
            }
            this.state = 50;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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


function AssigExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_assigExpr;
    this.op = null; // Token
    return this;
}

AssigExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssigExprContext.prototype.constructor = AssigExprContext;

AssigExprContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};

AssigExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssigExprContext.prototype.ASSIGN = function() {
    return this.getToken(rcParser.ASSIGN, 0);
};

AssigExprContext.prototype.ADD_ASSIGN = function() {
    return this.getToken(rcParser.ADD_ASSIGN, 0);
};

AssigExprContext.prototype.SUB_ASSIGN = function() {
    return this.getToken(rcParser.SUB_ASSIGN, 0);
};

AssigExprContext.prototype.MUL_ASSIGN = function() {
    return this.getToken(rcParser.MUL_ASSIGN, 0);
};

AssigExprContext.prototype.DIV_ASSIGN = function() {
    return this.getToken(rcParser.DIV_ASSIGN, 0);
};

AssigExprContext.prototype.MOD_ASSIGN = function() {
    return this.getToken(rcParser.MOD_ASSIGN, 0);
};

AssigExprContext.prototype.AND_ASSIGN = function() {
    return this.getToken(rcParser.AND_ASSIGN, 0);
};

AssigExprContext.prototype.OR_ASSIGN = function() {
    return this.getToken(rcParser.OR_ASSIGN, 0);
};

AssigExprContext.prototype.XOR_ASSIGN = function() {
    return this.getToken(rcParser.XOR_ASSIGN, 0);
};

AssigExprContext.prototype.LSHIFT_ASSIGN = function() {
    return this.getToken(rcParser.LSHIFT_ASSIGN, 0);
};

AssigExprContext.prototype.RSHIFT_ASSIGN = function() {
    return this.getToken(rcParser.RSHIFT_ASSIGN, 0);
};

AssigExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitAssigExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.AssigExprContext = AssigExprContext;

rcParser.prototype.assigExpr = function() {

    var localctx = new AssigExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, rcParser.RULE_assigExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(rcParser.Identifier);
        this.state = 52;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ASSIGN) | (1 << rcParser.ADD_ASSIGN) | (1 << rcParser.SUB_ASSIGN) | (1 << rcParser.MUL_ASSIGN) | (1 << rcParser.DIV_ASSIGN) | (1 << rcParser.MOD_ASSIGN) | (1 << rcParser.AND_ASSIGN) | (1 << rcParser.OR_ASSIGN) | (1 << rcParser.XOR_ASSIGN) | (1 << rcParser.LSHIFT_ASSIGN) | (1 << rcParser.RSHIFT_ASSIGN))) !== 0))) {
            localctx.op = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 53;
        this.expr(0);
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


function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArgsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rcParser.COMMA);
    } else {
        return this.getToken(rcParser.COMMA, i);
    }
};


ArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ArgsContext = ArgsContext;

rcParser.prototype.args = function() {

    var localctx = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, rcParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.expr(0);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.COMMA) {
            this.state = 56;
            this.match(rcParser.COMMA);
            this.state = 57;
            this.expr(0);
            this.state = 62;
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


rcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

rcParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.rcParser = rcParser;
