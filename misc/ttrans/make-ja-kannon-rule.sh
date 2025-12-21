#!/bin/sh

{
    echo 'const jaKannonRule0 = ['
    sed -e 1d \
        -e 's/^/  {"pattern":"/' \
        -e 's/,/","replacement":"/' \
        -e 's/$/"},/' < ../../kan-on-all/日本漢音廣韻全字表.csv
    echo '];'
    echo
    echo 'const jaKannonRule = compileRule(jaKannonRule0);'

} > ja-kannon-rule.js
