lexer grammar baseLexer;

DateLiteral
    :   '#' [0-9][0-9][0-9][0-9][-/][0-9][0-9][-/][0-9][0-9] '#'
    ;

IntegerLiteral
    :	DecimalIntegerLiteral
	|	HexIntegerLiteral
	|	OctalIntegerLiteral
	|	BinaryIntegerLiteral
	;

FloatingPointLiteral
	:	DecimalFloatingPointLiteral
//	|	HexadecimalFloatingPointLiteral
	;

fragment
HexNumeral
	:	'0' [xX] HexDigits
	;

//十进制浮点数
fragment
DecimalFloatingPointLiteral
	:	Digits '.' Digits? ExponentPart?
	|	'.' Digits ExponentPart?
	|	Digits ExponentPart
	;

fragment
ExponentPart
	:	ExponentIndicator SignedInteger
	;

fragment
ExponentIndicator
	:	[eE]
	;

fragment
SignedInteger
	:	Sign? Digits
	;

fragment
Sign
	:	[+-]
	;

//十六进制浮点数
fragment
HexadecimalFloatingPointLiteral
	:	HexSignificand BinaryExponent
	;

fragment
HexSignificand
	:	HexNumeral '.'?
	|	HexNumeral? '.' HexDigits
	;

fragment
BinaryExponent
	:	BinaryExponentIndicator SignedInteger
	;

fragment
BinaryExponentIndicator
	:	[pP]
	;

//十进制整数
fragment
DecimalIntegerLiteral
	:	'0'
	|	NonZeroDigit (Digits? | Underscores Digits)
	;

fragment
Digits
	:	Digit (DigitsAndUnderscores? Digit)?
	;

fragment
Digit
	:	'0'
	|	NonZeroDigit
	;

fragment
NonZeroDigit
	:	[1-9]
	;

fragment
DigitsAndUnderscores
	:	DigitOrUnderscore+
	;

fragment
DigitOrUnderscore
	:	Digit
	|	'_'
	;

fragment
Underscores
	:	'_'+
	;

//十六进制整数
fragment
HexIntegerLiteral
	:	HexNumeral
	;

fragment
HexDigits
	:	HexDigit (HexDigitsAndUnderscores? HexDigit)?
	;

fragment
HexDigit
	:	[0-9a-fA-F]
	;

fragment
HexDigitsAndUnderscores
	:	HexDigitOrUnderscore+
	;

fragment
HexDigitOrUnderscore
	:	HexDigit
	|	'_'
	;

//八进制整数
fragment
OctalIntegerLiteral
	:	'0' [oO] OctalDigits
	;

fragment
OctalDigits
	:	OctalDigit (OctalDigitsAndUnderscores? OctalDigit)?
	;

fragment
OctalDigit
	:	[0-7]
	;

fragment
OctalDigitsAndUnderscores
	:	OctalDigitOrUnderscore+
	;

fragment
OctalDigitOrUnderscore
	:	OctalDigit
	|	'_'
	;

//二进制整数
fragment
BinaryIntegerLiteral
	:	'0' [bB] BinaryDigits
	;

fragment
BinaryDigits
	:	BinaryDigit (BinaryDigitsAndUnderscores? BinaryDigit)?
	;

fragment
BinaryDigit
	:	[01]
	;

fragment
BinaryDigitsAndUnderscores
	:	BinaryDigitOrUnderscore+
	;

fragment
BinaryDigitOrUnderscore
	:	BinaryDigit
	|	'_'
	;

Comma : ',';
LParen : '(';
RParen: ')';
Assign: '=';
Add : '+';
Sub : '-';
Mul : '*';
Div : '/';
Mod : '%';
BitAnd : '&';
BitOr : '|';
Caret : '^';
LShift : '<<';
RShift : '>>';

Add_Assign : '+=';
Sub_Assign : '-=';
Mul_Assign : '*=';
Div_Assign : '/=';
Mod_Assign : '%=';
And_Assign : '&=';
Or_Assign : '|=';
XOr_Assign : '^=';
LShift_Assign : '<<=';
RShift_Assign : '>>=';

Identifier
	:	[a-zA-Z_][0-9a-zA-Z_]*
	;

WhiteSpaces
    :   [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN)
    ;

LineBreak
    :   '\r'? '\n'
    ;
