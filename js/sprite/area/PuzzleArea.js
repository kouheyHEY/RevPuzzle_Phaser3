class PuzzleArea {
    constructor() {
        this.puzzleSize = [];
        this.puzzleUnit = [];
        this.puzzleUnitAnswer = [];
        this.reverseMode = REV_MODE_CROSS;
    }

    initPuzzle() {
        this.puzzleUnit = [];
        for (var i = 0; i < this.puzzleSize[IDX_ROW]; i++) {
            this.puzzleUnit.push([]);
            for (var j = 0; j < this.puzzleSize[IDX_COL]; j++) {
                this.puzzleUnit[i].push(this.puzzleUnitAnswer[i][j]);
            }
        }
    }

    createPuzzleAnswer() {
        this.puzzleUnitAnswer = [];
        for (var i = 0; i < this.puzzleSize[IDX_ROW]; i++) {
            this.puzzleUnitAnswer.push([]);
            for (var j = 0; j < this.puzzleSize[IDX_COL]; j++) {
                this.puzzleUnit[i].push(0);
            }
        }

        // ランダムな数パネルの状態を変える
        // TODO:
    }
}