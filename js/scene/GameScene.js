class GameScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        super({ key: 'GameScene' });

        // 各エリアを管理するオブジェクト
        this.puzzleArea = new PuzzleArea();
        this.modeChoiceArea = new ModeChoiceArea();
        this.InfoArea = new InfoArea();

    }

    /**
     * 各パラメータの初期化
     */
    initParameters() {

    }

    loadImg() {
        // 各画像の読み込み
        this.load.image("block_Rock", "./assets/img/block_Rock.png");


        // 各スプライトシートの読み込み
        // this.load.spritesheet("slime", "assets/img/slime_spriteSheet.png", {
        //     frameWidth: UNIT_SIZE,
        //     frameHeight: UNIT_SIZE
        // });
    }

    preload() {

    }

    // 画面生成時の実行関数
    create() {
        let g = this.add.graphics();
        g.lineStyle(STROKE_WEIGHT, COLOR_AREA_STROKE, 1);
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
    }

    update() {

    }
};