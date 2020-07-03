// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcVisitor = require('./rcVisitor').rcVisitor;

var myParser = require('./myParser').myParser;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$\u0089\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0006\u0002\u001e\n\u0002\r\u0002",
    "\u000e\u0002\u001f\u0003\u0002\u0005\u0002#\n\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003/\n\u0003\u0003\u0004\u0003",
    "\u0004\u0005\u00043\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005=",
    "\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005E\n\u0005\f\u0005\u000e\u0005H\u000b\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006P\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007W\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0005\t`\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000bo\n\u000b\u0003\f\u0003\f\u0003",
    "\f\u0007\ft\n\f\f\f\u000e\fw\u000b\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0087",
    "\n\u000e\u0003\u000e\u0002\u0003\b\u000f\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u0002\b\u0003\u0003$$\u0003\u0002",
    "\u0010\u0012\u0004\u0002\u000e\u000f\u0013\u0017\u0003\u0002\u000e\u000f",
    "\u0003\u0002\u0003\u0006\u0004\u0002\r\r\u0018!\u0002\u0093\u0002\"",
    "\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002\u0002\u00062\u0003",
    "\u0002\u0002\u0002\b<\u0003\u0002\u0002\u0002\nO\u0003\u0002\u0002\u0002",
    "\fV\u0003\u0002\u0002\u0002\u000eX\u0003\u0002\u0002\u0002\u0010\\\u0003",
    "\u0002\u0002\u0002\u0012c\u0003\u0002\u0002\u0002\u0014n\u0003\u0002",
    "\u0002\u0002\u0016p\u0003\u0002\u0002\u0002\u0018x\u0003\u0002\u0002",
    "\u0002\u001a\u0086\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003",
    "\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 #\u0003\u0002\u0002\u0002!#\u0007\u0002\u0002\u0003\"\u001d\u0003",
    "\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002#\u0003\u0003\u0002\u0002",
    "\u0002$%\u0005\u0006\u0004\u0002%&\t\u0002\u0002\u0002&/\u0003\u0002",
    "\u0002\u0002\'(\u0005\u0014\u000b\u0002()\t\u0002\u0002\u0002)/\u0003",
    "\u0002\u0002\u0002*+\u0005\n\u0006\u0002+,\t\u0002\u0002\u0002,/\u0003",
    "\u0002\u0002\u0002-/\u0007$\u0002\u0002.$\u0003\u0002\u0002\u0002.\'",
    "\u0003\u0002\u0002\u0002.*\u0003\u0002\u0002\u0002.-\u0003\u0002\u0002",
    "\u0002/\u0005\u0003\u0002\u0002\u000203\u0005\b\u0005\u000213\u0005",
    "\n\u0006\u000220\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u00023",
    "\u0007\u0003\u0002\u0002\u000245\b\u0005\u0001\u00025=\u0005\f\u0007",
    "\u00026=\u0005\u0010\t\u00027=\u0007\b\u0002\u00028=\u0007\t\u0002\u0002",
    "9=\u0005\u0018\r\u0002:=\u0005\u0012\n\u0002;=\u0005\u001a\u000e\u0002",
    "<4\u0003\u0002\u0002\u0002<6\u0003\u0002\u0002\u0002<7\u0003\u0002\u0002",
    "\u0002<8\u0003\u0002\u0002\u0002<9\u0003\u0002\u0002\u0002<:\u0003\u0002",
    "\u0002\u0002<;\u0003\u0002\u0002\u0002=F\u0003\u0002\u0002\u0002>?\f",
    "\n\u0002\u0002?@\t\u0003\u0002\u0002@E\u0005\b\u0005\u000bAB\f\t\u0002",
    "\u0002BC\t\u0004\u0002\u0002CE\u0005\b\u0005\nD>\u0003\u0002\u0002\u0002",
    "DA\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002G\t\u0003\u0002\u0002\u0002HF\u0003",
    "\u0002\u0002\u0002IJ\u0007\u0007\u0002\u0002JK\t\u0005\u0002\u0002K",
    "L\u0005\b\u0005\u0002LM\t\u0006\u0002\u0002MP\u0003\u0002\u0002\u0002",
    "NP\u0007\u0007\u0002\u0002OI\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002",
    "\u0002P\u000b\u0003\u0002\u0002\u0002QR\u0005\n\u0006\u0002RS\u0007",
    "\u000f\u0002\u0002ST\u0005\n\u0006\u0002TW\u0003\u0002\u0002\u0002U",
    "W\u0005\u000e\b\u0002VQ\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002",
    "\u0002W\r\u0003\u0002\u0002\u0002XY\u0007\u000b\u0002\u0002YZ\u0005",
    "\f\u0007\u0002Z[\u0007\f\u0002\u0002[\u000f\u0003\u0002\u0002\u0002",
    "\\]\u0007\"\u0002\u0002]_\u0007\u000b\u0002\u0002^`\u0005\u0016\f\u0002",
    "_^\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ab\u0007\f\u0002\u0002b\u0011\u0003\u0002\u0002\u0002cd\u0007",
    "\u000b\u0002\u0002de\u0005\b\u0005\u0002ef\u0007\f\u0002\u0002f\u0013",
    "\u0003\u0002\u0002\u0002gh\u0007\"\u0002\u0002hi\u0007\r\u0002\u0002",
    "io\u0005\b\u0005\u0002jk\u0005\u0018\r\u0002kl\t\u0007\u0002\u0002l",
    "m\u0005\b\u0005\u0002mo\u0003\u0002\u0002\u0002ng\u0003\u0002\u0002",
    "\u0002nj\u0003\u0002\u0002\u0002o\u0015\u0003\u0002\u0002\u0002pu\u0005",
    "\u0006\u0004\u0002qr\u0007\n\u0002\u0002rt\u0005\u0006\u0004\u0002s",
    "q\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002v\u0017\u0003\u0002\u0002\u0002wu\u0003",
    "\u0002\u0002\u0002xy\u0007\"\u0002\u0002y\u0019\u0003\u0002\u0002\u0002",
    "z{\u0007\u000f\u0002\u0002{\u0087\u0005\f\u0007\u0002|}\u0007\u000f",
    "\u0002\u0002}\u0087\u0005\u0010\t\u0002~\u007f\u0007\u000f\u0002\u0002",
    "\u007f\u0087\u0007\b\u0002\u0002\u0080\u0081\u0007\u000f\u0002\u0002",
    "\u0081\u0087\u0007\t\u0002\u0002\u0082\u0083\u0007\u000f\u0002\u0002",
    "\u0083\u0087\u0005\u0018\r\u0002\u0084\u0085\u0007\u000f\u0002\u0002",
    "\u0085\u0087\u0005\u0012\n\u0002\u0086z\u0003\u0002\u0002\u0002\u0086",
    "|\u0003\u0002\u0002\u0002\u0086~\u0003\u0002\u0002\u0002\u0086\u0080",
    "\u0003\u0002\u0002\u0002\u0086\u0082\u0003\u0002\u0002\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0087\u001b\u0003\u0002\u0002\u0002\u000f\u001f",
    "\".2<DFOV_nu\u0086"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'y'", "'m'", "'w'", "'d'", null, null, null, 
                     "','", "'('", "')'", "'='", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'&'", "'|'", "'^'", "'<<'", "'>>'", "'+='", 
                     "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", 
                     "'<<='", "'>>='" ];

var symbolicNames = [ null, null, null, null, null, "DateLiteral", "IntegerLiteral", 
                      "FloatingPointLiteral", "Comma", "LParen", "RParen", 
                      "Assign", "Add", "Sub", "Mul", "Div", "Mod", "BitAnd", 
                      "BitOr", "Caret", "LShift", "RShift", "Add_Assign", 
                      "Sub_Assign", "Mul_Assign", "Div_Assign", "Mod_Assign", 
                      "And_Assign", "Or_Assign", "XOr_Assign", "LShift_Assign", 
                      "RShift_Assign", "Identifier", "WhiteSpaces", "LineBreak" ];

var ruleNames =  [ "prog", "stat", "value", "expr", "dateOp", "dateDiff", 
                   "priorityDateDiff", "funcInvo", "priorityExpr", "assigExpr", 
                   "args", "varVal", "negativeVal" ];

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
rcParser.Comma = 8;
rcParser.LParen = 9;
rcParser.RParen = 10;
rcParser.Assign = 11;
rcParser.Add = 12;
rcParser.Sub = 13;
rcParser.Mul = 14;
rcParser.Div = 15;
rcParser.Mod = 16;
rcParser.BitAnd = 17;
rcParser.BitOr = 18;
rcParser.Caret = 19;
rcParser.LShift = 20;
rcParser.RShift = 21;
rcParser.Add_Assign = 22;
rcParser.Sub_Assign = 23;
rcParser.Mul_Assign = 24;
rcParser.Div_Assign = 25;
rcParser.Mod_Assign = 26;
rcParser.And_Assign = 27;
rcParser.Or_Assign = 28;
rcParser.XOr_Assign = 29;
rcParser.LShift_Assign = 30;
rcParser.RShift_Assign = 31;
rcParser.Identifier = 32;
rcParser.WhiteSpaces = 33;
rcParser.LineBreak = 34;

rcParser.RULE_prog = 0;
rcParser.RULE_stat = 1;
rcParser.RULE_value = 2;
rcParser.RULE_expr = 3;
rcParser.RULE_dateOp = 4;
rcParser.RULE_dateDiff = 5;
rcParser.RULE_priorityDateDiff = 6;
rcParser.RULE_funcInvo = 7;
rcParser.RULE_priorityExpr = 8;
rcParser.RULE_assigExpr = 9;
rcParser.RULE_args = 10;
rcParser.RULE_varVal = 11;
rcParser.RULE_negativeVal = 12;


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
        this.state = 32;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rcParser.DateLiteral:
        case rcParser.IntegerLiteral:
        case rcParser.FloatingPointLiteral:
        case rcParser.LParen:
        case rcParser.Sub:
        case rcParser.Identifier:
        case rcParser.LineBreak:
            this.enterOuterAlt(localctx, 1);
            this.state = 27; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 26;
                this.stat();
                this.state = 29; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (rcParser.DateLiteral - 5)) | (1 << (rcParser.IntegerLiteral - 5)) | (1 << (rcParser.FloatingPointLiteral - 5)) | (1 << (rcParser.LParen - 5)) | (1 << (rcParser.Sub - 5)) | (1 << (rcParser.Identifier - 5)) | (1 << (rcParser.LineBreak - 5)))) !== 0));
            break;
        case rcParser.EOF:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
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

StatContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
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
        this.state = 44;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.value();
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

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            this.assigExpr();
            this.state = 38;
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
            this.state = 40;
            this.dateOp();
            this.state = 41;
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
            this.state = 43;
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


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ValueContext.prototype.dateOp = function() {
    return this.getTypedRuleContext(DateOpContext,0);
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ValueContext = ValueContext;

rcParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, rcParser.RULE_value);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            this.dateOp();
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

ExprContext.prototype.varVal = function() {
    return this.getTypedRuleContext(VarValContext,0);
};

ExprContext.prototype.priorityExpr = function() {
    return this.getTypedRuleContext(PriorityExprContext,0);
};

ExprContext.prototype.negativeVal = function() {
    return this.getTypedRuleContext(NegativeValContext,0);
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

ExprContext.prototype.Mul = function() {
    return this.getToken(rcParser.Mul, 0);
};

ExprContext.prototype.Div = function() {
    return this.getToken(rcParser.Div, 0);
};

ExprContext.prototype.Mod = function() {
    return this.getToken(rcParser.Mod, 0);
};

ExprContext.prototype.Add = function() {
    return this.getToken(rcParser.Add, 0);
};

ExprContext.prototype.Sub = function() {
    return this.getToken(rcParser.Sub, 0);
};

ExprContext.prototype.BitAnd = function() {
    return this.getToken(rcParser.BitAnd, 0);
};

ExprContext.prototype.BitOr = function() {
    return this.getToken(rcParser.BitOr, 0);
};

ExprContext.prototype.Caret = function() {
    return this.getToken(rcParser.Caret, 0);
};

ExprContext.prototype.LShift = function() {
    return this.getToken(rcParser.LShift, 0);
};

ExprContext.prototype.RShift = function() {
    return this.getToken(rcParser.RShift, 0);
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
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, rcParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 51;
            this.dateDiff();
            break;

        case 2:
            this.state = 52;
            this.funcInvo();
            break;

        case 3:
            this.state = 53;
            this.match(rcParser.IntegerLiteral);
            break;

        case 4:
            this.state = 54;
            this.match(rcParser.FloatingPointLiteral);
            break;

        case 5:
            this.state = 55;
            this.varVal();
            break;

        case 6:
            this.state = 56;
            this.priorityExpr();
            break;

        case 7:
            this.state = 57;
            this.negativeVal();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 68;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 66;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 60;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 61;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.Mul) | (1 << rcParser.Div) | (1 << rcParser.Mod))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 62;
                    this.expr(9);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 63;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 64;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.Add) | (1 << rcParser.Sub) | (1 << rcParser.BitAnd) | (1 << rcParser.BitOr) | (1 << rcParser.Caret) | (1 << rcParser.LShift) | (1 << rcParser.RShift))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 65;
                    this.expr(8);
                    break;

                } 
            }
            this.state = 70;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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

DateOpContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

DateOpContext.prototype.Add = function() {
    return this.getToken(rcParser.Add, 0);
};

DateOpContext.prototype.Sub = function() {
    return this.getToken(rcParser.Sub, 0);
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
    this.enterRule(localctx, 8, rcParser.RULE_dateOp);
    var _la = 0; // Token type
    try {
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 71;
            this.match(rcParser.DateLiteral);
            this.state = 72;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===rcParser.Add || _la===rcParser.Sub)) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 73;
            this.expr(0);
            this.state = 74;
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
            this.state = 76;
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

DateDiffContext.prototype.Sub = function() {
    return this.getToken(rcParser.Sub, 0);
};

DateDiffContext.prototype.priorityDateDiff = function() {
    return this.getTypedRuleContext(PriorityDateDiffContext,0);
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
    this.enterRule(localctx, 10, rcParser.RULE_dateDiff);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rcParser.DateLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 79;
            this.dateOp();
            this.state = 80;
            this.match(rcParser.Sub);
            this.state = 81;
            this.dateOp();
            break;
        case rcParser.LParen:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.priorityDateDiff();
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


function PriorityDateDiffContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_priorityDateDiff;
    return this;
}

PriorityDateDiffContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PriorityDateDiffContext.prototype.constructor = PriorityDateDiffContext;

PriorityDateDiffContext.prototype.LParen = function() {
    return this.getToken(rcParser.LParen, 0);
};

PriorityDateDiffContext.prototype.dateDiff = function() {
    return this.getTypedRuleContext(DateDiffContext,0);
};

PriorityDateDiffContext.prototype.RParen = function() {
    return this.getToken(rcParser.RParen, 0);
};

PriorityDateDiffContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitPriorityDateDiff(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.PriorityDateDiffContext = PriorityDateDiffContext;

rcParser.prototype.priorityDateDiff = function() {

    var localctx = new PriorityDateDiffContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rcParser.RULE_priorityDateDiff);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(rcParser.LParen);
        this.state = 87;
        this.dateDiff();
        this.state = 88;
        this.match(rcParser.RParen);
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

FuncInvoContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};

FuncInvoContext.prototype.LParen = function() {
    return this.getToken(rcParser.LParen, 0);
};

FuncInvoContext.prototype.RParen = function() {
    return this.getToken(rcParser.RParen, 0);
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
    this.enterRule(localctx, 14, rcParser.RULE_funcInvo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(rcParser.Identifier);
        this.state = 91;
        this.match(rcParser.LParen);
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (rcParser.DateLiteral - 5)) | (1 << (rcParser.IntegerLiteral - 5)) | (1 << (rcParser.FloatingPointLiteral - 5)) | (1 << (rcParser.LParen - 5)) | (1 << (rcParser.Sub - 5)) | (1 << (rcParser.Identifier - 5)))) !== 0)) {
            this.state = 92;
            this.args();
        }

        this.state = 95;
        this.match(rcParser.RParen);
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

PriorityExprContext.prototype.LParen = function() {
    return this.getToken(rcParser.LParen, 0);
};

PriorityExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PriorityExprContext.prototype.RParen = function() {
    return this.getToken(rcParser.RParen, 0);
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
    this.enterRule(localctx, 16, rcParser.RULE_priorityExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(rcParser.LParen);
        this.state = 98;
        this.expr(0);
        this.state = 99;
        this.match(rcParser.RParen);
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

AssigExprContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};

AssigExprContext.prototype.Assign = function() {
    return this.getToken(rcParser.Assign, 0);
};

AssigExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssigExprContext.prototype.varVal = function() {
    return this.getTypedRuleContext(VarValContext,0);
};

AssigExprContext.prototype.Add_Assign = function() {
    return this.getToken(rcParser.Add_Assign, 0);
};

AssigExprContext.prototype.Sub_Assign = function() {
    return this.getToken(rcParser.Sub_Assign, 0);
};

AssigExprContext.prototype.Mul_Assign = function() {
    return this.getToken(rcParser.Mul_Assign, 0);
};

AssigExprContext.prototype.Div_Assign = function() {
    return this.getToken(rcParser.Div_Assign, 0);
};

AssigExprContext.prototype.Mod_Assign = function() {
    return this.getToken(rcParser.Mod_Assign, 0);
};

AssigExprContext.prototype.And_Assign = function() {
    return this.getToken(rcParser.And_Assign, 0);
};

AssigExprContext.prototype.Or_Assign = function() {
    return this.getToken(rcParser.Or_Assign, 0);
};

AssigExprContext.prototype.XOr_Assign = function() {
    return this.getToken(rcParser.XOr_Assign, 0);
};

AssigExprContext.prototype.LShift_Assign = function() {
    return this.getToken(rcParser.LShift_Assign, 0);
};

AssigExprContext.prototype.RShift_Assign = function() {
    return this.getToken(rcParser.RShift_Assign, 0);
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
    this.enterRule(localctx, 18, rcParser.RULE_assigExpr);
    var _la = 0; // Token type
    try {
        this.state = 108;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.match(rcParser.Identifier);
            this.state = 102;
            this.match(rcParser.Assign);
            this.state = 103;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 104;
            this.varVal();
            this.state = 105;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.Assign) | (1 << rcParser.Add_Assign) | (1 << rcParser.Sub_Assign) | (1 << rcParser.Mul_Assign) | (1 << rcParser.Div_Assign) | (1 << rcParser.Mod_Assign) | (1 << rcParser.And_Assign) | (1 << rcParser.Or_Assign) | (1 << rcParser.XOr_Assign) | (1 << rcParser.LShift_Assign) | (1 << rcParser.RShift_Assign))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 106;
            this.expr(0);
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

ArgsContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArgsContext.prototype.Comma = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rcParser.Comma);
    } else {
        return this.getToken(rcParser.Comma, i);
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
    this.enterRule(localctx, 20, rcParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.value();
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.Comma) {
            this.state = 111;
            this.match(rcParser.Comma);
            this.state = 112;
            this.value();
            this.state = 117;
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


function VarValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_varVal;
    return this;
}

VarValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarValContext.prototype.constructor = VarValContext;

VarValContext.prototype.Identifier = function() {
    return this.getToken(rcParser.Identifier, 0);
};

VarValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitVarVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.VarValContext = VarValContext;

rcParser.prototype.varVal = function() {

    var localctx = new VarValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, rcParser.RULE_varVal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
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


function NegativeValContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_negativeVal;
    return this;
}

NegativeValContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegativeValContext.prototype.constructor = NegativeValContext;

NegativeValContext.prototype.Sub = function() {
    return this.getToken(rcParser.Sub, 0);
};

NegativeValContext.prototype.dateDiff = function() {
    return this.getTypedRuleContext(DateDiffContext,0);
};

NegativeValContext.prototype.funcInvo = function() {
    return this.getTypedRuleContext(FuncInvoContext,0);
};

NegativeValContext.prototype.IntegerLiteral = function() {
    return this.getToken(rcParser.IntegerLiteral, 0);
};

NegativeValContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(rcParser.FloatingPointLiteral, 0);
};

NegativeValContext.prototype.varVal = function() {
    return this.getTypedRuleContext(VarValContext,0);
};

NegativeValContext.prototype.priorityExpr = function() {
    return this.getTypedRuleContext(PriorityExprContext,0);
};

NegativeValContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitNegativeVal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.NegativeValContext = NegativeValContext;

rcParser.prototype.negativeVal = function() {

    var localctx = new NegativeValContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, rcParser.RULE_negativeVal);
    try {
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.match(rcParser.Sub);
            this.state = 121;
            this.dateDiff();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.match(rcParser.Sub);
            this.state = 123;
            this.funcInvo();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 124;
            this.match(rcParser.Sub);
            this.state = 125;
            this.match(rcParser.IntegerLiteral);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 126;
            this.match(rcParser.Sub);
            this.state = 127;
            this.match(rcParser.FloatingPointLiteral);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 128;
            this.match(rcParser.Sub);
            this.state = 129;
            this.varVal();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 130;
            this.match(rcParser.Sub);
            this.state = 131;
            this.priorityExpr();
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


rcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

rcParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.rcParser = rcParser;
