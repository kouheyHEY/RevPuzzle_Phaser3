class InfoArea {
    constructor() {
        // 各テキストオブジェクト
        this.textObject = {
            "PlayTime": null,
            "Reverse": null,
            "CurrentMode": null,
            "HighScore": null,
        };

        // 各表示文字列の後ろに付与する文字列
        this.END_STR = {
            "PlayTime": INFO_VAL_PLAYTIME_END,
            "Reverse": INFO_VAL_REVERSETIME_END,
            "CurrentMode": "",
            "HighScore": INFO_VAL_HIGHSCORE_END,
        };

        // 開始時間
        this.startTime = 0;
        // 終了時間
        this.endTime = 0;
        // 経過時間
        this.gameTime = 0;
    }

    dispColumnAll() {

    }

    setValueOf(_column, _value) {
        this.textObject[_column].setText(_value + this.END_STR[_column]);
    }

    startTimer() {
        let startDate = new Date();
        this.startTime = startDate.getTime();
    }

    finishTimer() {

    }

    stopTimer() {

    }

    updateTimer() {
        this.gameTime = new Date().getTime() - this.startTime;
        this.gameTime = (this.gameTime / 1000).toFixed(1);
        this.textObject[INFO_NAME_PLAYTIME].setText(this.gameTime + this.END_STR[INFO_NAME_PLAYTIME]);
    }

    dispHighScore() {

    }
}