// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcVisitor = require('./rcVisitor').rcVisitor;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u0091\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0005\u0002",
    " \n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003%\n\u0003\r",
    "\u0003\u000e\u0003&\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00040\n\u0004\u0003\u0005",
    "\u0003\u0005\u0005\u00054\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    ">\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006F\n\u0006\f\u0006\u000e\u0006I\u000b\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007S\n\u0007\u0007\u0007U\n\u0007\f\u0007",
    "\u000e\u0007X\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b_\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005",
    "\nh\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fw\n",
    "\f\u0003\r\u0003\r\u0003\r\u0007\r|\n\r\f\r\u000e\r\u007f\u000b\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u008f\n\u000f\u0003\u000f\u0002\u0004",
    "\n\f\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u0002\b\u0003\u0003%%\u0003\u0002\u0011\u0013\u0004\u0002",
    "\u000f\u0010\u0014\u0018\u0003\u0002\u000f\u0010\u0003\u0002\u0004\u0007",
    "\u0004\u0002\u000e\u000e\u0019\"\u0002\u009a\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0004$\u0003\u0002\u0002\u0002\u0006/\u0003\u0002\u0002",
    "\u0002\b3\u0003\u0002\u0002\u0002\n=\u0003\u0002\u0002\u0002\fJ\u0003",
    "\u0002\u0002\u0002\u000e^\u0003\u0002\u0002\u0002\u0010`\u0003\u0002",
    "\u0002\u0002\u0012d\u0003\u0002\u0002\u0002\u0014k\u0003\u0002\u0002",
    "\u0002\u0016v\u0003\u0002\u0002\u0002\u0018x\u0003\u0002\u0002\u0002",
    "\u001a\u0080\u0003\u0002\u0002\u0002\u001c\u008e\u0003\u0002\u0002\u0002",
    "\u001e \u0005\u0004\u0003\u0002\u001f\u001e\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0007\u0002",
    "\u0002\u0003\"\u0003\u0003\u0002\u0002\u0002#%\u0005\u0006\u0004\u0002",
    "$#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002()",
    "\u0005\b\u0005\u0002)*\t\u0002\u0002\u0002*0\u0003\u0002\u0002\u0002",
    "+,\u0005\u0016\f\u0002,-\t\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002",
    ".0\u0007%\u0002\u0002/(\u0003\u0002\u0002\u0002/+\u0003\u0002\u0002",
    "\u0002/.\u0003\u0002\u0002\u00020\u0007\u0003\u0002\u0002\u000214\u0005",
    "\n\u0006\u000224\u0005\f\u0007\u000231\u0003\u0002\u0002\u000232\u0003",
    "\u0002\u0002\u00024\t\u0003\u0002\u0002\u000256\b\u0006\u0001\u0002",
    "6>\u0005\u000e\b\u00027>\u0005\u0012\n\u00028>\u0007\t\u0002\u00029",
    ">\u0007\n\u0002\u0002:>\u0005\u001a\u000e\u0002;>\u0005\u0014\u000b",
    "\u0002<>\u0005\u001c\u000f\u0002=5\u0003\u0002\u0002\u0002=7\u0003\u0002",
    "\u0002\u0002=8\u0003\u0002\u0002\u0002=9\u0003\u0002\u0002\u0002=:\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=<\u0003\u0002\u0002\u0002",
    ">G\u0003\u0002\u0002\u0002?@\f\n\u0002\u0002@A\t\u0003\u0002\u0002A",
    "F\u0005\n\u0006\u000bBC\f\t\u0002\u0002CD\t\u0004\u0002\u0002DF\u0005",
    "\n\u0006\nE?\u0003\u0002\u0002\u0002EB\u0003\u0002\u0002\u0002FI\u0003",
    "\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "H\u000b\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002JK\b\u0007",
    "\u0001\u0002KL\u0007\b\u0002\u0002LV\u0003\u0002\u0002\u0002MN\f\u0004",
    "\u0002\u0002NO\t\u0005\u0002\u0002OR\u0005\n\u0006\u0002PQ\u0007\u0003",
    "\u0002\u0002QS\t\u0006\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003",
    "\u0002\u0002\u0002SU\u0003\u0002\u0002\u0002TM\u0003\u0002\u0002\u0002",
    "UX\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002",
    "\u0002W\r\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002YZ\u0005",
    "\f\u0007\u0002Z[\u0007\u0010\u0002\u0002[\\\u0005\f\u0007\u0002\\_\u0003",
    "\u0002\u0002\u0002]_\u0005\u0010\t\u0002^Y\u0003\u0002\u0002\u0002^",
    "]\u0003\u0002\u0002\u0002_\u000f\u0003\u0002\u0002\u0002`a\u0007\f\u0002",
    "\u0002ab\u0005\u000e\b\u0002bc\u0007\r\u0002\u0002c\u0011\u0003\u0002",
    "\u0002\u0002de\u0007#\u0002\u0002eg\u0007\f\u0002\u0002fh\u0005\u0018",
    "\r\u0002gf\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0003",
    "\u0002\u0002\u0002ij\u0007\r\u0002\u0002j\u0013\u0003\u0002\u0002\u0002",
    "kl\u0007\f\u0002\u0002lm\u0005\n\u0006\u0002mn\u0007\r\u0002\u0002n",
    "\u0015\u0003\u0002\u0002\u0002op\u0007#\u0002\u0002pq\u0007\u000e\u0002",
    "\u0002qw\u0005\n\u0006\u0002rs\u0005\u001a\u000e\u0002st\t\u0007\u0002",
    "\u0002tu\u0005\n\u0006\u0002uw\u0003\u0002\u0002\u0002vo\u0003\u0002",
    "\u0002\u0002vr\u0003\u0002\u0002\u0002w\u0017\u0003\u0002\u0002\u0002",
    "x}\u0005\b\u0005\u0002yz\u0007\u000b\u0002\u0002z|\u0005\b\u0005\u0002",
    "{y\u0003\u0002\u0002\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002",
    "\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0019\u0003\u0002\u0002\u0002",
    "\u007f}\u0003\u0002\u0002\u0002\u0080\u0081\u0007#\u0002\u0002\u0081",
    "\u001b\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0010\u0002\u0002\u0083",
    "\u008f\u0005\u000e\b\u0002\u0084\u0085\u0007\u0010\u0002\u0002\u0085",
    "\u008f\u0005\u0012\n\u0002\u0086\u0087\u0007\u0010\u0002\u0002\u0087",
    "\u008f\u0007\t\u0002\u0002\u0088\u0089\u0007\u0010\u0002\u0002\u0089",
    "\u008f\u0007\n\u0002\u0002\u008a\u008b\u0007\u0010\u0002\u0002\u008b",
    "\u008f\u0005\u001a\u000e\u0002\u008c\u008d\u0007\u0010\u0002\u0002\u008d",
    "\u008f\u0005\u0014\u000b\u0002\u008e\u0082\u0003\u0002\u0002\u0002\u008e",
    "\u0084\u0003\u0002\u0002\u0002\u008e\u0086\u0003\u0002\u0002\u0002\u008e",
    "\u0088\u0003\u0002\u0002\u0002\u008e\u008a\u0003\u0002\u0002\u0002\u008e",
    "\u008c\u0003\u0002\u0002\u0002\u008f\u001d\u0003\u0002\u0002\u0002\u0010",
    "\u001f&/3=EGRV^gv}\u008e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'#'", "'y'", "'m'", "'w'", "'d'", null, null, 
                     null, "','", "'('", "')'", "'='", "'+'", "'-'", "'*'", 
                     "'/'", "'%'", "'&'", "'|'", "'^'", "'<<'", "'>>'", 
                     "'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", 
                     "'^='", "'<<='", "'>>='" ];

var symbolicNames = [ null, null, null, null, null, null, "DateLiteral", 
                      "IntegerLiteral", "FloatingPointLiteral", "Comma", 
                      "LParen", "RParen", "Assign", "Add", "Sub", "Mul", 
                      "Div", "Mod", "BitAnd", "BitOr", "Caret", "LShift", 
                      "RShift", "Add_Assign", "Sub_Assign", "Mul_Assign", 
                      "Div_Assign", "Mod_Assign", "And_Assign", "Or_Assign", 
                      "XOr_Assign", "LShift_Assign", "RShift_Assign", "Identifier", 
                      "WhiteSpaces", "LineBreak" ];

var ruleNames =  [ "prog", "statementList", "statement", "value", "expr", 
                   "dateOp", "dateDiff", "priorityDateDiff", "funcInvo", 
                   "priorityExpr", "assigExpr", "args", "varVal", "negativeVal" ];

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
rcParser.T__0 = 1;
rcParser.T__1 = 2;
rcParser.T__2 = 3;
rcParser.T__3 = 4;
rcParser.T__4 = 5;
rcParser.DateLiteral = 6;
rcParser.IntegerLiteral = 7;
rcParser.FloatingPointLiteral = 8;
rcParser.Comma = 9;
rcParser.LParen = 10;
rcParser.RParen = 11;
rcParser.Assign = 12;
rcParser.Add = 13;
rcParser.Sub = 14;
rcParser.Mul = 15;
rcParser.Div = 16;
rcParser.Mod = 17;
rcParser.BitAnd = 18;
rcParser.BitOr = 19;
rcParser.Caret = 20;
rcParser.LShift = 21;
rcParser.RShift = 22;
rcParser.Add_Assign = 23;
rcParser.Sub_Assign = 24;
rcParser.Mul_Assign = 25;
rcParser.Div_Assign = 26;
rcParser.Mod_Assign = 27;
rcParser.And_Assign = 28;
rcParser.Or_Assign = 29;
rcParser.XOr_Assign = 30;
rcParser.LShift_Assign = 31;
rcParser.RShift_Assign = 32;
rcParser.Identifier = 33;
rcParser.WhiteSpaces = 34;
rcParser.LineBreak = 35;

rcParser.RULE_prog = 0;
rcParser.RULE_statementList = 1;
rcParser.RULE_statement = 2;
rcParser.RULE_value = 3;
rcParser.RULE_expr = 4;
rcParser.RULE_dateOp = 5;
rcParser.RULE_dateDiff = 6;
rcParser.RULE_priorityDateDiff = 7;
rcParser.RULE_funcInvo = 8;
rcParser.RULE_priorityExpr = 9;
rcParser.RULE_assigExpr = 10;
rcParser.RULE_args = 11;
rcParser.RULE_varVal = 12;
rcParser.RULE_negativeVal = 13;


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

ProgContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
};

ProgContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
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
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (rcParser.DateLiteral - 6)) | (1 << (rcParser.IntegerLiteral - 6)) | (1 << (rcParser.FloatingPointLiteral - 6)) | (1 << (rcParser.LParen - 6)) | (1 << (rcParser.Sub - 6)) | (1 << (rcParser.Identifier - 6)) | (1 << (rcParser.LineBreak - 6)))) !== 0)) {
            this.state = 28;
            this.statementList();
        }

        this.state = 31;
        this.match(rcParser.EOF);
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


function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitStatementList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.StatementListContext = StatementListContext;

rcParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, rcParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 33;
            this.statement();
            this.state = 36; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (rcParser.DateLiteral - 6)) | (1 << (rcParser.IntegerLiteral - 6)) | (1 << (rcParser.FloatingPointLiteral - 6)) | (1 << (rcParser.LParen - 6)) | (1 << (rcParser.Sub - 6)) | (1 << (rcParser.Identifier - 6)) | (1 << (rcParser.LineBreak - 6)))) !== 0));
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


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

StatementContext.prototype.LineBreak = function() {
    return this.getToken(rcParser.LineBreak, 0);
};

StatementContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
};

StatementContext.prototype.assigExpr = function() {
    return this.getTypedRuleContext(AssigExprContext,0);
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.StatementContext = StatementContext;

rcParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, rcParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 45;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.value();
            this.state = 39;
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
            this.state = 41;
            this.assigExpr();
            this.state = 42;
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
            this.state = 44;
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
    this.enterRule(localctx, 6, rcParser.RULE_value);
    try {
        this.state = 49;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.dateOp(0);
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
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, rcParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 52;
            this.dateDiff();
            break;

        case 2:
            this.state = 53;
            this.funcInvo();
            break;

        case 3:
            this.state = 54;
            this.match(rcParser.IntegerLiteral);
            break;

        case 4:
            this.state = 55;
            this.match(rcParser.FloatingPointLiteral);
            break;

        case 5:
            this.state = 56;
            this.varVal();
            break;

        case 6:
            this.state = 57;
            this.priorityExpr();
            break;

        case 7:
            this.state = 58;
            this.negativeVal();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 69;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 67;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 62;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.Mul) | (1 << rcParser.Div) | (1 << rcParser.Mod))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 63;
                    this.expr(9);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_expr);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 65;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.Add) | (1 << rcParser.Sub) | (1 << rcParser.BitAnd) | (1 << rcParser.BitOr) | (1 << rcParser.Caret) | (1 << rcParser.LShift) | (1 << rcParser.RShift))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 66;
                    this.expr(8);
                    break;

                } 
            }
            this.state = 71;
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

DateOpContext.prototype.dateOp = function() {
    return this.getTypedRuleContext(DateOpContext,0);
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



rcParser.prototype.dateOp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new DateOpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, rcParser.RULE_dateOp, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(rcParser.DateLiteral);
        this._ctx.stop = this._input.LT(-1);
        this.state = 84;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new DateOpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_dateOp);
                this.state = 75;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 76;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===rcParser.Add || _la===rcParser.Sub)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 77;
                this.expr(0);
                this.state = 80;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                if(la_===1) {
                    this.state = 78;
                    this.match(rcParser.T__0);
                    this.state = 79;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.T__1) | (1 << rcParser.T__2) | (1 << rcParser.T__3) | (1 << rcParser.T__4))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }

                } 
            }
            this.state = 86;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
    this.enterRule(localctx, 12, rcParser.RULE_dateDiff);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rcParser.DateLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.dateOp(0);
            this.state = 88;
            this.match(rcParser.Sub);
            this.state = 89;
            this.dateOp(0);
            break;
        case rcParser.LParen:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
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
    this.enterRule(localctx, 14, rcParser.RULE_priorityDateDiff);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(rcParser.LParen);
        this.state = 95;
        this.dateDiff();
        this.state = 96;
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
    this.enterRule(localctx, 16, rcParser.RULE_funcInvo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(rcParser.Identifier);
        this.state = 99;
        this.match(rcParser.LParen);
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (rcParser.DateLiteral - 6)) | (1 << (rcParser.IntegerLiteral - 6)) | (1 << (rcParser.FloatingPointLiteral - 6)) | (1 << (rcParser.LParen - 6)) | (1 << (rcParser.Sub - 6)) | (1 << (rcParser.Identifier - 6)))) !== 0)) {
            this.state = 100;
            this.args();
        }

        this.state = 103;
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
    this.enterRule(localctx, 18, rcParser.RULE_priorityExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(rcParser.LParen);
        this.state = 106;
        this.expr(0);
        this.state = 107;
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
    this.enterRule(localctx, 20, rcParser.RULE_assigExpr);
    var _la = 0; // Token type
    try {
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.match(rcParser.Identifier);
            this.state = 110;
            this.match(rcParser.Assign);
            this.state = 111;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 112;
            this.varVal();
            this.state = 113;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (rcParser.Assign - 12)) | (1 << (rcParser.Add_Assign - 12)) | (1 << (rcParser.Sub_Assign - 12)) | (1 << (rcParser.Mul_Assign - 12)) | (1 << (rcParser.Div_Assign - 12)) | (1 << (rcParser.Mod_Assign - 12)) | (1 << (rcParser.And_Assign - 12)) | (1 << (rcParser.Or_Assign - 12)) | (1 << (rcParser.XOr_Assign - 12)) | (1 << (rcParser.LShift_Assign - 12)) | (1 << (rcParser.RShift_Assign - 12)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 114;
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
    this.enterRule(localctx, 22, rcParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.value();
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.Comma) {
            this.state = 119;
            this.match(rcParser.Comma);
            this.state = 120;
            this.value();
            this.state = 125;
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
    this.enterRule(localctx, 24, rcParser.RULE_varVal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
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
    this.enterRule(localctx, 26, rcParser.RULE_negativeVal);
    try {
        this.state = 140;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.match(rcParser.Sub);
            this.state = 129;
            this.dateDiff();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.match(rcParser.Sub);
            this.state = 131;
            this.funcInvo();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 132;
            this.match(rcParser.Sub);
            this.state = 133;
            this.match(rcParser.IntegerLiteral);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            this.match(rcParser.Sub);
            this.state = 135;
            this.match(rcParser.FloatingPointLiteral);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 136;
            this.match(rcParser.Sub);
            this.state = 137;
            this.varVal();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 138;
            this.match(rcParser.Sub);
            this.state = 139;
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
	case 4:
			return this.expr_sempred(localctx, predIndex);
	case 5:
			return this.dateOp_sempred(localctx, predIndex);
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

rcParser.prototype.dateOp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.rcParser = rcParser;
