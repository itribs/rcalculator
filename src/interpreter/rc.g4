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
	: 	value (LineBreak|EOF)
    |   assigExpr (LineBreak|EOF)
    |   dateOp (LineBreak|EOF)
    |   LineBreak 
	;

value
    :   expr
    |   dateOp
    ;

expr
    :   dateDiff
    |   expr op=('*' | '/' | '%') expr
    |   expr op=('+' | '-' | '&' | '|' | '^' | '<<' | '>>') expr
    |   funcInvo
    |   IntegerLiteral
    |   FloatingPointLiteral
    |   varVal
    |   priorityExpr
    |   negativeVal
    ;

dateOp
    :   DateLiteral op=('+' | '-') expr op=('y' | 'm' | 'w' | 'd')
    |   DateLiteral
    ;

dateDiff
    :   dateOp '-' dateOp 
    |   priorityDateDiff
    ;

priorityDateDiff
    :   '(' dateDiff ')'
    ;

funcInvo
    :   Identifier '(' args? ')'
    ;

priorityExpr
    :   '(' expr ')'
    ;

assigExpr
    :   Identifier '=' expr
    |   varVal op=('=' | '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=' | '<<=' | '>>=') expr
    ;

args
    :	value (',' value)*
	;

varVal
    :   Identifier
    ;

negativeVal
    :   '-' dateDiff
    |   '-' funcInvo
    |   '-' IntegerLiteral
    |   '-' FloatingPointLiteral
    |   '-' varVal
    |   '-' priorityExpr
    ;