red flags
    /g - search multiple patterns
    /i - perform case-sensitive search
    /m - multi-line search
    /s - allow to .(dot) metacharacter to mach any character includng line terminators (\n, \r, \u2028, \u2029)
    
regex expressions
    [abc] - match a ,b or c
    [^a] - match characters different than a
    [a-z] - match all a to z lowercase
    [A-Z] - match all A to Z uppercase
    [^A-Z] - match charachter different than A-Z
    /a|b/ - a or b
    
metacharacters 
    \w - A word character is a character a-z, A-Z, 0-9, including _ (underscore).
    \W - match different than a-z, A-Z, 0-9, including _ (underscore)
    \d - match 0-9
    \D - match different thatn 0-9
    \s - match whitespace character
    \S - match different than whitespcae character
    /^w3school/ - match at beginning of a string
    /w3school$/ - match at end of a string
    /\bLO/ or /LO\b/ - search at beggining or at end of a string
    /\BLO/ or /LO\b/ - search not at beggining or not at end of a string
    /(?<=y)x/ matches "x" only if "x" is preceded by "y".
    /(?<!y)x/ matches "x" only if "x" is NOT preceded by "y"
    /(haha)/ - matches the group of character as one
    /(?i:W3School)/ - flag i enabled only for "W3School"
    
quantifier
    /a+/ - matches one or more
    /a*/ - matches zero or more characters
    /10?/ - match less one or one character
    /\d{4}/ - The _x_{_n_} quantifier matches _n_ occurences of x
    /\d{4,}/ - The _x_{_n_,} quantifier matches _n_ or more occurences of _x_.
     
 