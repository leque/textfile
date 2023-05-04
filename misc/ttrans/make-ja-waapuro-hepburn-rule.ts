import { printRule, RuleEntry }  from './util.ts'

const makeJaWaapuroHepburnRule = (): Array<RuleEntry> => {
    const result: Array<RuleEntry> = jaWaapuroHepburnPats.map(([pattern, replacement]) => ({pattern, replacement}));
    const inits = [
        "k", "s", "t",
        "h", "f", "m", "y", "r",
        "g", "z", "j", "d", "b",
        "p"
    ];
    inits.forEach((c) => result.push({pattern: c + c, replacement: "ッ", next: c}));
    result.push({
        pattern: "tch",
        replacement: "ッ",
        next: "ch"
    });
    return result;
};

const jaWaapuroHepburnPats: Array<[string, string]> = [
    ["-", "ー"],
    ["a", "ア"],
    ["i", "イ"],
    ["u", "ウ"],
    ["e", "エ"],
    ["o", "オ"],
    ["ka", "カ"],
    ["ki", "キ"],
    ["ku", "ク"],
    ["ke", "ケ"],
    ["ko", "コ"],
    ["sa", "サ"],
    ["shi", "シ"],
    ["su", "ス"],
    ["se", "セ"],
    ["so", "ソ"],
    ["ta", "タ"],
    ["chi", "チ"],
    ["tsu", "ツ"],
    ["te", "テ"],
    ["to", "ト"],
    ["na", "ナ"],
    ["ni", "ニ"],
    ["nu", "ヌ"],
    ["ne", "ネ"],
    ["no", "ノ"],
    ["ha", "ハ"],
    ["hi", "ヒ"],
    ["fu", "フ"],
    ["he", "ヘ"],
    ["ho", "ホ"],
    ["ma", "マ"],
    ["mi", "ミ"],
    ["mu", "ム"],
    ["me", "メ"],
    ["mo", "モ"],
    ["ya", "ヤ"],
    ["yu", "ユ"],
    ["yo", "ヨ"],
    ["ra", "ラ"],
    ["ri", "リ"],
    ["ru", "ル"],
    ["re", "レ"],
    ["ro", "ロ"],
    ["wa", "ワ"],
    ["wo", "ヲ"],
    ["nn", "ン"],
    ["n", "ン"],
    ["kya", "キャ"],
    ["kyu", "キュ"],
    ["kye", "キェ"],
    ["kyo", "キョ"],
    ["gya", "ギャ"],
    ["gyu", "ギュ"],
    ["gye", "ギェ"],
    ["gyo", "ギョ"],
    ["sha", "シャ"],
    ["shu", "シュ"],
    ["she", "シェ"],
    ["sho", "ショ"],
    ["ja", "ジャ"],
    ["ju", "ジュ"],
    ["je", "ジェ"],
    ["jo", "ジョ"],
    ["cha", "チャ"],
    ["chu", "チュ"],
    ["che", "チェ"],
    ["cho", "チョ"],
    ["bya", "ビャ"],
    ["byu", "ビュ"],
    ["bye", "ビェ"],
    ["byo", "ビョ"],
    ["pya", "ピャ"],
    ["pyu", "ピュ"],
    ["pye", "ピェ"],
    ["pyo", "ピョ"],
    ["mya", "ミャ"],
    ["myu", "ミュ"],
    ["mye", "ミェ"],
    ["myo", "ミョ"],
    ["rya", "リャ"],
    ["ryu", "リュ"],
    ["rye", "リェ"],
    ["ryo", "リョ"],
    ["ga", "ガ"],
    ["gi", "ギ"],
    ["gu", "グ"],
    ["ge", "ゲ"],
    ["go", "ゴ"],
    ["za", "ザ"],
    ["ji", "ジ"],
    ["zu", "ズ"],
    ["ze", "ゼ"],
    ["zo", "ゾ"],
    ["da", "ダ"],
    ["de", "デ"],
    ["do", "ド"],
    ["ba", "バ"],
    ["bi", "ビ"],
    ["bu", "ブ"],
    ["be", "ベ"],
    ["bo", "ボ"],
    ["pa", "パ"],
    ["pi", "ピ"],
    ["pu", "プ"],
    ["pe", "ペ"],
    ["po", "ポ"]
];

printRule(makeJaWaapuroHepburnRule());
