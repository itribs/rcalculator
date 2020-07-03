grammar rc;

import baseLexer;

options {
    superClass=myParser;
}

prog
    :   stat+
    |   EOF
    ;

stat
	: 	expr (LineBreak|EOF)
    |   assigExpr (LineBreak|EOF)
    |   dateOp (LineBreak|EOF)
    |   LineBreak 
	;

expr
    :   dateDiff
    |   expr op=('*' | '/' | '%') expr
    |   expr op=('+' | '-' | '&' | '|' | '^' | '<<' | '>>') expr
    |   funcInvo
    |   IntegerLiteral
    |   FloatingPointLiteral
    |   identifier
    |   priorityExpr
    ;

dateOp
    :   DateLiteral op=('+' | '-') IntegerLiteral op=('y' | 'm' | 'w' | 'd')
    |   DateLiteral
    ;

dateDiff
    :   dateOp '-' dateOp 
    ;

funcInvo
    :   identifier '(' args? ')'
    ;

priorityExpr
    :   '(' expr ')'
    ;

assigExpr
    :   identifier op=('=' | '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=' | '<<=' | '>>=') expr
    ;

args
    :	expr (',' expr)*
	;

identifier
    :   Identifier
    ;