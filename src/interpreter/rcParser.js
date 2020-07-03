// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcVisitor = require('./rcVisitor').rcVisitor;

var myParser = require('./myParser').myParser;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0006\u0002",
    "\u0018\n\u0002\r\u0002\u000e\u0002\u0019\u0003\u0002\u0005\u0002\u001d",
    "\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    ")\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u00042\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004:\n\u0004",
    "\f\u0004\u000e\u0004=\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005D\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "M\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007\n\\\n\n\f\n",
    "\u000e\n_\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0003\u0006",
    "\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\b\u0003\u0003",
    "$$\u0003\u0002\u0010\u0012\u0004\u0002\u000e\u000f\u0013\u0017\u0003",
    "\u0002\u000e\u000f\u0003\u0002\u0003\u0006\u0004\u0002\r\r\u0018!\u0002",
    "g\u0002\u001c\u0003\u0002\u0002\u0002\u0004(\u0003\u0002\u0002\u0002",
    "\u00061\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nE\u0003",
    "\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eP\u0003\u0002\u0002",
    "\u0002\u0010T\u0003\u0002\u0002\u0002\u0012X\u0003\u0002\u0002\u0002",
    "\u0014`\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0002",
    "\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002",
    "\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002",
    "\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u001d\u0007\u0002\u0002\u0003",
    "\u001c\u0017\u0003\u0002\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002",
    "\u001d\u0003\u0003\u0002\u0002\u0002\u001e\u001f\u0005\u0006\u0004\u0002",
    "\u001f \t\u0002\u0002\u0002 )\u0003\u0002\u0002\u0002!\"\u0005\u0010",
    "\t\u0002\"#\t\u0002\u0002\u0002#)\u0003\u0002\u0002\u0002$%\u0005\b",
    "\u0005\u0002%&\t\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002\')\u0007",
    "$\u0002\u0002(\u001e\u0003\u0002\u0002\u0002(!\u0003\u0002\u0002\u0002",
    "($\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0005\u0003\u0002",
    "\u0002\u0002*+\b\u0004\u0001\u0002+2\u0005\n\u0006\u0002,2\u0005\f\u0007",
    "\u0002-2\u0007\b\u0002\u0002.2\u0007\t\u0002\u0002/2\u0005\u0014\u000b",
    "\u000202\u0005\u000e\b\u00021*\u0003\u0002\u0002\u00021,\u0003\u0002",
    "\u0002\u00021-\u0003\u0002\u0002\u00021.\u0003\u0002\u0002\u00021/\u0003",
    "\u0002\u0002\u000210\u0003\u0002\u0002\u00022;\u0003\u0002\u0002\u0002",
    "34\f\t\u0002\u000245\t\u0003\u0002\u00025:\u0005\u0006\u0004\n67\f\b",
    "\u0002\u000278\t\u0004\u0002\u00028:\u0005\u0006\u0004\t93\u0003\u0002",
    "\u0002\u000296\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003",
    "\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\u0007\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002>?\u0007\u0007\u0002\u0002?@\t\u0005",
    "\u0002\u0002@A\u0007\b\u0002\u0002AD\t\u0006\u0002\u0002BD\u0007\u0007",
    "\u0002\u0002C>\u0003\u0002\u0002\u0002CB\u0003\u0002\u0002\u0002D\t",
    "\u0003\u0002\u0002\u0002EF\u0005\b\u0005\u0002FG\u0007\u000f\u0002\u0002",
    "GH\u0005\b\u0005\u0002H\u000b\u0003\u0002\u0002\u0002IJ\u0005\u0014",
    "\u000b\u0002JL\u0007\u000b\u0002\u0002KM\u0005\u0012\n\u0002LK\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NO\u0007\f\u0002\u0002O\r\u0003\u0002\u0002\u0002PQ\u0007\u000b\u0002",
    "\u0002QR\u0005\u0006\u0004\u0002RS\u0007\f\u0002\u0002S\u000f\u0003",
    "\u0002\u0002\u0002TU\u0005\u0014\u000b\u0002UV\t\u0007\u0002\u0002V",
    "W\u0005\u0006\u0004\u0002W\u0011\u0003\u0002\u0002\u0002X]\u0005\u0006",
    "\u0004\u0002YZ\u0007\n\u0002\u0002Z\\\u0005\u0006\u0004\u0002[Y\u0003",
    "\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002",
    "]^\u0003\u0002\u0002\u0002^\u0013\u0003\u0002\u0002\u0002_]\u0003\u0002",
    "\u0002\u0002`a\u0007\"\u0002\u0002a\u0015\u0003\u0002\u0002\u0002\u000b",
    "\u0019\u001c(19;CL]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'y'", "'m'", "'w'", "'d'", null, null, null, 
                     "','", "'('", "')'", "'='", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'&'", "'|'", "'^'", "'<<'", "'>>'", "'+='", 
                     "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", 
                     "'<<='", "'>>='" ];

var symbolicNames = [ null, null, null, null, null, "DateLiteral", "IntegerLiteral", 
                      "FloatingPointLiteral", "COMMA", "LPAREN", "RPAREN", 
                      "ASSIGN", "ADD", "SUB", "MUL", "DIV", "MOD", "BITAND", 
                      "BITOR", "CARET", "LSHIFT", "RSHIFT", "ADD_ASSIGN", 
                      "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
                      "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LSHIFT_ASSIGN", 
                      "RSHIFT_ASSIGN", "Identifier", "WhiteSpaces", "LineBreak" ];

var ruleNames =  [ "prog", "stat", "expr", "dateOp", "dateDiff", "funcInvo", 
                   "priorityExpr", "assigExpr", "args", "identifier" ];

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
rcParser.T__0 = 1;
rcParser.T__1 = 2;
rcParser.T__2 = 3;
rcParser.T__3 = 4;
rcParser.DateLiteral = 5;
rcParser.IntegerLiteral = 6;
rcParser.FloatingPointLiteral = 7;
rcParser.COMMA = 8;
rcParser.LPAREN = 9;
rcParser.RPAREN = 10;
rcParser.ASSIGN = 11;
rcParser.ADD = 12;
rcParser.SUB = 13;
rcParser.MUL = 14;
rcParser.DIV = 15;
rcParser.MOD = 16;
rcParser.BITAND = 17;
rcParser.BITOR = 18;
rcParser.CARET = 19;
rcParser.LSHIFT = 20;
rcParser.RSHIFT = 21;
rcParser.ADD_ASSIGN = 22;
rcParser.SUB_ASSIGN = 23;
rcParser.MUL_ASSIGN = 24;
rcParser.DIV_ASSIGN = 25;
rcParser.MOD_ASSIGN = 26;
rcParser.AND_ASSIGN = 27;
rcParser.OR_ASSIGN = 28;
rcParser.XOR_ASSIGN = 29;
rcParser.LSHIFT_ASSIGN = 30;
rcParser.RSHIFT_ASSIGN = 31;
rcParser.Identifier = 32;
rcParser.WhiteSpaces = 33;
rcParser.LineBreak = 34;

rcParser.RULE_prog = 0;
rcParser.RULE_stat = 1;
rcParser.RULE_expr = 2;
rcParser.RULE_dateOp = 3;
rcParser.RULE_dateDiff = 4;
rcParser.RULE_funcInvo = 5;
rcParser.RULE_priorityExpr = 6;
rcParser.RULE_assigExpr = 7;
rcParser.RULE_args = 8;
rcParser.RULE_identifier = 9;


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

ProgContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
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
        this.state = 26;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rcParser.DateLiteral:
        case rcParser.IntegerLiteral:
        case rcParser.FloatingPointLiteral:
        case rcParser.LPAREN:
        case rcParser.Identifier:
        case rcParser.LineBreak:
            this.enterOuterAlt(localctx, 1);
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 20;
                this.stat();
                this.state = 23; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (rcParser.DateLiteral - 5)) | (1 << (rcParser.IntegerLiteral - 5)) | (1 << (rcParser.FloatingPointLiteral - 5)) | (1 << (rcParser.LPAREN - 5)) | (1 << (rcParser.Identifier - 5)) | (1 << (rcParser.LineBreak - 5)))) !== 0));
            break;
        case rcParser.EOF:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.match(rcParser.EOF);
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

StatContext.prototype.dateOp = function() {
    return this.getTypedRuleContext(DateOpContext,0);
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
        this.state = 38;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.expr(0);
            this.state = 29;
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
            this.state = 31;
            this.assigExpr();
            this.state = 32;
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
            this.state = 34;
            this.dateOp();
            this.state = 35;
            _la = this._input.LA(1);
            if(!(_la===rcParser.EOF || _la===rcParser.LineBreak)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 37;
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
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.dateDiff = function() {
    return this.getTypedRuleContext(DateDiffContext,0);
};

ExprContext.prototype.funcInvo = function() {
    return this.getTypedRuleContext(FuncInvoContext,0);
};

ExprContext.prototype.IntegerLiteral = function() {
    return this.getToken(rcParser.IntegerLiteral, 0);
};

ExprContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(rcParser.FloatingPointLiteral, 0);
};

ExprContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExprContext.prototype.priorityExpr = function() {
    return this.getTypedRuleContext(PriorityExprContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.MUL = function() {
    return this.getToken(rcParser.MUL, 0);
};

ExprContext.prototype.DIV = function() {
    return this.getToken(rcParser.DIV, 0);
};

ExprContext.prototype.MOD = function() {
    return this.getToken(rcParser.MOD, 0);
};

ExprContext.prototype.ADD = function() {
    return this.getToken(rcParser.ADD, 0);
};

ExprContext.prototype.SUB = function() {
    return this.getToken(rcParser.SUB, 0);
};

ExprContext.prototype.BITAND = function() {
    return this.getToken(rcParser.BITAND, 0);
};

ExprContext.prototype.BITOR = function() {
    return this.getToken(rcParser.BITOR, 0);
};

ExprContext.prototype.CARET = function() {
    return this.getToken(rcParser.CARET, 0);
};

ExprContext.prototype.LSHIFT = function() {
    return this.getToken(rcParser.LSHIFT, 0);
};

ExprContext.prototype.RSHIFT = function() {
    return this.getToken(rcParser.RSHIFT, 0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitExpr(this);
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
        this.state = 47;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 41;
            this.dateDiff();
            break;

        case 2:
            this.state = 42;
            this.funcInvo();
            break;

        case 3:
            this.state = 43;
            this.match(rcParser.IntegerLiteral);
            break;

        case 4:
            this.state = 44;
            this.match(rcParser.FloatingPointLiteral);
            break;

        case 5:
            this.state = 45;
            this.identifier();
            break;

        case 6:
            this.state = 46;
            this.priorityExpr();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 57;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 55;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 49;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 50;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.MUL) | (1 << rcParser.DIV) | (1 << rcParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 51;
                    this.expr(8);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 52;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 53;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ADD) | (1 << rcParser.SUB) | (1 << rcParser.BITAND) | (1 << rcParser.BITOR) | (1 << rcParser.CARET) | (1 << rcParser.LSHIFT) | (1 << rcParser.RSHIFT))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 54;
                    this.expr(7);
                    break;

                } 
            }
            this.state = 59;
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


function DateOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_dateOp;
    this.op = null; // Token
    return this;
}

DateOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateOpContext.prototype.constructor = DateOpContext;

DateOpContext.prototype.DateLiteral = function() {
    return this.getToken(rcParser.DateLiteral, 0);
};

DateOpContext.prototype.IntegerLiteral = function() {
    return this.getToken(rcParser.IntegerLiteral, 0);
};

DateOpContext.prototype.ADD = function() {
    return this.getToken(rcParser.ADD, 0);
};

DateOpContext.prototype.SUB = function() {
    return this.getToken(rcParser.SUB, 0);
};

DateOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitDateOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.DateOpContext = DateOpContext;

rcParser.prototype.dateOp = function() {

    var localctx = new DateOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, rcParser.RULE_dateOp);
    var _la = 0; // Token type
    try {
        this.state = 65;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.match(rcParser.DateLiteral);
            this.state = 61;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===rcParser.ADD || _la===rcParser.SUB)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 62;
            this.match(rcParser.IntegerLiteral);
            this.state = 63;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.T__0) | (1 << rcParser.T__1) | (1 << rcParser.T__2) | (1 << rcParser.T__3))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.match(rcParser.DateLiteral);
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


function DateDiffContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_dateDiff;
    return this;
}

DateDiffContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateDiffContext.prototype.constructor = DateDiffContext;

DateDiffContext.prototype.dateOp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DateOpContext);
    } else {
        return this.getTypedRuleContext(DateOpContext,i);
    }
};

DateDiffContext.prototype.SUB = function() {
    return this.getToken(rcParser.SUB, 0);
};

DateDiffContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitDateDiff(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.DateDiffContext = DateDiffContext;

rcParser.prototype.dateDiff = function() {

    var localctx = new DateDiffContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, rcParser.RULE_dateDiff);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.dateOp();
        this.state = 68;
        this.match(rcParser.SUB);
        this.state = 69;
        this.dateOp();
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


function FuncInvoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_funcInvo;
    return this;
}

FuncInvoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncInvoContext.prototype.constructor = FuncInvoContext;

FuncInvoContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
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




rcParser.FuncInvoContext = FuncInvoContext;

rcParser.prototype.funcInvo = function() {

    var localctx = new FuncInvoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, rcParser.RULE_funcInvo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.identifier();
        this.state = 72;
        this.match(rcParser.LPAREN);
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (rcParser.DateLiteral - 5)) | (1 << (rcParser.IntegerLiteral - 5)) | (1 << (rcParser.FloatingPointLiteral - 5)) | (1 << (rcParser.LPAREN - 5)) | (1 << (rcParser.Identifier - 5)))) !== 0)) {
            this.state = 73;
            this.args();
        }

        this.state = 76;
        this.match(rcParser.RPAREN);
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


function PriorityExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_priorityExpr;
    return this;
}

PriorityExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PriorityExprContext.prototype.constructor = PriorityExprContext;

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




rcParser.PriorityExprContext = PriorityExprContext;

rcParser.prototype.priorityExpr = function() {

    var localctx = new PriorityExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rcParser.RULE_priorityExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(rcParser.LPAREN);
        this.state = 79;
        this.expr(0);
        this.state = 80;
        this.match(rcParser.RPAREN);
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

AssigExprContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
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
    this.enterRule(localctx, 14, rcParser.RULE_assigExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.identifier();
        this.state = 83;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ASSIGN) | (1 << rcParser.ADD_ASSIGN) | (1 << rcParser.SUB_ASSIGN) | (1 << rcParser.MUL_ASSIGN) | (1 << rcParser.DIV_ASSIGN) | (1 << rcParser.MOD_ASSIGN) | (1 << rcParser.AND_ASSIGN) | (1 << rcParser.OR_ASSIGN) | (1 << rcParser.XOR_ASSIGN) | (1 << rcParser.LSHIFT_ASSIGN) | (1 << rcParser.RSHIFT_ASSIGN))) !== 0))) {
            localctx.op = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 84;
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
    this.enterRule(localctx, 16, rcParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.expr(0);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.COMMA) {
            this.state = 87;
            this.match(rcParser.COMMA);
            this.state = 88;
            this.expr(0);
            this.state = 93;
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
        this.state = 94;
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
