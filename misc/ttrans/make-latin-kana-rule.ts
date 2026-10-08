/*
 * ラテン語→カナ変換 JSON ルール生成
 */
export {};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const cRule = (c: string,
    bare: string | null,
    a: string | null,
    i: string | null,
    u: string | null,
    e: string | null,
    o: string | null,
    y: string | null,
    geminate: string | null,
) => [c, capitalize(c)].flatMap((c) => [
    bare && { pattern: c, replacement: bare },
    a && { pattern: c + 'a', replacement: a },
    i && { pattern: c + 'i', replacement: i },
    u && { pattern: c + 'u', replacement: u },
    e && { pattern: c + 'e', replacement: e },
    o && { pattern: c + 'o', replacement: o },
    y && { pattern: c + 'y', replacement: y },
    a && { pattern: c + 'ā', replacement: a + 'ー' },
    i && { pattern: c + 'ī', replacement: i + 'ー' },
    u && { pattern: c + 'ū', replacement: u + 'ー' },
    e && { pattern: c + 'ē', replacement: e + 'ー' },
    o && { pattern: c + 'ō', replacement: o + 'ー' },
    y && { pattern: c + 'ȳ', replacement: y + 'ー' },
    geminate && { pattern: c + c, replacement: geminate, next: c },
].filter((x) => Boolean(x)));

const rule = (pattern: string, replacement: string) =>
    [pattern, capitalize(pattern)]
        .map((pattern) => ({ pattern, replacement }));

const result = [
    ...cRule('b', 'ブ', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'ビュ', 'ッ'),
    ...cRule('c', 'ク', 'カ', 'キ', 'ク', 'ケ', 'コ', 'キュ', 'ッ'),
    ...cRule('d', 'ド', 'ダ', 'ディ', 'ドゥ', 'デ', 'ド', 'デュ', 'ッ'),
    ...cRule('f', 'フ', 'ファ', 'フィ', 'フ', 'フェ', 'フォ', 'フュ', 'ッ'),
    ...cRule('g', 'グ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ギュ', 'ッ'),
    ...cRule('h', 'フ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'ヒュ', 'ッ'),
    ...cRule('k', 'ク', 'カ', 'キ', 'ク', 'ケ', 'コ', 'キュ', 'ッ'),
    ...cRule('l', 'ル', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'リュ', 'ッ'),
    ...cRule('m', 'ム', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ミュ', 'ン'),
    ...cRule('n', 'ン', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ニュ', 'ン'),
    ...cRule('p', 'プ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'ピュ', 'ッ'),
    ...cRule('r', 'ル', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'リュ', 'ッ'),
    ...cRule('s', 'ス', 'サ', 'シ', 'ス', 'セ', 'ソ', 'シュ', 'ッ'),
    ...cRule('t', 'ト', 'タ', 'ティ', 'トゥ', 'テ', 'ト', 'テュ', 'ッ'),
    ...cRule('z', 'ズ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ジュ', 'ッ'),

    ...cRule('x', 'クス', 'クサ', 'クシ', 'クス', 'クセ', 'クソ', 'クシュ', null),
    ...cRule('ph', 'プ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'ピュ', null),
    ...cRule('ch', 'ク', 'カ', 'キ', 'ク', 'ケ', 'コ', 'キュ', null),
    ...cRule('th', 'ト', 'タ', 'ティ', 'トゥ', 'テ', 'ト', 'テュ', null),
    ...cRule('rh', 'ル', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'リュ', null),

    ...cRule('qu', null, 'クァ', 'クィ', 'クウ', 'クェ', 'クォ', null, null),
    ...cRule('ngu', null, 'ングァ', 'ングィ', 'ングウ', 'ングェ', 'ングォ', null, null),
    ...cRule('j', 'イ', 'ヤ', 'イ', 'ユ', 'イェ', 'ヨ', null, null),
    ...cRule('v', 'ウ', 'ワ', 'ウィ', 'ウ', 'ウェ', 'ウォ', null, null),
    ...cRule('y', null, 'ヤ', 'イ', 'ユ', 'イェ', 'ヨ', null, null),
    ...cRule('w', 'ウ', 'ワ', 'ウィ', 'ウ', 'ウェ', 'ウォ', null, null),

    ...rule('a', 'ア'),
    ...rule('i', 'イ'),
    ...rule('u', 'ウ'),
    ...rule('e', 'エ'),
    ...rule('o', 'オ'),
    ...rule('y', 'ユ'),

    ...rule('ā', 'アー'),
    ...rule('ī', 'イー'),
    ...rule('ū', 'ウー'),
    ...rule('ē', 'エー'),
    ...rule('ō', 'オー'),
    ...rule('ȳ', 'ユー'),

    { pattern: 'bs', replacement: 'プ', next: 's' },
    { pattern: 'bt', replacement: 'プ', next: 't' },
];

console.log('[');
result.forEach((rule, idx) => {
    console.log('  ' + JSON.stringify(rule) + (idx === result.length - 1 ? '' : ','));
});
console.log(']');
