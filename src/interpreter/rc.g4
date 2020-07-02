grammar rc;

import baseLexer;

options {
    superClass=myParser;
}

prog
    :   stat+
    ;

stat
	: 	expr (LineBreak|EOF)
    |   assigExpr (LineBreak|EOF)
    |   LineBreak
	;

expr
    :   expr op=('*' | '/' | '%') expr                            #Operation
    |   expr op=('+' | '-' | '&' | '|' | '^' | '<<' | '>>') expr  #Operation   
    |   Identifier '(' args? ')'                                  #FuncInvo
    |   IntegerLiteral                                            #Literal
    |   FloatingPointLiteral                                      #Literal
    |   Identifier                                                #Identifier
    |   '(' expr ')'                                              #PriorityExpr
    ;

assigExpr
    :   Identifier op=('=' | '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=' | '<<=' | '>>=') expr
    ;

args
    :	expr (',' expr)*
	;