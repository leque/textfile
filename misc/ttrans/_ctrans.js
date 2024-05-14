const ctrans = (text, rule) => {
    let input = text.normalize('NFC').toLowerCase();
    const result = [];
    const {pattern, mapping} = rule;
    return input.replaceAll(pattern, (x) => {
        const m = mapping.get(x);
        return m ? m : x;
    });
};

const compileRule = (rule) => {
    const alts = rule
          .sort((a, b) => -compareInt(a.pattern.length, b.pattern.length))
          .map(r => r.pattern).join("|");
    const pattern = new RegExp(`(${alts})`, "sug");
    const mapping = new Map(rule.map(({pattern, replacement}) =>
        [pattern, replacement]));
    return {pattern, mapping};
};

const compareInt = (x, y) =>
      x > y ? 1
      : x < y ? -1
      : 0;

const composeRule = (x, y) => ({
    pattern: x.pattern,
    mapping: new Map([...x.mapping.entries()].map(([k, v]) => [
        k,
        y.mapping.get(v) ?? v
    ]))
});
