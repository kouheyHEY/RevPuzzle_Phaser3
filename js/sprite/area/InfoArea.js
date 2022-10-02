class InfoArea {
    constructor() {
        // 各テキストオブジェクト
        this.textObject = {
            "Player": null,
            "PlayTime": null,
            "Reverse": null,
            "CurrentMode": null,
            "HighScore": null,
        };

        // 各表示文字列の後ろに付与する文字列
        this.END_STR = {
            "Player": "",
            "PlayTime": INFO_VAL_PLAYTIME_END,
            "Reverse": INFO_VAL_REVERSETIME_END,
            "CurrentMode": "",
            "HighScore": INFO_VAL_HIGHSCORE_END,
        };

        // 開始時間
        this.startTime = 0;
        // 終了時間
        this.endTime = 0;
    }

    dispColumnAll() {

    }

    setValueOf(_column, _value) {
        this.textObject[_column].setText(_value + this.END_STR[_column]);
    }

    startTimer() {

    }

    finishTimer() {

    }

    stopTimer() {

    }

    dispHighScore() {

    }
}