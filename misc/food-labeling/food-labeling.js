/*
  正規表現ベースの栄養成分表示抽出。

  - 表示の単位及び名称は下記法令による。
  「食品表示基準（平成二十七年内閣府令第十号）」 別表第九
  https://elaws.e-gov.go.jp/document?lawid=427M60000002010_20230401_431M60000002024

  - 名称及び単位の別表示については下記のガイドラインによる。
  「食品表示法に基づく栄養成分表示のためのガイドライン第3版」
  https://www.caa.go.jp/policies/policy/food_labeling/health_promotion/pdf/food_labeling_cms206_20201001_02.pdf
 */
/*
  Copyright (c) 2023 OHASHI Daichi

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
 */
const reOpt = (...strs) => `(?:${strs.join("|")})`

const g    = reOpt("g",    "グラム");
const mg   = reOpt("mg",   "ミリグラム");
const mcg  = reOpt("μg",  "マイクログラム");
const kcal = reOpt("kcal", "キロカロリー");

/**
 * textからnameの成分量を抽出して返す。成分量はunitで指定した単位で終わっていなければならない。
 * 成分量が範囲表示されている場合は、上限値と下限値の平均値を返す。
 *
 * 成分表示の例: "たん白質 9.9g"
 *
 * @param{string} text 栄養成分表示を含む文字列
 * @param{string} name 抽出対象の栄養成分の名称
 * @param{string} unit 抽出対象の栄養成分の表示単位
 * @return{number} 指定の栄養成分の表示量。範囲表示の場合は上限値と下限値の平均値
 */
const extract = (text, name, unit) => {
    const re = new RegExp(
        name +
            "[:：]?" +
            "(?<ll>[0-9]+(?:\\.[0-9]+)?)" +
            // maybe ranged
            ("(?:" +
             "[-−~〜]" +
             "(?<ul>[0-9]+(?:\\.[0-9]+)?)" +
             ")?") +
            unit);
    const m = text.match(re);
    if (m) {
        const ll = +m.groups.ll;
        const ul = m.groups.ul ? +m.groups.ul : null;
        const result = ul ? (ll + ul) / 2 : ll;
        return result;
    }
    return null;
};

/**
 * textからnameの成分量を抽出し、objのpropに設定する。
 * 各成分表示はunitで指定した単位で終わっていなければならない。
 *
 * @param{string} text 栄養成分表示を含む文字列
 * @param{number} factor 抽出値にかける係数
 * @param{string} name 抽出対象の栄養成分の名称
 * @param{string} unit 抽出対象の栄養成分の表示単位
 */
const extractInto = (text, factor, name, unit, prop, obj) => {
    const v = extract(text, name, unit);
    if (v) {
        obj[prop] = v * factor;
    }
}

const preprocess = (text) =>
      text
      // ビタミンB1とB12を混同しないようにB1と2の間の空白はコロンに置き換える
      .replaceAll(/B1\s+2/g, 'B1:2')
      // それ以外の空白は意味に影響を与えないはずなので消す
      .replaceAll(/\s+/g, '')
;

const parse = (text_, factor) => {
    const result = {
        "name": "",
        "energy": null,
        "protein": null,
        "fat": null,
        "carbohydrate": null,
        "na": null,
        "naclEquivalent": null
    };
    const text = preprocess(text_);
    const f = (prop, unit, ...names) => extractInto(text, factor, reOpt(...names), unit, prop, result);

    f("protein",            g,    "たんぱく質",   "蛋白質", "たん白質", "タンパク質", "たんぱく", "タンパク");
    f("fat",                g,    "脂質");
    f("saturatedFattyAcid", g,    "飽和脂肪酸");
    f("n3FattyAcid",        g,    "n‐3系脂肪酸");
    f("n6FattyAcid",        g,    "n‐6系脂肪酸");
    f("cholesterol",        mg,   "コレステロール");
    f("carbohydrate",       g,    "炭水化物");
    f("saccharide",         g,    "糖質");
    f("sugar",              g,    "糖類");
    f("dietaryFiber",       g,    "食物繊維");
    f("zn",                 mg,   "亜鉛",         "Zn");
    f("k",                  mg,   "カリウム",     "K");
    f("ca",                 mg,   "カルシウム",   "Ca");
    f("cr",                 mcg,  "クロム");
    f("se",                 mcg,  "セレン");
    f("fe",                 mg,   "鉄",           "Fe");
    f("cu",                 mg,   "銅",           "Cu");
    f("na",                 mg,   "ナトリウム");
    f("mg",                 mg,   "マグネシウム", "Mg");
    f("mn",                 mg,   "マンガン");
    f("mo",                 mcg,  "モリブデン");
    f("i",                  mcg,  "ヨウ素");
    f("p",                  mg,   "リン");
    f("niacin",             mg,   "ナイアシン");
    f("pantothenicAcid",    mg,   "パントテン酸");
    f("biotin",             mcg,  "ビオチン");
    f("vitaminA",           mcg,  "ビタミンA",    "V.A",    "VA");
    f("vitaminB1",          mg,   "ビタミンB1",   "V.B1",   "VB1");
    f("vitaminB2",          mg,   "ビタミンB2",   "V.B2",   "VB2");
    f("vitaminB6",          mg,   "ビタミンB6",   "V.B6",   "VB6");
    f("vitaminB12",         mcg,  "ビタミンB12",  "V.B12",  "VB12");
    f("vitaminC",           mg,   "ビタミンC",    "V.C",    "VC");
    f("vitaminD",           mcg,  "ビタミンD",    "V.D",    "VD");
    f("vitaminE",           mg,   "ビタミンE",    "V.E",    "VE");
    f("vitaminK",           mcg,  "ビタミンK",    "V.K",    "VK");
    f("folate",             mcg,  "葉酸");
    f("energy",             kcal, "熱量",         "エネルギー");
    f("naclEquivalent",     g,    "食塩相当量");

    if (result.naclEquivalent && !result.na) {
        delete result.na;
    }

    if (!result.naclEquivalent && result.na) {
        delete result.naclEquivalent;
    }

    return result;
}
