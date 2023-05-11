import { printRule, RuleEntry }  from './util.ts'

const makeJaWaapuroKunreiRule = (): Array<RuleEntry> => {
    const result: Array<RuleEntry> = jaWaapuroKunreiPats.map(([pattern, replacement]) => ({pattern, replacement}));
    const inits = [
        "k", "s", "t",
        "h", "m", "y", "r",
        "g", "z", "d", "b",
        "p"
    ];
    inits.forEach((c) => result.push({pattern: c + c, replacement: "っ", next: c}));
    return result;
};

const jaWaapuroKunreiPats: Array<[string, string]> = [
    ["ki1", "\u{1b026}"],
    ["ki2", "き"],
    ["hi1", "ひ"],
    ["hi2", "\u{1b0af}"],
    ["mi1", "み"],
    ["mi2", "\u{1b0cf}"],
    ["gi1", "\u{1b026}\u{3099}"],
    ["gi2", "ぎ"],
    ["bi1", "び"],
    ["bi2", "\u{1b0af}\u{3099}"],
    ["pi1", "ぴ"],
    ["pi2", "\u{1b0af}\u{309a}"],
    ["ke1", "け"],
    ["ke2", "\u{1b034}"],
    ["he1", "へ"],
    ["he2", "\u{1b0b3}"],
    ["me1", "め"],
    ["me2", "\u{1b0d4}"],
    ["ge1", "げ"],
    ["ge2", "\u{1b034}\u{3099}"],
    ["be1", "べ"],
    ["be2", "\u{1b0b3}\u{3099}"],
    ["pe1", "ぺ"],
    ["pe2", "\u{1b0b3}\u{309a}"],
    ["ko1", "\u{1b038}"],
    ["ko2", "こ"],
    ["so1", "\u{1b05c}"],
    ["so2", "そ"],
    ["to1", "\u{1b06d}"],
    ["to2", "と"],
    ["no1", "\u{1b091}"],
    ["no2", "の"],
    ["mo1", "も"],
    ["mo2", "\u{1b0d7}"],
    ["yo1", "\u{1b0e2}"],
    ["yo2", "よ"],
    ["ro1", "\u{1b106}"],
    ["ro2", "ろ"],
    ["go1", "\u{1b038}\u{3099}"],
    ["go2", "ご"],
    ["zo1", "\u{1b05c}\u{3099}"],
    ["zo2", "ぞ"],
    ["do1", "\u{1b06d}\u{3099}"],
    ["do2", "ど"],
    ["-", "ー"],
    ["a", "あ"],
    ["i", "い"],
    ["u", "う"],
    ["e", "え"],
    ["o", "お"],
    ["ka", "か"],
    ["ki", "き"],
    ["ku", "く"],
    ["ke", "け"],
    ["ko", "こ"],
    ["sa", "さ"],
    ["si", "し"],
    ["su", "す"],
    ["se", "せ"],
    ["so", "そ"],
    ["ta", "た"],
    ["ti", "ち"],
    ["tu", "つ"],
    ["te", "て"],
    ["to", "と"],
    ["na", "な"],
    ["ni", "に"],
    ["nu", "ぬ"],
    ["ne", "ね"],
    ["no", "の"],
    ["ha", "は"],
    ["hi", "ひ"],
    ["hu", "ふ"],
    ["he", "へ"],
    ["ho", "ほ"],
    ["ma", "ま"],
    ["mi", "み"],
    ["mu", "む"],
    ["me", "め"],
    ["mo", "も"],
    ["ya", "や"],
    ["yu", "ゆ"],
    ["ye", "\u{1b001}"],
    ["yo", "よ"],
    ["ra", "ら"],
    ["ri", "り"],
    ["ru", "る"],
    ["re", "れ"],
    ["ro", "ろ"],
    ["wa", "わ"],
    ["wi", "ゐ"],
    ["we", "ゑ"],
    ["wo", "を"],
    ["nn", "ん"],
    ["n", "ん"],
    ["kya", "きゃ"],
    ["kyu", "きゅ"],
    ["kye", "きぇ"],
    ["kyo", "きょ"],
    ["gya", "ぎゃ"],
    ["gyu", "ぎゅ"],
    ["gye", "ぎぇ"],
    ["gyo", "ぎょ"],
    ["sya", "しゃ"],
    ["syu", "しゅ"],
    ["sye", "しぇ"],
    ["syo", "しょ"],
    ["zya", "じゃ"],
    ["zyu", "じゅ"],
    ["zye", "じぇ"],
    ["zyo", "じょ"],
    ["tya", "ちゃ"],
    ["tyu", "ちゅ"],
    ["tye", "ちぇ"],
    ["tyo", "ちょ"],
    ["bya", "びゃ"],
    ["byu", "びゅ"],
    ["bye", "びぇ"],
    ["byo", "びょ"],
    ["pya", "ぴゃ"],
    ["pyu", "ぴゅ"],
    ["pye", "ぴぇ"],
    ["pyo", "ぴょ"],
    ["mya", "みゃ"],
    ["myu", "みゅ"],
    ["mye", "みぇ"],
    ["myo", "みょ"],
    ["rya", "りゃ"],
    ["ryu", "りゅ"],
    ["rye", "りぇ"],
    ["ryo", "りょ"],
    ["ga", "が"],
    ["gi", "ぎ"],
    ["gu", "ぐ"],
    ["ge", "げ"],
    ["go", "ご"],
    ["za", "ざ"],
    ["zi", "じ"],
    ["zu", "ず"],
    ["ze", "ぜ"],
    ["zo", "ぞ"],
    ["da", "だ"],
    ["de", "で"],
    ["do", "ど"],
    ["ba", "ば"],
    ["bi", "び"],
    ["bu", "ぶ"],
    ["be", "べ"],
    ["bo", "ぼ"],
    ["pa", "ぱ"],
    ["pi", "ぴ"],
    ["pu", "ぷ"],
    ["pe", "ぺ"],
    ["po", "ぽ"]
];

printRule(makeJaWaapuroKunreiRule());
