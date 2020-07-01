// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcVisitor = require('./rcVisitor').rcVisitor;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001fr\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e\u0002\u001d",
    "\u0003\u0003\u0003\u0003\u0006\u0003\"\n\u0003\r\u0003\u000e\u0003#",
    "\u0003\u0003\u0005\u0003\'\n\u0003\u0003\u0003\u0003\u0003\u0006\u0003",
    "+\n\u0003\r\u0003\u000e\u0003,\u0003\u0003\u0005\u00030\n\u0003\u0005",
    "\u00032\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006A\n\u0006\f\u0006\u000e\u0006",
    "D\u000b\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\bO\n\b\f\b\u000e\bR\u000b\b\u0003\t",
    "\u0003\t\u0003\t\u0005\tW\n\t\u0003\t\u0003\t\u0003\t\u0005\t\\\n\t",
    "\u0003\n\u0003\n\u0003\n\u0007\na\n\n\f\n\u000e\nd\u000b\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "l\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0002\u0004\n\u000e",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0005\u0004\u0002\b\b\u0013\u001c\u0003\u0002\t\u0012\u0003\u0002\u0003",
    "\u0004\u0002r\u0002\u001b\u0003\u0002\u0002\u0002\u00041\u0003\u0002",
    "\u0002\u0002\u00063\u0003\u0002\u0002\u0002\b7\u0003\u0002\u0002\u0002",
    "\n9\u0003\u0002\u0002\u0002\fE\u0003\u0002\u0002\u0002\u000eG\u0003",
    "\u0002\u0002\u0002\u0010[\u0003\u0002\u0002\u0002\u0012]\u0003\u0002",
    "\u0002\u0002\u0014k\u0003\u0002\u0002\u0002\u0016m\u0003\u0002\u0002",
    "\u0002\u0018o\u0003\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003",
    "\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002",
    "\u0002\u001e\u0003\u0003\u0002\u0002\u0002\u001f&\u0005\u0006\u0004",
    "\u0002 \"\u0007\u001f\u0002\u0002! \u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002",
    "$\'\u0003\u0002\u0002\u0002%\'\u0007\u0002\u0002\u0003&!\u0003\u0002",
    "\u0002\u0002&%\u0003\u0002\u0002\u0002\'2\u0003\u0002\u0002\u0002(/",
    "\u0005\n\u0006\u0002)+\u0007\u001f\u0002\u0002*)\u0003\u0002\u0002\u0002",
    "+,\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002",
    "\u0002-0\u0003\u0002\u0002\u0002.0\u0007\u0002\u0002\u0003/*\u0003\u0002",
    "\u0002\u0002/.\u0003\u0002\u0002\u000202\u0003\u0002\u0002\u00021\u001f",
    "\u0003\u0002\u0002\u00021(\u0003\u0002\u0002\u00022\u0005\u0003\u0002",
    "\u0002\u000234\u0005\u0016\f\u000245\u0005\b\u0005\u000256\u0005\n\u0006",
    "\u00026\u0007\u0003\u0002\u0002\u000278\t\u0002\u0002\u00028\t\u0003",
    "\u0002\u0002\u00029:\b\u0006\u0001\u0002:;\u0005\u000e\b\u0002;B\u0003",
    "\u0002\u0002\u0002<=\f\u0003\u0002\u0002=>\u0005\f\u0007\u0002>?\u0005",
    "\u000e\b\u0002?A\u0003\u0002\u0002\u0002@<\u0003\u0002\u0002\u0002A",
    "D\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002C\u000b\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EF\t",
    "\u0003\u0002\u0002F\r\u0003\u0002\u0002\u0002GH\b\b\u0001\u0002HI\u0005",
    "\u0010\t\u0002IP\u0003\u0002\u0002\u0002JK\f\u0003\u0002\u0002KL\u0005",
    "\f\u0007\u0002LM\u0005\u0010\t\u0002MO\u0003\u0002\u0002\u0002NJ\u0003",
    "\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002",
    "PQ\u0003\u0002\u0002\u0002Q\u000f\u0003\u0002\u0002\u0002RP\u0003\u0002",
    "\u0002\u0002ST\u0005\u0016\f\u0002TV\u0007\u0006\u0002\u0002UW\u0005",
    "\u0012\n\u0002VU\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002W",
    "X\u0003\u0002\u0002\u0002XY\u0007\u0007\u0002\u0002Y\\\u0003\u0002\u0002",
    "\u0002Z\\\u0005\u0014\u000b\u0002[S\u0003\u0002\u0002\u0002[Z\u0003",
    "\u0002\u0002\u0002\\\u0011\u0003\u0002\u0002\u0002]b\u0005\n\u0006\u0002",
    "^_\u0007\u0005\u0002\u0002_a\u0005\n\u0006\u0002`^\u0003\u0002\u0002",
    "\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002",
    "\u0002\u0002c\u0013\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002",
    "el\u0005\u0016\f\u0002fl\u0005\u0018\r\u0002gh\u0007\u0006\u0002\u0002",
    "hi\u0005\n\u0006\u0002ij\u0007\u0007\u0002\u0002jl\u0003\u0002\u0002",
    "\u0002ke\u0003\u0002\u0002\u0002kf\u0003\u0002\u0002\u0002kg\u0003\u0002",
    "\u0002\u0002l\u0015\u0003\u0002\u0002\u0002mn\u0007\u001d\u0002\u0002",
    "n\u0017\u0003\u0002\u0002\u0002op\t\u0004\u0002\u0002p\u0019\u0003\u0002",
    "\u0002\u0002\u000e\u001d#&,/1BPV[bk"].join("");


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
                      "SKIP_", "NEWLINE" ];

var ruleNames =  [ "expressions", "expression", "assignmentExpression", 
                   "assignmentOperator", "additiveExpression", "operator", 
                   "multiplicativeExpression", "methodInvocation", "argumentList", 
                   "primary", "identifier", "literal" ];

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
rcParser.SKIP_ = 28;
rcParser.NEWLINE = 29;

rcParser.RULE_expressions = 0;
rcParser.RULE_expression = 1;
rcParser.RULE_assignmentExpression = 2;
rcParser.RULE_assignmentOperator = 3;
rcParser.RULE_additiveExpression = 4;
rcParser.RULE_operator = 5;
rcParser.RULE_multiplicativeExpression = 6;
rcParser.RULE_methodInvocation = 7;
rcParser.RULE_argumentList = 8;
rcParser.RULE_primary = 9;
rcParser.RULE_identifier = 10;
rcParser.RULE_literal = 11;


function ExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_expressions;
    return this;
}

ExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionsContext.prototype.constructor = ExpressionsContext;

ExpressionsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ExpressionsContext = ExpressionsContext;

rcParser.prototype.expressions = function() {

    var localctx = new ExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rcParser.RULE_expressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 24;
            this.expression();
            this.state = 27; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier))) !== 0));
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

ExpressionContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
};

ExpressionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(rcParser.NEWLINE);
    } else {
        return this.getToken(rcParser.NEWLINE, i);
    }
};


ExpressionContext.prototype.additiveExpression = function() {
    return this.getTypedRuleContext(AdditiveExpressionContext,0);
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
    this.enterRule(localctx, 2, rcParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 47;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.assignmentExpression();
            this.state = 36;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case rcParser.NEWLINE:
                this.state = 31; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 30;
                    this.match(rcParser.NEWLINE);
                    this.state = 33; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===rcParser.NEWLINE);
                break;
            case rcParser.EOF:
                this.state = 35;
                this.match(rcParser.EOF);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 38;
            this.additiveExpression(0);
            this.state = 45;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case rcParser.NEWLINE:
                this.state = 40; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 39;
                    this.match(rcParser.NEWLINE);
                    this.state = 42; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===rcParser.NEWLINE);
                break;
            case rcParser.EOF:
                this.state = 44;
                this.match(rcParser.EOF);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
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
    this.enterRule(localctx, 4, rcParser.RULE_assignmentExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.identifier();
        this.state = 50;
        this.assignmentOperator();
        this.state = 51;
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
    this.enterRule(localctx, 6, rcParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
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
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, rcParser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 64;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_additiveExpression);
                this.state = 58;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 59;
                this.operator();
                this.state = 60;
                this.multiplicativeExpression(0); 
            }
            this.state = 66;
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
    this.enterRule(localctx, 10, rcParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
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
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, rcParser.RULE_multiplicativeExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.methodInvocation();
        this._ctx.stop = this._input.LT(-1);
        this.state = 78;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_multiplicativeExpression);
                this.state = 72;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 73;
                this.operator();
                this.state = 74;
                this.methodInvocation(); 
            }
            this.state = 80;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
    this.enterRule(localctx, 14, rcParser.RULE_methodInvocation);
    var _la = 0; // Token type
    try {
        this.state = 89;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.identifier();
            this.state = 82;
            this.match(rcParser.LPAREN);
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier))) !== 0)) {
                this.state = 83;
                this.argumentList();
            }

            this.state = 86;
            this.match(rcParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 88;
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
    this.enterRule(localctx, 16, rcParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.additiveExpression(0);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.COMMA) {
            this.state = 92;
            this.match(rcParser.COMMA);
            this.state = 93;
            this.additiveExpression(0);
            this.state = 98;
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
    this.enterRule(localctx, 18, rcParser.RULE_primary);
    try {
        this.state = 105;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case rcParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.identifier();
            break;
        case rcParser.IntegerLiteral:
        case rcParser.FloatingPointLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.literal();
            break;
        case rcParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 101;
            this.match(rcParser.LPAREN);
            this.state = 102;
            this.additiveExpression(0);
            this.state = 103;
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
    this.enterRule(localctx, 20, rcParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
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
    this.enterRule(localctx, 22, rcParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
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
	case 4:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 6:
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
