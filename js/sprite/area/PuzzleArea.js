class PuzzleArea {
    constructor() {
        this.puzzleSize = [];
        this.puzzleDefault = [];
        this.puzzleUnit = [];
        this.puzzleUnitSprite = [];
        this.reverseMode = REV_MODE_CROSS;
        this.puzzleMode = MODE_EASY;
    }

    /**
     * パズルを初期配列に戻す
     */
    restartPuzzle() {
        // パズル配列を初期化する
        this.puzzleUnit = [];

        for (var i = 0; i < this.puzzleSize[IDX_ROW]; i++) {
            // 空の配列を準備する
            this.puzzleUnit.push([]);
            for (var j = 0; j < this.puzzleSize[IDX_COL]; j++) {
                // 初期配列の値を代入する
                this.puzzleUnit[i].push(this.puzzleDefault[i][j]);
            }
        }
    }

    /**
     * 初期配列を生成する
     */
    initPuzzle() {
        // 各配列を初期化する
        this.puzzleUnit = [];
        this.puzzleDefault = [];

        for (var i = 0; i < this.puzzleSize[IDX_ROW]; i++) {
            // 空の配列を準備する
            this.puzzleUnit.push([]);
            this.puzzleDefault.push([]);

            for (var j = 0; j < this.puzzleSize[IDX_COL]; j++) {
                // 初期配列を生成する
                this.puzzleUnit[i].push(PUZZLE_STATE_1);
                this.puzzleDefault[i].push(PUZZLE_STATE_1);
            }
        }

    }

    /**
     * パズルが正解用パズルと同一か判定する
     * @return 正解ならtrue, そうでないならfalse
     */
    checkPuzzleAnswer() {
        for (unitRow of this.puzzleUnit) {
            for (unit of unitRow) {
                if (unit != PUZZLE_STATE_0) {
                    // 一つでも一致しないなら, false
                    return false
                }
            }
        }
        return true;
    }

    /**
     * 指定の位置にあるパズルを反転させる
     * @param {int} _row 行
     * @param {int} _col 列
     * @param {Boolean} _revArround 周囲を反転させるか
     */
    reversePuzzleUnit(_row, _col, _revArround) {
        for (var i = -1; i <= 1; i++) {
            // パズルの範囲外を参照している場合
            if (_row + i < 0 || _row + i >= this.puzzleSize[IDX_ROW]) {
                continue;
            }
            for (var j = -1; j <= 1; j++) {
                // パズルの範囲外を参照している場合
                if (_col + j < 0 || _col + j >= this.puzzleSize[IDX_COL]) {
                    continue;
                }
                // パズルを反転させる
                this.puzzleUnit[i][j] =
                    (this.puzzleUnit[i][j] + REV_POS_LIST[this.puzzleMode][i][j])
                    % PUZZLE_STATE_NUM[this.puzzleMode];
            }
        }
    }

    /**
     * パズルの反転方法を変更する
     */
    changeRevMode() {

    }
}