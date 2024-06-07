const ttrans = (text, rule) => {
    let input = text.normalize('NFC');
    const result = [];
    const [re, map] = compileRule(rule);
    while (true) {
        const m = input.match(re);
        if (m) {
            const [_m, before, match, after] = m;
            result.push(before);
            const r = map.get(match);
            if (r) {
                const {replacement, next} = r;
                result.push(replacement);
                input = next ? (next + after) : after;
            } else {
                result.push(match);
                input = after;
            }
        } else {
            result.push(input);
            break;
        }
    }
    return result.join('');
};

const compileRule = (rule) => {
    const alts = rule
          .sort((a, b) => -compareInt(a.pattern.length, b.pattern.length))
          .map(r => r.pattern).join("|");
    const re = new RegExp(`(.*?)(${alts})(.*)`, "su");
    const map = new Map(rule.map(({pattern, replacement, next}) =>
        [pattern, {replacement, next}]));
    return [re, map];
};

const compareInt = (x, y) =>
      x > y ? 1
      : x < y ? -1
      : 0;

