/* usage:
deno run --check make-cn-unihan-mandarin-rule.ts \
    path/to/Unihan/Unihan_Readings.txt \
    > cn-unihan-mandarin-rule.js
*/
import { readLines } from 'https://deno.land/std/io/mod.ts'

type state = 'init' | 'in-header' | 'body'

const readings = await Deno.open(Deno.args[0]);

const simpl2trad: Map<number, string> = new Map();

let state : state = 'init';

for await (const line of readLines(readings)) {
    if (line === '#') {
        switch (state) {
            case 'init':
                state = 'in-header';
                console.log('/// ********** DO NOT EDIT **********');
                console.log('/// Generated from');
                break;
            case 'in-header':
                state = 'body';
                console.log(`\
const cnUnihanMandarinRule = [`);
                break;
            case 'body':
                // do nothing
                break;
        }
    }
    if (line.startsWith('# ') && state === 'in-header') {
        console.log('///   ' + line.substring(2));
    }
    const m = line.match(/^U\+([0-9A-Z]+)\tkMandarin\t([^ ]*)/);
    if (m) {
        const cp = parseInt(m[1], 16);
        const reading = m[2];
        console.log(JSON.stringify({
            pattern: String.fromCodePoint(cp),
            replacement: reading,
        }) + ",");
        simpl2trad.set(cp, reading);
    }
}

console.log("];");

console.log(`
const cnUnihanMandarinMediaRule =  (() => {
    const m = new Map(cnMediaRule.map(({pattern, replacement}) => [pattern, replacement]));
    return cnUnihanMandarinRule.map(({pattern, replacement}) => ({
        pattern,
        replacement: m.get(replacement) ?? replacement
    }));
})();
`);
