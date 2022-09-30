class GameScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        super({ key: 'GameScene' });

        // 各エリアを管理するオブジェクト
        this.puzzleArea = new PuzzleArea();
        this.modeChoiceArea = new ModeChoiceArea();
        this.InfoArea = new InfoArea();

        // 各パラメータ
        this.gameMode = MODE_EASY;

    }

    /**
     * 各パラメータの初期化
     */
    initParameters() {

    }

    loadImg() {
        // 各画像の読み込み
        this.load.image(IMG_REV_ALL, DIR_IMG + "/" + FNAME_IMG_REV_ALL);
        this.load.image(IMG_REV_CROSS, DIR_IMG + "/" + FNAME_IMG_REV_CROSS);
        this.load.image(IMG_REV_DIAG, DIR_IMG + "/" + FNAME_IMG_REV_DIAG);
        this.load.image(IMG_PZL_UNIT_OFF, DIR_IMG + "/" + FNAME_IMG_PZL_UNIT_OFF);
        this.load.image(IMG_PZL_UNIT_ON, DIR_IMG + "/" + FNAME_IMG_PZL_UNIT_ON);


        // 各スプライトシートの読み込み
        // this.load.spritesheet("slime", "assets/img/slime_spriteSheet.png", {
        //     frameWidth: UNIT_SIZE,
        //     frameHeight: UNIT_SIZE
        // });
    }

    /**
     * 文字列を画面上に追加しセットする
     * @param {string} _text 追加する文字列
     * @param {int} _x 文字列のx座標
     * @param {int} _y 文字列のy座標
     * @param {int} _fontSize 文字列のサイズ
     * @param {int} _color 文字列の色
     * @param {boolean} _isBold 太字かどうか
     */
    setText(_text, _x, _y, _fontSize, _color, _isBold) {
        this.add.text(_x, _y, _text)
            .setFontSize(_fontSize)
            .setFill(_color)
            .setFontFamily(_isBold ? "Bit12Bold" : "Bit12");
    }

    preload() {
        this.loadImg();
    }

    // 画面生成時の実行関数
    create() {
        /* 画面の初期表示 START */
        let g = this.add.graphics();
        // 各エリアの描画
        g.lineStyle(STROKE_WEIGHT, COLOR_AREA_STROKE, 1);
        // 情報表示エリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_INFOAREA,
                AREA_Y_INFOAREA,
                AREA_W_INFOAREA,
                AREA_H_INFOAREA
            ).strokeRect(
                AREA_X_INFOAREA + STROKE_WEIGHT / 2,
                AREA_Y_INFOAREA + STROKE_WEIGHT / 2,
                AREA_W_INFOAREA - STROKE_WEIGHT,
                AREA_H_INFOAREA - STROKE_WEIGHT);

        // モード選択エリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_MODECHOICEAREA,
                AREA_Y_MODECHOICEAREA,
                AREA_W_MODECHOICEAREA,
                AREA_H_MODECHOICEAREA
            ).strokeRect(
                AREA_X_MODECHOICEAREA + STROKE_WEIGHT / 2,
                AREA_Y_MODECHOICEAREA + STROKE_WEIGHT / 2,
                AREA_W_MODECHOICEAREA - STROKE_WEIGHT,
                AREA_H_MODECHOICEAREA - STROKE_WEIGHT);

        // パズルエリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_PUZZLEAREA,
                AREA_Y_PUZZLEAREA,
                AREA_W_PUZZLEAREA,
                AREA_H_PUZZLEAREA
            ).strokeRect(
                AREA_X_PUZZLEAREA + STROKE_WEIGHT / 2,
                AREA_Y_PUZZLEAREA + STROKE_WEIGHT / 2,
                AREA_W_PUZZLEAREA - STROKE_WEIGHT,
                AREA_H_PUZZLEAREA - STROKE_WEIGHT);

        // 情報表示エリアの各文字列
        this.setText(INFO_NAME_PLAYER, INFO_X, INFO_Y_PLAYER, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_PLAYTIME, INFO_X, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_REVERSE, INFO_X, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_MODE, INFO_X, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_HIGHSCORE, INFO_X, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

        let info_val_player = "playerxxx";
        let info_val_playTime = "yyy" + " ms";
        let info_val_reverse = "CROSS";
        let info_val_mode = MODE_NAME[this.gameMode];
        let info_val_highScore = "XXX" + " Times";

        this.setText(info_val_player, INFO_X + INFO_W + INFO_SPAN, INFO_Y_PLAYER, INFO_H, INFO_COLOR, true);
        this.setText(info_val_playTime, INFO_X + INFO_W + INFO_SPAN, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        this.setText(info_val_reverse, INFO_X + INFO_W + INFO_SPAN, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        this.setText(info_val_mode, INFO_X + INFO_W + INFO_SPAN, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        this.setText(info_val_highScore, INFO_X + INFO_W + INFO_SPAN, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

        // パズルエリア
        // 3*3（難易度に応じて変更する）のパズルユニットのリストを作成する
        this.puzzleArea.puzzleUnitSprite.push();

        /* 画面の初期表示 END */


    }

    update() {

    }
};