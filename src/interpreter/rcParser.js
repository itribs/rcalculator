// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var rcVisitor = require('./rcVisitor').rcVisitor;

var myParserBase = require('./myParserBase').myParserBase;

var grammarFileName = "rc.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f~\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0005\u0002$\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0006\u0003)\n\u0003\r\u0003\u000e\u0003*\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00043",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007B\n\u0007\f\u0007\u000e\u0007E\u000b",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\tP\n\t\f\t\u000e\tS\u000b\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b^\n\u000b\u0003\f\u0003\f\u0003\f\u0005\fc\n\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0007\rj\n\r\f\r\u000e\rm\u000b\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0007\u0010t\n\u0010",
    "\f\u0010\u000e\u0010w\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011|\n\u0011\u0003\u0011\u0003u\u0004\f\u0010\u0012\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\u0002\u0006\u0004\u0002\b\b\u0013\u001c\u0004\u0002\t\n\u000e\u0012",
    "\u0003\u0002\u000b\r\u0003\u0002\u0003\u0004\u0002z\u0002#\u0003\u0002",
    "\u0002\u0002\u0004(\u0003\u0002\u0002\u0002\u00062\u0003\u0002\u0002",
    "\u0002\b4\u0003\u0002\u0002\u0002\n8\u0003\u0002\u0002\u0002\f:\u0003",
    "\u0002\u0002\u0002\u000eF\u0003\u0002\u0002\u0002\u0010H\u0003\u0002",
    "\u0002\u0002\u0012T\u0003\u0002\u0002\u0002\u0014]\u0003\u0002\u0002",
    "\u0002\u0016_\u0003\u0002\u0002\u0002\u0018f\u0003\u0002\u0002\u0002",
    "\u001an\u0003\u0002\u0002\u0002\u001cp\u0003\u0002\u0002\u0002\u001e",
    "u\u0003\u0002\u0002\u0002 {\u0003\u0002\u0002\u0002\"$\u0005\u0004\u0003",
    "\u0002#\"\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%&\u0007\u0002\u0002\u0003&\u0003\u0003\u0002\u0002",
    "\u0002\')\u0005\u0006\u0004\u0002(\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+\u0005\u0003\u0002\u0002\u0002,-\u0005\b\u0005\u0002-.\u0005 \u0011",
    "\u0002.3\u0003\u0002\u0002\u0002/0\u0005\f\u0007\u000201\u0005 \u0011",
    "\u000213\u0003\u0002\u0002\u00022,\u0003\u0002\u0002\u00022/\u0003\u0002",
    "\u0002\u00023\u0007\u0003\u0002\u0002\u000245\u0005\u001a\u000e\u0002",
    "56\u0005\n\u0006\u000267\u0005\f\u0007\u00027\t\u0003\u0002\u0002\u0002",
    "89\t\u0002\u0002\u00029\u000b\u0003\u0002\u0002\u0002:;\b\u0007\u0001",
    "\u0002;<\u0005\u0010\t\u0002<C\u0003\u0002\u0002\u0002=>\f\u0003\u0002",
    "\u0002>?\u0005\u000e\b\u0002?@\u0005\u0010\t\u0002@B\u0003\u0002\u0002",
    "\u0002A=\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002",
    "\u0002\u0002CD\u0003\u0002\u0002\u0002D\r\u0003\u0002\u0002\u0002EC",
    "\u0003\u0002\u0002\u0002FG\t\u0003\u0002\u0002G\u000f\u0003\u0002\u0002",
    "\u0002HI\b\t\u0001\u0002IJ\u0005\u0014\u000b\u0002JQ\u0003\u0002\u0002",
    "\u0002KL\f\u0003\u0002\u0002LM\u0005\u0012\n\u0002MN\u0005\u0014\u000b",
    "\u0002NP\u0003\u0002\u0002\u0002OK\u0003\u0002\u0002\u0002PS\u0003\u0002",
    "\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002R\u0011",
    "\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\t\u0004\u0002\u0002",
    "U\u0013\u0003\u0002\u0002\u0002V^\u0005\u0016\f\u0002W^\u0005\u001a",
    "\u000e\u0002X^\u0005\u001c\u000f\u0002YZ\u0007\u0006\u0002\u0002Z[\u0005",
    "\f\u0007\u0002[\\\u0007\u0007\u0002\u0002\\^\u0003\u0002\u0002\u0002",
    "]V\u0003\u0002\u0002\u0002]W\u0003\u0002\u0002\u0002]X\u0003\u0002\u0002",
    "\u0002]Y\u0003\u0002\u0002\u0002^\u0015\u0003\u0002\u0002\u0002_`\u0005",
    "\u001a\u000e\u0002`b\u0007\u0006\u0002\u0002ac\u0005\u0018\r\u0002b",
    "a\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002",
    "\u0002de\u0007\u0007\u0002\u0002e\u0017\u0003\u0002\u0002\u0002fk\u0005",
    "\f\u0007\u0002gh\u0007\u0005\u0002\u0002hj\u0005\f\u0007\u0002ig\u0003",
    "\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002l\u0019\u0003\u0002\u0002\u0002mk\u0003\u0002",
    "\u0002\u0002no\u0007\u001d\u0002\u0002o\u001b\u0003\u0002\u0002\u0002",
    "pq\t\u0005\u0002\u0002q\u001d\u0003\u0002\u0002\u0002rt\u000b\u0002",
    "\u0002\u0002sr\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002us\u0003\u0002\u0002\u0002v\u001f\u0003\u0002\u0002",
    "\u0002wu\u0003\u0002\u0002\u0002x|\u0007\u0002\u0002\u0003y|\u0006\u0011",
    "\u0004\u0002z|\u0006\u0011\u0005\u0002{x\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002{z\u0003\u0002\u0002\u0002|!\u0003\u0002\u0002\u0002",
    "\f#*2CQ]bku{"].join("");


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
                      "WhiteSpaces", "LineTerminator" ];

var ruleNames =  [ "program", "expressions", "expression", "assignmentExpression", 
                   "assignmentOperator", "additiveExpression", "additiveOperator", 
                   "multiplicativeExpression", "multiplicativeOperator", 
                   "primary", "methodInvocation", "argumentList", "identifier", 
                   "literal", "unknownExpression", "eos" ];

function rcParser (input) {
	myParserBase.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

rcParser.prototype = Object.create(myParserBase.prototype);
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
rcParser.LineTerminator = 29;

rcParser.RULE_program = 0;
rcParser.RULE_expressions = 1;
rcParser.RULE_expression = 2;
rcParser.RULE_assignmentExpression = 3;
rcParser.RULE_assignmentOperator = 4;
rcParser.RULE_additiveExpression = 5;
rcParser.RULE_additiveOperator = 6;
rcParser.RULE_multiplicativeExpression = 7;
rcParser.RULE_multiplicativeOperator = 8;
rcParser.RULE_primary = 9;
rcParser.RULE_methodInvocation = 10;
rcParser.RULE_argumentList = 11;
rcParser.RULE_identifier = 12;
rcParser.RULE_literal = 13;
rcParser.RULE_unknownExpression = 14;
rcParser.RULE_eos = 15;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
};

ProgramContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.ProgramContext = ProgramContext;

rcParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, rcParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier))) !== 0)) {
            this.state = 32;
            this.expressions();
        }

        this.state = 35;
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
    this.enterRule(localctx, 2, rcParser.RULE_expressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 37;
            this.expression();
            this.state = 40; 
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

ExpressionContext.prototype.eos = function() {
    return this.getTypedRuleContext(EosContext,0);
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
    this.enterRule(localctx, 4, rcParser.RULE_expression);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this.assignmentExpression();
            this.state = 43;
            this.eos();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
            this.additiveExpression(0);
            this.state = 46;
            this.eos();
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
    this.enterRule(localctx, 6, rcParser.RULE_assignmentExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.identifier();
        this.state = 51;
        this.assignmentOperator();
        this.state = 52;
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
    this.enterRule(localctx, 8, rcParser.RULE_assignmentOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
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

AdditiveExpressionContext.prototype.additiveOperator = function() {
    return this.getTypedRuleContext(AdditiveOperatorContext,0);
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
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, rcParser.RULE_additiveExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.multiplicativeExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 65;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_additiveExpression);
                this.state = 59;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 60;
                this.additiveOperator();
                this.state = 61;
                this.multiplicativeExpression(0); 
            }
            this.state = 67;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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


function AdditiveOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_additiveOperator;
    return this;
}

AdditiveOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditiveOperatorContext.prototype.constructor = AdditiveOperatorContext;

AdditiveOperatorContext.prototype.ADD = function() {
    return this.getToken(rcParser.ADD, 0);
};

AdditiveOperatorContext.prototype.SUB = function() {
    return this.getToken(rcParser.SUB, 0);
};

AdditiveOperatorContext.prototype.RSHIFT = function() {
    return this.getToken(rcParser.RSHIFT, 0);
};

AdditiveOperatorContext.prototype.LSHIFT = function() {
    return this.getToken(rcParser.LSHIFT, 0);
};

AdditiveOperatorContext.prototype.BITAND = function() {
    return this.getToken(rcParser.BITAND, 0);
};

AdditiveOperatorContext.prototype.BITOR = function() {
    return this.getToken(rcParser.BITOR, 0);
};

AdditiveOperatorContext.prototype.CARET = function() {
    return this.getToken(rcParser.CARET, 0);
};

AdditiveOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitAdditiveOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.AdditiveOperatorContext = AdditiveOperatorContext;

rcParser.prototype.additiveOperator = function() {

    var localctx = new AdditiveOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, rcParser.RULE_additiveOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.ADD) | (1 << rcParser.SUB) | (1 << rcParser.BITAND) | (1 << rcParser.BITOR) | (1 << rcParser.CARET) | (1 << rcParser.LSHIFT) | (1 << rcParser.RSHIFT))) !== 0))) {
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

MultiplicativeExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

MultiplicativeExpressionContext.prototype.multiplicativeExpression = function() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext,0);
};

MultiplicativeExpressionContext.prototype.multiplicativeOperator = function() {
    return this.getTypedRuleContext(MultiplicativeOperatorContext,0);
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
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, rcParser.RULE_multiplicativeExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.primary();
        this._ctx.stop = this._input.LT(-1);
        this.state = 79;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, rcParser.RULE_multiplicativeExpression);
                this.state = 73;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 74;
                this.multiplicativeOperator();
                this.state = 75;
                this.primary(); 
            }
            this.state = 81;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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


function MultiplicativeOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_multiplicativeOperator;
    return this;
}

MultiplicativeOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicativeOperatorContext.prototype.constructor = MultiplicativeOperatorContext;

MultiplicativeOperatorContext.prototype.MUL = function() {
    return this.getToken(rcParser.MUL, 0);
};

MultiplicativeOperatorContext.prototype.DIV = function() {
    return this.getToken(rcParser.DIV, 0);
};

MultiplicativeOperatorContext.prototype.MOD = function() {
    return this.getToken(rcParser.MOD, 0);
};

MultiplicativeOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitMultiplicativeOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.MultiplicativeOperatorContext = MultiplicativeOperatorContext;

rcParser.prototype.multiplicativeOperator = function() {

    var localctx = new MultiplicativeOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, rcParser.RULE_multiplicativeOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.MUL) | (1 << rcParser.DIV) | (1 << rcParser.MOD))) !== 0))) {
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

PrimaryContext.prototype.methodInvocation = function() {
    return this.getTypedRuleContext(MethodInvocationContext,0);
};

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
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.methodInvocation();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.identifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 86;
            this.literal();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 87;
            this.match(rcParser.LPAREN);
            this.state = 88;
            this.additiveExpression(0);
            this.state = 89;
            this.match(rcParser.RPAREN);
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
    this.enterRule(localctx, 20, rcParser.RULE_methodInvocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.identifier();
        this.state = 94;
        this.match(rcParser.LPAREN);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << rcParser.IntegerLiteral) | (1 << rcParser.FloatingPointLiteral) | (1 << rcParser.LPAREN) | (1 << rcParser.Identifier))) !== 0)) {
            this.state = 95;
            this.argumentList();
        }

        this.state = 98;
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
    this.enterRule(localctx, 22, rcParser.RULE_argumentList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.additiveExpression(0);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===rcParser.COMMA) {
            this.state = 101;
            this.match(rcParser.COMMA);
            this.state = 102;
            this.additiveExpression(0);
            this.state = 107;
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
    this.enterRule(localctx, 24, rcParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
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
    this.enterRule(localctx, 26, rcParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
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


function UnknownExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_unknownExpression;
    return this;
}

UnknownExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnknownExpressionContext.prototype.constructor = UnknownExpressionContext;


UnknownExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitUnknownExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.UnknownExpressionContext = UnknownExpressionContext;

rcParser.prototype.unknownExpression = function() {

    var localctx = new UnknownExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, rcParser.RULE_unknownExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 112;
                this.matchWildcard(); 
            }
            this.state = 117;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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


function EosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = rcParser.RULE_eos;
    return this;
}

EosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EosContext.prototype.constructor = EosContext;

EosContext.prototype.EOF = function() {
    return this.getToken(rcParser.EOF, 0);
};

EosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof rcVisitor ) {
        return visitor.visitEos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




rcParser.EosContext = EosContext;

rcParser.prototype.eos = function() {

    var localctx = new EosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, rcParser.RULE_eos);
    try {
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.match(rcParser.EOF);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            if (!( this.lineTerminatorAhead())) {
                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 120;
            if (!( this.closeBrace())) {
                throw new antlr4.error.FailedPredicateException(this, "this.closeBrace()");
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


rcParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.additiveExpression_sempred(localctx, predIndex);
	case 7:
			return this.multiplicativeExpression_sempred(localctx, predIndex);
	case 15:
			return this.eos_sempred(localctx, predIndex);
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

rcParser.prototype.eos_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.lineTerminatorAhead();
		case 3:
			return this.closeBrace();
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.rcParser = rcParser;
