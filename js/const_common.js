
/* 全シーン共通変数 START */
// 画面サイズ
// 16 * 42
const D_WIDTH = 672;
const D_HEIGHT = 672;

/* 全シーン共通変数 END */

/* ゲームシーン変数 START */

// 表示項目の項目名
const DISP_COL_PLAYER = "Player";
const DISP_COL_PLAYTIME = "PlayTime";
const DISP_COL_PLAYTIME_UNIT = "sec";
const DISP_COL_REVERSE = "Reverse";
const DISP_COL_REVERSE_UNIT = "Times";
const DISP_COL_CURRENTMODE = "CurrentMode";
const DISP_COL_HIGHSCORE = "HighScore";
const DISP_COL_HIGHSCORE_UNIT = "Times";

// 各モードのID
const MODE_EASY = 0;
const MODE_NORMAL = 1;
const MODE_HARD = 2;
const MODE_EXTRA = 3;
const MODE_HADES = 4;

// 各モードの表示用文字列
const MODE_NAME = [
    "EASY",
    "NORMAL",
    "HARD",
    "EXTRA",
    "HADES"
];

// パズルの広さの定義
const PUZZLE_SIZE = [
    [3, 3],
    [3, 3],
    [3, 4],
    [3, 4],
    [4, 4]
];

// パズルの状態数を表す定数
const PUZZLE_STATE_NUM = [
    2,
    2,
    2,
    2,
    3
];

// パズルの行列のインデックス
const IDX_ROW = 0;
const IDX_COL = 1;

// パズルの反転モード
const REV_MODE_CROSS = 0;
const REV_MODE_ALL = 1;
const REV_MODE_DIAGONAL = 2;

// パズルの反転用配列
const REV_POS_LIST_CROSS = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];
const REV_POS_LIST_ALL = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
const REV_POS_LIST_DIAGONAL = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];
const REV_POS_LIST = [
    REV_POS_LIST_CROSS,
    REV_POS_LIST_ALL,
    REV_POS_LIST_DIAGONAL,
];

// パズルの状態
// 0が正
const PUZZLE_STATE_0 = 0;
const PUZZLE_STATE_1 = 1;

/* ゲームシーン変数 END */