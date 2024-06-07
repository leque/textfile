const ctrans = (text, rule) => {
    let input = text.normalize('NFC');
    const result = [];
    const {pattern, replacer} = rule;
    return input.replaceAll(pattern, (x) => {
        const m = replacer(x);
        return m ? m : x;
    });
};

const compileRule = (rule) => {
    const alts = rule
          .sort((a, b) => -compareInt(a.pattern.length, b.pattern.length))
          .map(r => r.pattern).join("|");
    const pattern = new RegExp(`(${alts})`, "isug");
    const mapping = new Map(rule.map(({pattern, replacement}) =>
        [pattern, replacement]));
    return {pattern, replacer: (x) => mapping.get(x)};
};

const compareInt = (x, y) =>
      x > y ? 1
      : x < y ? -1
      : 0;

const composeRule = (x, y) => ({
    pattern: x.pattern,
    replacer: (v1) => {
        const v2 = x.replacer(v1);
        if (!v2) return v2;
        return y.replacer(v2);
    }
});
