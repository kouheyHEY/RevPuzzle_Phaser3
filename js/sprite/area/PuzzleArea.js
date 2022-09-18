class PuzzleArea {
    constructor() {
        this.puzzleSize = [];
        this.puzzleDefault = [];
        this.puzzleUnit = [];
        this.reverseMode = REV_MODE_CROSS;
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

    }

    /**
     * 指定の位置にあるパズルを反転させる
     * @param {int} _row 行
     * @param {int} _col 列
     * @param {Boolean} _revArround 周囲を反転させるか
     */
    reversePuzzleUnit(_row, _col, _revArround) {

    }

    /**
     * パズルの反転方法を変更する
     */
    changeRevMode() {

    }
}