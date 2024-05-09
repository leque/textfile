// 中国語音節表記ガイドライン［平凡社版］（2011年8月1日公開）
// （β）語学教育向け表記ガイドライン http://cn.heibonsha.co.jp/edu.pdf を元に作成
export const cnEduPats: Array<[string, string, (string|null)]> = [
    ["a",      "アァ",     "ア"],
    ["o",      "オォ",     "オ"],
    ["e",      "ウァ",     null],
    ["ê",      "エ",       null],
    ["er",     "アル",     null],
    ["ai",     "アイ",     null],
    ["ei",     "エイ",     null],
    ["ao",     "アオ",     null],
    ["ou",     "オウ",     null],
    ["an",     "アン",     null],
    ["en",     "エン",     null],
    ["ang",    "アァン",   null],
    ["eng",    "エゥン",   null],
    ["yi",     "イィ",     "イ"],
    ["ya",     "ヤァ",     "ヤ"],
    ["yo",     "ヨォ",     "ヨ"],
    ["ye",     "イエ",     null],
    ["yao",    "ヤオ",     null],
    ["you",    "ヨウ",     null],
    ["yan",    "イエン",   null],
    ["yin",    "イン",     null],
    ["yang",   "ヤン",     null],
    ["ying",   "イィン",   null],
    ["yong",   "ヨン",     null],
    ["wu",     "ウゥ",     "ウ"],
    ["wa",     "ワァ",     "ワ"],
    ["wo",     "ウオ",     null],
    ["wai",    "ワイ",     null],
    ["wei",    "ウェイ",   null],
    ["wan",    "ワン",     null],
    ["wen",    "ウェン",   null],
    ["wang",   "ワァン",   null],
    ["weng",   "ウォン",   null],
    ["yu",     "ユィ",     null],
    ["yue",    "ユエ",     null],
    ["yuan",   "ユエン",   null],
    ["yun",    "ユィン",   null],
    ["ba",     "バァ",     "バ"],
    ["bo",     "ボォ",     "ボ"],
    ["bai",    "バイ",     null],
    ["bei",    "ベイ",     null],
    ["bao",    "バオ",     null],
    ["ban",    "バン",     null],
    ["ben",    "ベン",     null],
    ["bang",   "バァン",   null],
    ["beng",   "ボン",     null],
    ["bi",     "ビィ",     "ビ"],
    ["bie",    "ビエ",     null],
    ["biao",   "ビアオ",   null],
    ["bian",   "ビエン",   null],
    ["bin",    "ビン",     null],
    ["bing",   "ビィン",   null],
    ["bu",     "ブゥ",     "ブ"],
    ["pa",     "パァ",     null],
    ["po",     "ポォ",     null],
    ["pai",    "パイ",     null],
    ["pei",    "ペイ",     null],
    ["pao",    "パオ",     null],
    ["pou",    "ポウ",     null],
    ["pan",    "パン",     null],
    ["pen",    "ペン",     null],
    ["pang",   "パァン",   null],
    ["peng",   "ポン",     null],
    ["pi",     "ピィ",     null],
    ["pie",    "ピエ",     null],
    ["piao",   "ピアオ",   null],
    ["pian",   "ピエン",   null],
    ["pin",    "ピン",     null],
    ["ping",   "ピィン",   null],
    ["pu",     "プゥ",     null],
    ["ma",     "マァ",     "マ"],
    ["mo",     "モォ",     "モ"],
    ["me",     "マ",       null],
    ["mai",    "マイ",     null],
    ["mei",    "メイ",     null],
    ["mao",    "マオ",     null],
    ["mou",    "モウ",     null],
    ["man",    "マン",     null],
    ["men",    "メン",     null],
    ["mang",   "マァン",   null],
    ["meng",   "モン",     null],
    ["mi",     "ミィ",     "ミ"],
    ["mie",    "ミエ",     null],
    ["miao",   "ミアオ",   null],
    ["miu",    "ミウ",     null],
    ["mian",   "ミエン",   null],
    ["min",    "ミン",     null],
    ["ming",   "ミィン",   null],
    ["mu",     "ムゥ",     "ム"],
    ["fa",     "ファア",   "ファ"],
    ["fo",     "フォ",     null],
    ["fei",    "フェイ",   null],
    ["fou",    "フォウ",   null],
    ["fan",    "ファン",   null],
    ["fen",    "フェン",   null],
    ["fang",   "ファアン", null],
    ["feng",   "フォン",   null],
    ["fu",     "フゥ",     "フ"],
    ["da",     "ダァ",     "ダ"],
    ["de",     "ドァ",     "ダ"],
    ["dai",    "ダイ",     null],
    ["dei",    "デイ",     null],
    ["dao",    "ダオ",     null],
    ["dou",    "ドウ",     null],
    ["dan",    "ダン",     null],
    ["den",    "デン",     null],
    ["dang",   "ダァン",   null],
    ["deng",   "デゥン",   null],
    ["dong",   "ドォン",   null],
    ["di",     "ディー",   "ディ"],
    ["dia",    "ディア",   null],
    ["die",    "ディエ",   null],
    ["diao",   "ディアオ", null],
    ["diu",    "ディウ",   null],
    ["dian",   "ディエン", null],
    ["ding",   "ディン",   null],
    ["du",     "ドゥ",     null],
    ["duo",    "ドゥオ",   null],
    ["dui",    "ドゥイ",   null],
    ["duan",   "ドワン",   null],
    ["dun",    "ドゥン",   null],
    ["ta",     "タァ",     "タ"],
    ["te",     "トァ",     "タ"],
    ["tai",    "タイ",     null],
    ["tao",    "タオ",     null],
    ["tou",    "トウ",     null],
    ["tan",    "タン",     null],
    ["tang",   "タァン",   null],
    ["teng",   "テゥン",   null],
    ["tong",   "トォン",   null],
    ["ti",     "ティー",   "ティ"],
    ["tie",    "ティエ",   null],
    ["tiao",   "ティアオ", null],
    ["tian",   "ティエン", null],
    ["ting",   "ティン",   null],
    ["tu",     "トゥ",     null],
    ["tuo",    "トゥオ",   null],
    ["tui",    "トゥイ",   null],
    ["tuan",   "トワン",   null],
    ["tun",    "トゥン",   null],
    ["na",     "ナァ",     "ナ"],
    ["ne",     "ヌァ",     "ナ"],
    ["nai",    "ナイ",     null],
    ["nei",    "ネイ",     null],
    ["nao",    "ナオ",     null],
    ["nou",    "ノウ",     null],
    ["nan",    "ナン",     null],
    ["nen",    "ネン",     null],
    ["nang",   "ナァン",   null],
    ["neng",   "ネゥン",   null],
    ["nong",   "ノォン",   null],
    ["ni",     "ニィ",     "ニ"],
    ["nie",    "ニエ",     null],
    ["niao",   "ニアオ",   null],
    ["niu",    "ニウ",     null],
    ["nian",   "ニエン",   null],
    ["nin",    "ニン",     null],
    ["niang",  "ニアン",   null],
    ["ning",   "ニィン",   null],
    ["nu",     "ヌゥ",     null],
    ["nuo",    "ヌゥオ",   null],
    ["nuan",   "ヌワン",   null],
    ["nun",    "ヌン",     null],
    ["nü",     "ニュィ",   "ニュ"],
    ["nüe",    "ニュエ",   null],
    ["la",     "ラァ",     "ラ"],
    ["lo",     "ロ",       null],
    ["le",     "ルァ",     "ラ"],
    ["lai",    "ライ",     null],
    ["lei",    "レイ",     null],
    ["lao",    "ラオ",     null],
    ["lou",    "ロウ",     null],
    ["lan",    "ラン",     null],
    ["lang",   "ラァン",   null],
    ["leng",   "レゥン",   null],
    ["long",   "ルォン",   "ロン"],
    ["li",     "リィ",     "リ"],
    ["lia",    "リア",     null],
    ["lie",    "リエ",     null],
    ["liao",   "リアオ",   null],
    ["liu",    "リウ",     null],
    ["lian",   "リエン",   null],
    ["lin",    "リン",     null],
    ["liang",  "リアン",   null],
    ["ling",   "リィン",   null],
    ["lu",     "ルゥ",     "リュ"],
    ["luo",    "ルゥオ",   null],
    ["luan",   "ルワン",   null],
    ["lun",    "ルン",     null],
    ["lü",     "リュィ",   null],
    ["lüe",    "リュエ",   null],
    ["ga",     "ガァ",     "ガ"],
    ["ge",     "グァ",     "ガ"],
    ["gai",    "ガイ",     null],
    ["gei",    "ゲイ",     null],
    ["gao",    "ガオ",     null],
    ["gou",    "ゴウ",     null],
    ["gan",    "ガン",     null],
    ["gen",    "ゲン",     null],
    ["gang",   "ガァン",   null],
    ["geng",   "ゲゥン",   null],
    ["gong",   "ゴォン",   null],
    ["gu",     "グゥ",     "グ"],
    ["gua",    "グワ",     null],
    ["guo",    "グゥオ",   null],
    ["guai",   "グワイ",   null],
    ["gui",    "グゥイ",   null],
    ["guan",   "グワン",   null],
    ["gun",    "グン",     null],
    ["guang",  "グアン",   null],
    ["ka",     "カァ",     "カ"],
    ["ke",     "クァ",     "カ"],
    ["kai",    "カイ",     null],
    ["kei",    "ケイ",     null],
    ["kao",    "カオ",     null],
    ["kou",    "コウ",     null],
    ["kan",    "カン",     null],
    ["ken",    "ケン",     null],
    ["kang",   "カァン",   null],
    ["keng",   "ケゥン",   null],
    ["kong",   "コォン",   null],
    ["ku",     "クゥ",     "ク"],
    ["kua",    "クワ",     null],
    ["kuo",    "クゥオ",   null],
    ["kuai",   "クワイ",   null],
    ["kui",    "クゥイ",   null],
    ["kuan",   "クワン",   null],
    ["kun",    "クン",     null],
    ["kuang",  "クアン",   null],
    ["ha",     "ハァ",     "ハ"],
    ["he",     "ホァ",     null],
    ["hai",    "ハイ",     null],
    ["hei",    "ヘイ",     null],
    ["hao",    "ハオ",     null],
    ["hou",    "ホウ",     null],
    ["han",    "ハン",     null],
    ["hen",    "ヘン",     null],
    ["hang",   "ハァン",   null],
    ["heng",   "ヘゥン",   null],
    ["hong",   "ホォン",   null],
    ["hu",     "ホゥ",     "ホ"],
    ["hua",    "ホワ",     null],
    ["huo",    "ホゥオ",   null],
    ["huai",   "ホワイ",   null],
    ["hui",    "ホゥイ",   null],
    ["huan",   "ホワン",   null],
    ["hun",    "ホゥン",   null],
    ["huang",  "ホアン",   null],
    ["ji",     "ジィ",     "ジ"],
    ["jia",    "ジア",     null],
    ["jie",    "ジエ",     null],
    ["jiao",   "ジアオ",   null],
    ["jiu",    "ジウ",     null],
    ["jian",   "ジエン",   null],
    ["jin",    "ジン",     null],
    ["jiang",  "ジアン",   null],
    ["jing",   "ジィン",   null],
    ["jiong",  "ジオン",   null],
    ["ju",     "ジュィ",   "ジュ"],
    ["jue",    "ジュエ",   null],
    ["juan",   "ジュエン", null],
    ["jun",    "ジュィン", null],
    ["qi",     "チィ",     "チ"],
    ["qia",    "チア",     null],
    ["qie",    "チエ",     null],
    ["qiao",   "チアオ",   null],
    ["qiu",    "チウ",     null],
    ["qian",   "チエン",   null],
    ["qin",    "チン",     null],
    ["qiang",  "チアン",   null],
    ["qing",   "チィン",   null],
    ["qiong",  "チオン",   null],
    ["qu",     "チュィ",   "チュ"],
    ["que",    "チュエ",   null],
    ["quan",   "チュエン", null],
    ["qun",    "チュィン", null],
    ["xi",     "シィ",     "シ"],
    ["xia",    "シア",     null],
    ["xie",    "シエ",     null],
    ["xiao",   "シアオ",   null],
    ["xiu",    "シウ",     null],
    ["xian",   "シエン",   null],
    ["xin",    "シン",     null],
    ["xiang",  "シアン",   null],
    ["xing",   "シィン",   null],
    ["xiong",  "シオン",   null],
    ["xu",     "シュィ",   "シュ"],
    ["xue",    "シュエ",   null],
    ["xuan",   "シュエン", null],
    ["xun",    "シュィン", null],
    ["zha",    "ヂャア",   "ヂャ"],
    ["zhe",    "ヂョァ",   "ヂャ"],
    ["zhi",    "ヂー",     "ヂ"],
    ["zhai",   "ヂャイ",   null],
    ["zhei",   "ヂェイ",   null],
    ["zhao",   "ヂャオ",   null],
    ["zhou",   "ヂョウ",   null],
    ["zhan",   "ヂャン",   null],
    ["zhen",   "ヂェン",   null],
    ["zhang",  "ヂャァン", null],
    ["zheng",  "ヂョン",   null],
    ["zhong",  "ヂォン",   null],
    ["zhu",    "ヂュウ",   "ヂュ"],
    ["zhua",   "ヂュワ",   null],
    ["zhuo",   "ヂュオ",   null],
    ["zhuai",  "ヂュワイ", null],
    ["zhui",   "ヂュイ",   null],
    ["zhuan",  "ヂュワン", null],
    ["zhun",   "ヂュン",   null],
    ["zhuang", "ヂュアン", null],
    ["cha",    "チャア",   "チャ"],
    ["che",    "チョァ",   "チャ"],
    ["chi",    "チー",     "チ"],
    ["chai",   "チャイ",   null],
    ["chao",   "チャオ",   null],
    ["chou",   "チョウ",   null],
    ["chan",   "チャン",   null],
    ["chen",   "チェン",   null],
    ["chang",  "チャァン", null],
    ["cheng",  "チョン",   null],
    ["chong",  "チォン",   null],
    ["chu",    "チュウ",   "チュ"],
    ["chua",   "チュワ",   null],
    ["chuo",   "チュオ",   null],
    ["chuai",  "チュワイ", null],
    ["chui",   "チュイ",   null],
    ["chuan",  "チュワン", null],
    ["chun",   "チュン",   null],
    ["chuang", "チュアン", null],
    ["sha",    "シャア",   "シャ"],
    ["she",    "ショァ",   "シャ"],
    ["shi",    "シー",     "シ"],
    ["shai",   "シャイ",   null],
    ["shei",   "シェイ",   null],
    ["shao",   "シャオ",   null],
    ["shou",   "ショウ",   null],
    ["shan",   "シャン",   null],
    ["shen",   "シェン",   null],
    ["shang",  "シャァン", null],
    ["sheng",  "ション",   null],
    ["shu",    "シュウ",   "シュ"],
    ["shua",   "シュワ",   null],
    ["shuo",   "シュオ",   null],
    ["shuai",  "シュワイ", null],
    ["shui",   "シュイ",   null],
    ["shuan",  "シュワン", null],
    ["shun",   "シュン",   null],
    ["shuang", "シュアン", null],
    ["re",     "ロァ",     null],
    ["ri",     "リー",     "リ"],
    ["rao",    "ロァオ",   null],
    ["rou",    "ロォウ",   null],
    ["ran",    "ロァン",   null],
    ["ren",    "ロェン",   null],
    ["rang",   "ロァァン", null],
    ["reng",   "ロゥン",   null],
    ["rong",   "ロォン",   null],
    ["ru",     "ロゥ",     null],
    ["rua",    "ロワ",     null],
    ["ruo",    "ロゥオ",   null],
    ["rui",    "ロゥイ",   null],
    ["ruan",   "ロワン",   null],
    ["run",    "ロゥン",   null],
    ["za",     "ヅァア",   "ヅァ"],
    ["ze",     "ヅァ",     null],
    ["zi",     "ヅー",     "ヅ"],
    ["zai",    "ヅァイ",   null],
    ["zei",    "ヅェイ",   null],
    ["zao",    "ヅァオ",   null],
    ["zou",    "ヅォウ",   null],
    ["zan",    "ヅァン",   null],
    ["zen",    "ヅェン",   null],
    ["zang",   "ヅァァン", null],
    ["zeng",   "ヅゥン",   null],
    ["zong",   "ヅォン",   null],
    ["zu",     "ヅゥ",     null],
    ["zuo",    "ヅゥオ",   null],
    ["zui",    "ヅゥイ",   null],
    ["zuan",   "ヅワン",   null],
    ["zun",    "ヅン",     null],
    ["ca",     "ツァア",   "ツァ"],
    ["ce",     "ツァ",     null],
    ["ci",     "ツー",     "ツ"],
    ["cai",    "ツァイ",   null],
    ["cao",    "ツァオ",   null],
    ["cou",    "ツォウ",   null],
    ["can",    "ツァン",   null],
    ["cen",    "ツェン",   null],
    ["cang",   "ツァァン", null],
    ["ceng",   "ツゥン",   null],
    ["cong",   "ツォン",   null],
    ["cu",     "ツゥ",     null],
    ["cuo",    "ツゥオ",   null],
    ["cui",    "ツゥイ",   null],
    ["cuan",   "ツワン",   null],
    ["cun",    "ツン",     null],
    ["sa",     "サア",     "サ"],
    ["se",     "スァ",     null],
    ["si",     "スー",     "ス"],
    ["sai",    "サイ",     null],
    ["sao",    "サオ",     null],
    ["sou",    "ソウ",     null],
    ["san",    "サン",     null],
    ["sen",    "セン",     null],
    ["sang",   "サァン",   null],
    ["seng",   "セゥン",   null],
    ["song",   "ソォン",   null],
    ["su",     "スゥ",     null],
    ["suo",    "スゥオ",   null],
    ["sui",    "スゥイ",   null],
    ["suan",   "スワン",   null],
    ["sun",    "スン",     null]
];