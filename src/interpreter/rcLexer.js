// Generated from src/interpreter/rc.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001e\u016d\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0080\n\u0002\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u0084\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u008d",
    "\n\u0005\u0003\u0005\u0005\u0005\u0090\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u0095\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u009a\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0005\b\u00a2\n\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00ad\n\u000b\u0003\u000b\u0005\u000b\u00b0\n\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000b\u00b4\n\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00be\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c3\n\u000e\u0005\u000e",
    "\u00c5\n\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00c9\n\u000f\u0003",
    "\u000f\u0005\u000f\u00cc\n\u000f\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00d0\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0006\u0012\u00d5",
    "\n\u0012\r\u0012\u000e\u0012\u00d6\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u00db\n\u0013\u0003\u0014\u0006\u0014\u00de\n\u0014\r\u0014\u000e\u0014",
    "\u00df\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00e6",
    "\n\u0016\u0003\u0016\u0005\u0016\u00e9\n\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0006\u0018\u00ee\n\u0018\r\u0018\u000e\u0018\u00ef\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u00f4\n\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0005\u001b\u00fc\n",
    "\u001b\u0003\u001b\u0005\u001b\u00ff\n\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0006\u001d\u0104\n\u001d\r\u001d\u000e\u001d\u0105\u0003",
    "\u001e\u0003\u001e\u0005\u001e\u010a\n\u001e\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0005 \u0112\n \u0003 \u0005",
    " \u0115\n \u0003!\u0003!\u0003\"\u0006\"\u011a\n\"\r\"\u000e\"\u011b",
    "\u0003#\u0003#\u0005#\u0120\n#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003",
    "+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u0003",
    "0\u00030\u00031\u00031\u00031\u00032\u00032\u00032\u00033\u00033\u0003",
    "3\u00034\u00034\u00034\u00035\u00035\u00035\u00036\u00036\u00036\u0003",
    "7\u00037\u00037\u00038\u00038\u00038\u00039\u00039\u00039\u0003:\u0003",
    ":\u0003:\u0003:\u0003;\u0003;\u0003;\u0003;\u0003<\u0003<\u0007<\u0162",
    "\n<\f<\u000e<\u0165\u000b<\u0003=\u0006=\u0168\n=\r=\u000e=\u0169\u0003",
    "=\u0003=\u0002\u0002>\u0003\u0003\u0005\u0004\u0007\u0002\t\u0002\u000b",
    "\u0002\r\u0002\u000f\u0002\u0011\u0002\u0013\u0002\u0015\u0002\u0017",
    "\u0002\u0019\u0002\u001b\u0002\u001d\u0002\u001f\u0002!\u0002#\u0002",
    "%\u0002\'\u0002)\u0002+\u0002-\u0002/\u00021\u00023\u00025\u00027\u0002",
    "9\u0002;\u0002=\u0002?\u0002A\u0002C\u0002E\u0002G\u0005I\u0006K\u0007",
    "M\bO\tQ\nS\u000bU\fW\rY\u000e[\u000f]\u0010_\u0011a\u0012c\u0013e\u0014",
    "g\u0015i\u0016k\u0017m\u0018o\u0019q\u001as\u001bu\u001cw\u001dy\u001e",
    "\u0003\u0002\u000f\u0004\u0002ZZzz\u0004\u0002GGgg\u0004\u0002--//\u0004",
    "\u0002RRrr\u0003\u00023;\u0005\u00022;CHch\u0004\u0002QQqq\u0003\u0002",
    "29\u0004\u0002DDdd\u0003\u000223\u0005\u0002C\\aac|\u0006\u00022;C\\",
    "aac|\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002\u0170\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002G\u0003",
    "\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002",
    "\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002",
    "\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002",
    "\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002",
    "Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003",
    "\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002",
    "\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002",
    "\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002",
    "\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002",
    "o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003",
    "\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002",
    "\u0002\u0002\u0002y\u0003\u0002\u0002\u0002\u0003\u007f\u0003\u0002",
    "\u0002\u0002\u0005\u0083\u0003\u0002\u0002\u0002\u0007\u0085\u0003\u0002",
    "\u0002\u0002\t\u0099\u0003\u0002\u0002\u0002\u000b\u009b\u0003\u0002",
    "\u0002\u0002\r\u009e\u0003\u0002\u0002\u0002\u000f\u00a1\u0003\u0002",
    "\u0002\u0002\u0011\u00a5\u0003\u0002\u0002\u0002\u0013\u00a7\u0003\u0002",
    "\u0002\u0002\u0015\u00b3\u0003\u0002\u0002\u0002\u0017\u00b5\u0003\u0002",
    "\u0002\u0002\u0019\u00b8\u0003\u0002\u0002\u0002\u001b\u00c4\u0003\u0002",
    "\u0002\u0002\u001d\u00c6\u0003\u0002\u0002\u0002\u001f\u00cf\u0003\u0002",
    "\u0002\u0002!\u00d1\u0003\u0002\u0002\u0002#\u00d4\u0003\u0002\u0002",
    "\u0002%\u00da\u0003\u0002\u0002\u0002\'\u00dd\u0003\u0002\u0002\u0002",
    ")\u00e1\u0003\u0002\u0002\u0002+\u00e3\u0003\u0002\u0002\u0002-\u00ea",
    "\u0003\u0002\u0002\u0002/\u00ed\u0003\u0002\u0002\u00021\u00f3\u0003",
    "\u0002\u0002\u00023\u00f5\u0003\u0002\u0002\u00025\u00f9\u0003\u0002",
    "\u0002\u00027\u0100\u0003\u0002\u0002\u00029\u0103\u0003\u0002\u0002",
    "\u0002;\u0109\u0003\u0002\u0002\u0002=\u010b\u0003\u0002\u0002\u0002",
    "?\u010f\u0003\u0002\u0002\u0002A\u0116\u0003\u0002\u0002\u0002C\u0119",
    "\u0003\u0002\u0002\u0002E\u011f\u0003\u0002\u0002\u0002G\u0121\u0003",
    "\u0002\u0002\u0002I\u0123\u0003\u0002\u0002\u0002K\u0125\u0003\u0002",
    "\u0002\u0002M\u0127\u0003\u0002\u0002\u0002O\u0129\u0003\u0002\u0002",
    "\u0002Q\u012b\u0003\u0002\u0002\u0002S\u012d\u0003\u0002\u0002\u0002",
    "U\u012f\u0003\u0002\u0002\u0002W\u0131\u0003\u0002\u0002\u0002Y\u0133",
    "\u0003\u0002\u0002\u0002[\u0135\u0003\u0002\u0002\u0002]\u0137\u0003",
    "\u0002\u0002\u0002_\u0139\u0003\u0002\u0002\u0002a\u013c\u0003\u0002",
    "\u0002\u0002c\u013f\u0003\u0002\u0002\u0002e\u0142\u0003\u0002\u0002",
    "\u0002g\u0145\u0003\u0002\u0002\u0002i\u0148\u0003\u0002\u0002\u0002",
    "k\u014b\u0003\u0002\u0002\u0002m\u014e\u0003\u0002\u0002\u0002o\u0151",
    "\u0003\u0002\u0002\u0002q\u0154\u0003\u0002\u0002\u0002s\u0157\u0003",
    "\u0002\u0002\u0002u\u015b\u0003\u0002\u0002\u0002w\u015f\u0003\u0002",
    "\u0002\u0002y\u0167\u0003\u0002\u0002\u0002{\u0080\u0005\u001b\u000e",
    "\u0002|\u0080\u0005)\u0015\u0002}\u0080\u00053\u001a\u0002~\u0080\u0005",
    "=\u001f\u0002\u007f{\u0003\u0002\u0002\u0002\u007f|\u0003\u0002\u0002",
    "\u0002\u007f}\u0003\u0002\u0002\u0002\u007f~\u0003\u0002\u0002\u0002",
    "\u0080\u0004\u0003\u0002\u0002\u0002\u0081\u0084\u0005\t\u0005\u0002",
    "\u0082\u0084\u0005\u0013\n\u0002\u0083\u0081\u0003\u0002\u0002\u0002",
    "\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0006\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u00072\u0002\u0002\u0086\u0087\t\u0002\u0002\u0002\u0087",
    "\u0088\u0005+\u0016\u0002\u0088\b\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0005\u001d\u000f\u0002\u008a\u008c\u00070\u0002\u0002\u008b\u008d",
    "\u0005\u001d\u000f\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002\u0002\u0002\u008e\u0090",
    "\u0005\u000b\u0006\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0003\u0002\u0002\u0002\u0090\u009a\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u00070\u0002\u0002\u0092\u0094\u0005\u001d\u000f\u0002\u0093\u0095",
    "\u0005\u000b\u0006\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094\u0095",
    "\u0003\u0002\u0002\u0002\u0095\u009a\u0003\u0002\u0002\u0002\u0096\u0097",
    "\u0005\u001d\u000f\u0002\u0097\u0098\u0005\u000b\u0006\u0002\u0098\u009a",
    "\u0003\u0002\u0002\u0002\u0099\u0089\u0003\u0002\u0002\u0002\u0099\u0091",
    "\u0003\u0002\u0002\u0002\u0099\u0096\u0003\u0002\u0002\u0002\u009a\n",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0005\r\u0007\u0002\u009c\u009d",
    "\u0005\u000f\b\u0002\u009d\f\u0003\u0002\u0002\u0002\u009e\u009f\t\u0003",
    "\u0002\u0002\u009f\u000e\u0003\u0002\u0002\u0002\u00a0\u00a2\u0005\u0011",
    "\t\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0005\u001d",
    "\u000f\u0002\u00a4\u0010\u0003\u0002\u0002\u0002\u00a5\u00a6\t\u0004",
    "\u0002\u0002\u00a6\u0012\u0003\u0002\u0002\u0002\u00a7\u00a8\u0005\u0015",
    "\u000b\u0002\u00a8\u00a9\u0005\u0017\f\u0002\u00a9\u0014\u0003\u0002",
    "\u0002\u0002\u00aa\u00ac\u0005\u0007\u0004\u0002\u00ab\u00ad\u00070",
    "\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002",
    "\u0002\u0002\u00ad\u00b4\u0003\u0002\u0002\u0002\u00ae\u00b0\u0005\u0007",
    "\u0004\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u00070",
    "\u0002\u0002\u00b2\u00b4\u0005+\u0016\u0002\u00b3\u00aa\u0003\u0002",
    "\u0002\u0002\u00b3\u00af\u0003\u0002\u0002\u0002\u00b4\u0016\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0005\u0019\r\u0002\u00b6\u00b7\u0005\u000f",
    "\b\u0002\u00b7\u0018\u0003\u0002\u0002\u0002\u00b8\u00b9\t\u0005\u0002",
    "\u0002\u00b9\u001a\u0003\u0002\u0002\u0002\u00ba\u00c5\u00072\u0002",
    "\u0002\u00bb\u00c2\u0005!\u0011\u0002\u00bc\u00be\u0005\u001d\u000f",
    "\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002",
    "\u0002\u00be\u00c3\u0003\u0002\u0002\u0002\u00bf\u00c0\u0005\'\u0014",
    "\u0002\u00c0\u00c1\u0005\u001d\u000f\u0002\u00c1\u00c3\u0003\u0002\u0002",
    "\u0002\u00c2\u00bd\u0003\u0002\u0002\u0002\u00c2\u00bf\u0003\u0002\u0002",
    "\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4\u00ba\u0003\u0002\u0002",
    "\u0002\u00c4\u00bb\u0003\u0002\u0002\u0002\u00c5\u001c\u0003\u0002\u0002",
    "\u0002\u00c6\u00cb\u0005\u001f\u0010\u0002\u00c7\u00c9\u0005#\u0012",
    "\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cc\u0005\u001f\u0010",
    "\u0002\u00cb\u00c8\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002",
    "\u0002\u00cc\u001e\u0003\u0002\u0002\u0002\u00cd\u00d0\u00072\u0002",
    "\u0002\u00ce\u00d0\u0005!\u0011\u0002\u00cf\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00d0 \u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\t\u0006\u0002\u0002\u00d2\"\u0003\u0002\u0002\u0002",
    "\u00d3\u00d5\u0005%\u0013\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
    "\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7$\u0003\u0002\u0002\u0002",
    "\u00d8\u00db\u0005\u001f\u0010\u0002\u00d9\u00db\u0007a\u0002\u0002",
    "\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00d9\u0003\u0002\u0002\u0002",
    "\u00db&\u0003\u0002\u0002\u0002\u00dc\u00de\u0007a\u0002\u0002\u00dd",
    "\u00dc\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "(\u0003\u0002\u0002\u0002\u00e1\u00e2\u0005\u0007\u0004\u0002\u00e2",
    "*\u0003\u0002\u0002\u0002\u00e3\u00e8\u0005-\u0017\u0002\u00e4\u00e6",
    "\u0005/\u0018\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6",
    "\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e9",
    "\u0005-\u0017\u0002\u00e8\u00e5\u0003\u0002\u0002\u0002\u00e8\u00e9",
    "\u0003\u0002\u0002\u0002\u00e9,\u0003\u0002\u0002\u0002\u00ea\u00eb",
    "\t\u0007\u0002\u0002\u00eb.\u0003\u0002\u0002\u0002\u00ec\u00ee\u0005",
    "1\u0019\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003",
    "\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003",
    "\u0002\u0002\u0002\u00f00\u0003\u0002\u0002\u0002\u00f1\u00f4\u0005",
    "-\u0017\u0002\u00f2\u00f4\u0007a\u0002\u0002\u00f3\u00f1\u0003\u0002",
    "\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002\u0002\u00f42\u0003\u0002",
    "\u0002\u0002\u00f5\u00f6\u00072\u0002\u0002\u00f6\u00f7\t\b\u0002\u0002",
    "\u00f7\u00f8\u00055\u001b\u0002\u00f84\u0003\u0002\u0002\u0002\u00f9",
    "\u00fe\u00057\u001c\u0002\u00fa\u00fc\u00059\u001d\u0002\u00fb\u00fa",
    "\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fd",
    "\u0003\u0002\u0002\u0002\u00fd\u00ff\u00057\u001c\u0002\u00fe\u00fb",
    "\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff6",
    "\u0003\u0002\u0002\u0002\u0100\u0101\t\t\u0002\u0002\u01018\u0003\u0002",
    "\u0002\u0002\u0102\u0104\u0005;\u001e\u0002\u0103\u0102\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002",
    "\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106:\u0003\u0002",
    "\u0002\u0002\u0107\u010a\u00057\u001c\u0002\u0108\u010a\u0007a\u0002",
    "\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u0108\u0003\u0002\u0002",
    "\u0002\u010a<\u0003\u0002\u0002\u0002\u010b\u010c\u00072\u0002\u0002",
    "\u010c\u010d\t\n\u0002\u0002\u010d\u010e\u0005? \u0002\u010e>\u0003",
    "\u0002\u0002\u0002\u010f\u0114\u0005A!\u0002\u0110\u0112\u0005C\"\u0002",
    "\u0111\u0110\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0115\u0005A!\u0002\u0114",
    "\u0111\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115",
    "@\u0003\u0002\u0002\u0002\u0116\u0117\t\u000b\u0002\u0002\u0117B\u0003",
    "\u0002\u0002\u0002\u0118\u011a\u0005E#\u0002\u0119\u0118\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011cD\u0003\u0002",
    "\u0002\u0002\u011d\u0120\u0005A!\u0002\u011e\u0120\u0007a\u0002\u0002",
    "\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002",
    "\u0120F\u0003\u0002\u0002\u0002\u0121\u0122\u0007.\u0002\u0002\u0122",
    "H\u0003\u0002\u0002\u0002\u0123\u0124\u0007*\u0002\u0002\u0124J\u0003",
    "\u0002\u0002\u0002\u0125\u0126\u0007+\u0002\u0002\u0126L\u0003\u0002",
    "\u0002\u0002\u0127\u0128\u0007?\u0002\u0002\u0128N\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0007-\u0002\u0002\u012aP\u0003\u0002\u0002\u0002",
    "\u012b\u012c\u0007/\u0002\u0002\u012cR\u0003\u0002\u0002\u0002\u012d",
    "\u012e\u0007,\u0002\u0002\u012eT\u0003\u0002\u0002\u0002\u012f\u0130",
    "\u00071\u0002\u0002\u0130V\u0003\u0002\u0002\u0002\u0131\u0132\u0007",
    "\'\u0002\u0002\u0132X\u0003\u0002\u0002\u0002\u0133\u0134\u0007(\u0002",
    "\u0002\u0134Z\u0003\u0002\u0002\u0002\u0135\u0136\u0007~\u0002\u0002",
    "\u0136\\\u0003\u0002\u0002\u0002\u0137\u0138\u0007`\u0002\u0002\u0138",
    "^\u0003\u0002\u0002\u0002\u0139\u013a\u0007>\u0002\u0002\u013a\u013b",
    "\u0007>\u0002\u0002\u013b`\u0003\u0002\u0002\u0002\u013c\u013d\u0007",
    "@\u0002\u0002\u013d\u013e\u0007@\u0002\u0002\u013eb\u0003\u0002\u0002",
    "\u0002\u013f\u0140\u0007-\u0002\u0002\u0140\u0141\u0007?\u0002\u0002",
    "\u0141d\u0003\u0002\u0002\u0002\u0142\u0143\u0007/\u0002\u0002\u0143",
    "\u0144\u0007?\u0002\u0002\u0144f\u0003\u0002\u0002\u0002\u0145\u0146",
    "\u0007,\u0002\u0002\u0146\u0147\u0007?\u0002\u0002\u0147h\u0003\u0002",
    "\u0002\u0002\u0148\u0149\u00071\u0002\u0002\u0149\u014a\u0007?\u0002",
    "\u0002\u014aj\u0003\u0002\u0002\u0002\u014b\u014c\u0007\'\u0002\u0002",
    "\u014c\u014d\u0007?\u0002\u0002\u014dl\u0003\u0002\u0002\u0002\u014e",
    "\u014f\u0007(\u0002\u0002\u014f\u0150\u0007?\u0002\u0002\u0150n\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0007~\u0002\u0002\u0152\u0153\u0007",
    "?\u0002\u0002\u0153p\u0003\u0002\u0002\u0002\u0154\u0155\u0007`\u0002",
    "\u0002\u0155\u0156\u0007?\u0002\u0002\u0156r\u0003\u0002\u0002\u0002",
    "\u0157\u0158\u0007>\u0002\u0002\u0158\u0159\u0007>\u0002\u0002\u0159",
    "\u015a\u0007?\u0002\u0002\u015at\u0003\u0002\u0002\u0002\u015b\u015c",
    "\u0007@\u0002\u0002\u015c\u015d\u0007@\u0002\u0002\u015d\u015e\u0007",
    "?\u0002\u0002\u015ev\u0003\u0002\u0002\u0002\u015f\u0163\t\f\u0002\u0002",
    "\u0160\u0162\t\r\u0002\u0002\u0161\u0160\u0003\u0002\u0002\u0002\u0162",
    "\u0165\u0003\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163",
    "\u0164\u0003\u0002\u0002\u0002\u0164x\u0003\u0002\u0002\u0002\u0165",
    "\u0163\u0003\u0002\u0002\u0002\u0166\u0168\t\u000e\u0002\u0002\u0167",
    "\u0166\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169",
    "\u0167\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a",
    "\u016b\u0003\u0002\u0002\u0002\u016b\u016c\b=\u0002\u0002\u016cz\u0003",
    "\u0002\u0002\u0002$\u0002\u007f\u0083\u008c\u008f\u0094\u0099\u00a1",
    "\u00ac\u00af\u00b3\u00bd\u00c2\u00c4\u00c8\u00cb\u00cf\u00d6\u00da\u00df",
    "\u00e5\u00e8\u00ef\u00f3\u00fb\u00fe\u0105\u0109\u0111\u0114\u011b\u011f",
    "\u0163\u0169\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function rcLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

rcLexer.prototype = Object.create(antlr4.Lexer.prototype);
rcLexer.prototype.constructor = rcLexer;

Object.defineProperty(rcLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

rcLexer.EOF = antlr4.Token.EOF;
rcLexer.IntegerLiteral = 1;
rcLexer.FloatingPointLiteral = 2;
rcLexer.COMMA = 3;
rcLexer.LPAREN = 4;
rcLexer.RPAREN = 5;
rcLexer.ASSIGN = 6;
rcLexer.ADD = 7;
rcLexer.SUB = 8;
rcLexer.MUL = 9;
rcLexer.DIV = 10;
rcLexer.MOD = 11;
rcLexer.BITAND = 12;
rcLexer.BITOR = 13;
rcLexer.CARET = 14;
rcLexer.LSHIFT = 15;
rcLexer.RSHIFT = 16;
rcLexer.ADD_ASSIGN = 17;
rcLexer.SUB_ASSIGN = 18;
rcLexer.MUL_ASSIGN = 19;
rcLexer.DIV_ASSIGN = 20;
rcLexer.MOD_ASSIGN = 21;
rcLexer.AND_ASSIGN = 22;
rcLexer.OR_ASSIGN = 23;
rcLexer.XOR_ASSIGN = 24;
rcLexer.LSHIFT_ASSIGN = 25;
rcLexer.RSHIFT_ASSIGN = 26;
rcLexer.Identifier = 27;
rcLexer.WS = 28;

rcLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

rcLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

rcLexer.prototype.literalNames = [ null, null, null, "','", "'('", "')'", 
                                   "'='", "'+'", "'-'", "'*'", "'/'", "'%'", 
                                   "'&'", "'|'", "'^'", "'<<'", "'>>'", 
                                   "'+='", "'-='", "'*='", "'/='", "'%='", 
                                   "'&='", "'|='", "'^='", "'<<='", "'>>='" ];

rcLexer.prototype.symbolicNames = [ null, "IntegerLiteral", "FloatingPointLiteral", 
                                    "COMMA", "LPAREN", "RPAREN", "ASSIGN", 
                                    "ADD", "SUB", "MUL", "DIV", "MOD", "BITAND", 
                                    "BITOR", "CARET", "LSHIFT", "RSHIFT", 
                                    "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", 
                                    "DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", 
                                    "OR_ASSIGN", "XOR_ASSIGN", "LSHIFT_ASSIGN", 
                                    "RSHIFT_ASSIGN", "Identifier", "WS" ];

rcLexer.prototype.ruleNames = [ "IntegerLiteral", "FloatingPointLiteral", 
                                "HexNumeral", "DecimalFloatingPointLiteral", 
                                "ExponentPart", "ExponentIndicator", "SignedInteger", 
                                "Sign", "HexadecimalFloatingPointLiteral", 
                                "HexSignificand", "BinaryExponent", "BinaryExponentIndicator", 
                                "DecimalIntegerLiteral", "Digits", "Digit", 
                                "NonZeroDigit", "DigitsAndUnderscores", 
                                "DigitOrUnderscore", "Underscores", "HexIntegerLiteral", 
                                "HexDigits", "HexDigit", "HexDigitsAndUnderscores", 
                                "HexDigitOrUnderscore", "OctalIntegerLiteral", 
                                "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores", 
                                "OctalDigitOrUnderscore", "BinaryIntegerLiteral", 
                                "BinaryDigits", "BinaryDigit", "BinaryDigitsAndUnderscores", 
                                "BinaryDigitOrUnderscore", "COMMA", "LPAREN", 
                                "RPAREN", "ASSIGN", "ADD", "SUB", "MUL", 
                                "DIV", "MOD", "BITAND", "BITOR", "CARET", 
                                "LSHIFT", "RSHIFT", "ADD_ASSIGN", "SUB_ASSIGN", 
                                "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
                                "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
                                "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "Identifier", 
                                "WS" ];

rcLexer.prototype.grammarFileName = "rc.g4";


exports.rcLexer = rcLexer;
