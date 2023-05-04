#!/bin/sh
deno=${deno:-deno}
dst=ttrans.js

makeRule() {
    var="$1"
    src="$2"
    echo "const $var ="
    "$deno" run --check "$src"
    echo ";"
}

{
    cat _ttrans.js
    makeRule cnMediaRule make-cn-media-rule.ts
    makeRule cnEduRule make-cn-edu-rule.ts
    makeRule jaHepburnRule make-ja-hepburn-rule.ts
    makeRule jaKunreiRule make-ja-kunrei-rule.ts
    makeRule jaOldHepburnRule make-ja-old-hepburn-rule.ts
    makeRule jaWaapuroHepburnRule make-ja-waapuro-hepburn-rule.ts
    makeRule jaWaapuroKunreiRule make-ja-waapuro-kunrei-rule.ts
} > "$dst"
