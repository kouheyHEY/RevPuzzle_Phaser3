class GameScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        super({ key: 'GameScene' });

        // 各エリアを管理するオブジェクト

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

    }

    update() {

    }
};