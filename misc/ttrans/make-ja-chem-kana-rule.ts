/* 化合物名字訳基準 */
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const cRule = (c: string,
    a: string | null,
    i: string | null,
    u: string | null,
    e: string | null,
    o: string | null,
    geminate: string | null,
    bare: string | null,
) => [c, capitalize(c)].flatMap((c) => [
    a && { pattern: c + 'a', replacement: a },
    i && { pattern: c + 'i', replacement: i },
    i && { pattern: c + 'y', replacement: i },
    u && { pattern: c + 'u', replacement: u },
    e && { pattern: c + 'e', replacement: e },
    o && { pattern: c + 'o', replacement: o },
    geminate && { pattern: c + c, replacement: geminate, next: c },
    bare && { pattern: c, replacement: bare },
].filter((x) => Boolean(x)));

const rule = (pattern: string, replacement: string, next?: string) =>
    [pattern, capitalize(pattern)]
        .map((pattern) => ({ pattern, replacement, next }));

const result = [
    ...cRule('b', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'ッ', 'ブ'),
    ...cRule('c', 'カ', 'キ', 'ク', 'セ', 'コ', 'ッ', 'ク'),
    ...cRule('d', 'ダ', 'ジ', 'ズ', 'デ', 'ド', 'ッ', 'ド'),
    ...cRule('f', 'ファ', 'フィ', 'フ', 'フェ', 'ホ', 'ッ', 'フ'),
    ...cRule('g', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ッ', 'グ'),
    ...cRule('h', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'ー', 'ー'),
    ...cRule('j', 'ジャ', 'ジ', 'ジュ', 'ジェ', 'ジョ', 'ー', 'ジュ'),
    ...cRule('k', 'カ', 'キ', 'ク', 'ケ', 'コ', 'ッ', 'ク'),
    ...cRule('l', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ッ', 'ル'),
    ...cRule('m', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ン', 'ム'),
    ...cRule('n', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ン', 'ン'),
    ...cRule('p', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'ッ', 'プ'),
    ...cRule('qu', 'クア', 'キ', null, 'クエ', 'クオ', null, null),
    ...cRule('r', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ッ', 'ル'),
    ...cRule('s', 'サ', 'シ', 'ス', 'セ', 'ソ', 'ッ', 'ス'),
    ...cRule('sc', 'スカ', 'シ', 'スク', 'セ', 'スコ', null, 'スク'),
    ...cRule('sh', 'シャ', 'シ', 'シュ', 'シェ', 'ショ', null, 'シュ'),
    ...cRule('t', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ッ', 'ト'),
    ...cRule('th', 'タ', 'チ', 'ツ', 'テ', 'ト', null, 'ト'),
    ...cRule('v', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', null, 'ブ'),
    ...cRule('w', 'ワ', 'ウィ', 'ウ', 'ウェ', 'ウォ', null, 'ウ'),
    ...cRule('x', 'キサ', 'キシ', 'キス', 'キセ', 'キソ', null, 'キス'),
    ...cRule('y', 'ヤ', 'イ', 'ユ', 'イエ', 'ヨ', null, null),
    ...cRule('z', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ッ', 'ズ'),

    ...rule('a', 'ア'),
    ...rule('i', 'イ'),
    ...rule('u', 'ウ'),
    ...rule('e', 'エ'),
    ...rule('o', 'オ'),
    ...rule('y', 'イ'),

    ...rule('ch', '', 'k'),
    ...rule('cch', 'ッ', 'ch'),
    ...rule('ck', 'ッ', 'k'),
    ...rule('cqu', 'ッ', 'qu'),
    ...rule('ff', '', 'f'),
    ...rule('gh', '', 'g'),
    ...rule('ll', '', 'l'),
    ...rule('mb', 'ン', 'b'),
    ...rule('mf', 'ン', 'f'),
    ...rule('mp', 'ン', 'p'),
    ...rule('mpf', 'ン', 'pf'),
    ...rule('mph', 'ン', 'ph'),
    ...rule('pf', '', 'p'),
    ...rule('ph', '', 'f'),
    ...rule('rr', '', 'r'),
    ...rule('rh', '', 'r'),
    ...rule('rrh', '', 'r'),
];

console.log('[');
result.forEach((rule, idx) => {
    console.log('  ' + JSON.stringify(rule) + (idx === result.length - 1 ? '' : ','));
});
console.log(']');
