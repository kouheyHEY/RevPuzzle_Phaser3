class InfoArea {
    constructor() {
        // 各表示項目
        this.player = "";
        this.playTime = 0;
        this.RevNum = 0;
        this.mode = MODE_EASY;
        this.highScore = 0;

        // 開始時間
        this.startTime = 0;
        // 終了時間
        this.endTime = 0;
    }

    startGame() {
        // 開始時間を取得する
        this.startTime = new Date().getTime();
    }

    endGame() {
        // 終了時間を取得する
        this.endTime = new Date().getTime();
    }

    setPlayer(_player) {
        this.player = _player;
    }

    setPlayTime() {
        this.playTime = (new Date().getTime()) - this.startTime;
        this.playTime = this.playTime / 1000;
    }

    setMode(_mode) {
        this.mode = mode;
    }

}