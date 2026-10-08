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
    ...cRule('b', 'ㇷ゙', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'ビュ', 'ッ'),
    ...cRule('c', 'ㇰ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'キュ', 'ッ'),
    ...cRule('d', 'ㇳ゙', 'ダ', 'ディ', 'ドゥ', 'デ', 'ド', 'デュ', 'ッ'),
    ...cRule('f', 'ㇷ', 'ファ', 'フィ', 'フ', 'フェ', 'フォ', 'フュ', 'ッ'),
    ...cRule('g', 'ㇰ゙', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ギュ', 'ッ'),
    ...cRule('h', 'ㇷ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'ヒュ', 'ッ'),
    ...cRule('k', 'ㇰ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'キュ', 'ッ'),
    ...cRule('l', 'ㇽ゚', 'ラ゚', 'リ゚', 'ル゚', 'レ゚', 'ロ゚', 'リ゚ュ', 'ッ'),
    ...cRule('m', 'ㇺ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ミュ', 'ン'),
    ...cRule('n', 'ン', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ニュ', 'ン'),
    ...cRule('p', 'ㇷ゚', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'ピュ', 'ッ'),
    ...cRule('r', 'ㇽ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'リュ', 'ッ'),
    ...cRule('s', 'ㇲ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'シュ', 'ッ'),
    ...cRule('t', 'ㇳ', 'タ', 'ティ', 'トゥ', 'テ', 'ト', 'テュ', 'ッ'),
    ...cRule('z', 'ㇲ゙', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ジュ', 'ッ'),

    ...cRule('x', 'ㇰㇲ', 'ㇰサ', 'ㇰシ', 'ㇰス', 'ㇰセ', 'ㇰソ', 'ㇰシュ', null),
    ...cRule('ph', 'ㇷ゚̣', 'パ̣', 'ピ̣', 'プ̣', 'ペ̣', 'ポ̣', 'ピ̣ュ', null),
    ...cRule('ch', 'ㇰ̣', 'カ̣', 'キ̣', 'ク̣', 'ケ̣', 'コ̣', 'キ̣ュ', null),
    ...cRule('th', 'ㇳ̣', 'タ̣', 'テ̣ィ', 'ト̣ゥ', 'テ̣', 'ト̣', 'テ̣ュ', null),
    ...cRule('rh', 'ㇽ̣', 'ラ̣', 'リ̣', 'ル̣', 'レ̣', 'ロ̣', 'リ̣ュ', null),

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

    { pattern: 'bs', replacement: 'ㇷ゚', next: 's' },
    { pattern: 'bt', replacement: 'ㇷ゚', next: 't' },
];

console.log('[');
result.forEach((rule, idx) => {
    console.log('  ' + JSON.stringify(rule) + (idx === result.length - 1 ? '' : ','));
});
console.log(']');
