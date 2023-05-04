export interface RuleEntry {
    pattern: string;
    replacement: string;
    next?: string
};

export const addZhToneMark = (input: string): Array<string> => {
    const text = input.normalize('NFC');
    const pats = [/a/, /(o|e|ê)/, /(iu|ui)/, /(i|u|ü)/];
    const marks = ["\u{0304}", "\u{0301}", "\u{030c}", "\u{0300}"];

    for (const pat of pats) {
        if (text.match(pat)) {
            return marks.map((m) => text.replace(pat, (s) => s + m).normalize('NFC'));
        }
    }
    return [text];
};

export const addJaChoonMark = (input: [string, string]): Array<RuleEntry> => {
    const [pattern, replacement] = input;
    if (pattern.match(/[aiueo]$/)) {
        return [
            {
                pattern, replacement
            },
            {
                pattern: (pattern + "\u{0304}").normalize('NFC'),
                replacement: replacement + "ー"
            }
        ];
    }
    return [{pattern, replacement}];
};

export const printRule = (rule: Array<RuleEntry>) => {
    console.log("[");
    rule.forEach((r, i, a) => {
        console.log("  " + JSON.stringify(r) + (i == a.length - 1 ? "" : ","));
    });
    console.log("]");
};
