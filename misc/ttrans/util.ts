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

export const addZhToneMark2 = (input: string, replacement: string): Array<[string, string]> => {
    const text = input.normalize('NFC');
    const pats = [/a/, /(o|e|ê)/, /(iu|ui)/, /(i|u|ü)/];
    const marks = [
        ["\u{0304}", "\u{02c9}"],
        ["\u{0301}", "\u{02ca}"],
        ["\u{030c}", "\u{02c7}"],
        ["\u{0300}", "\u{02cb}"],
    ];

    for (const pat of pats) {
        if (text.match(pat)) {
            return marks.map(([m1, m2]) =>
                [text.replace(pat, (s) => s + m1).normalize('NFC'), replacement + m2 + " "]);
        }
    }
    return [[text, replacement + " "]];
};

export const addJaHepburnChoonMark = (input: [string, string]): Array<RuleEntry> =>
    addJaChoonMark_ (input, "\u{0304}");

export const addJaKunreiChoonMark = (input: [string, string]): Array<RuleEntry> =>
    addJaChoonMark_ (input, "\u{0302}");

const addJaChoonMark_ = (input: [string, string], mark: string): Array<RuleEntry> => {
    const [pattern, replacement] = input;
    if (pattern.match(/[aiueo]$/)) {
        return [
            {
                pattern, replacement
            },
            {
                pattern: (pattern + mark).normalize('NFC'),
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
