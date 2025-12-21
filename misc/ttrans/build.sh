#!/bin/sh
deno=${deno:-deno}
ttrans=ttrans.js
ctrans=ctrans.js

makeRule() {
    var="$1"
    src="$2"
    echo "const $var ="
    "$deno" run --check "$src"
    echo ";"
}

makeCRule() {
    var="$1"
    src="$2"
    echo "const ${var}0 ="
    "$deno" run --check "$src"
    echo ";"
    echo "const $var = compileRule(${var}0);"
    echo
}

{
    cat _ttrans.js
    makeRule jaHepburnRule make-ja-hepburn-rule.ts
    makeRule jaKunreiRule make-ja-kunrei-rule.ts
    makeRule jaOldHepburnRule make-ja-old-hepburn-rule.ts
    makeRule jaWaapuroHepburnRule make-ja-waapuro-hepburn-rule.ts
    makeRule jaWaapuroKunreiRule make-ja-waapuro-kunrei-rule.ts
    makeRule jaWaapuroKunreiJoudaiRule make-ja-waapuro-kunrei-joudai-rule.ts
} > "$ttrans"

{
    cat _ctrans.js
    makeCRule cnMediaRule make-cn-media-rule.ts
    makeCRule cnEduRule make-cn-edu-rule.ts
    makeCRule cnEduToneRule make-cn-edu+tone-rule.ts
    cat cn-unihan-mandarin-rule.js
    cat ja-kannon-rule.js
} > "$ctrans"
