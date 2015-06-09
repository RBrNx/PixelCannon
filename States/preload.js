/**
 * Created by B00231929 & B00236216.
 */
var preload = function(game){};

preload.prototype = {
    /**
     * Pre-loads data for main menu
     */
    preload: function(){
        Background = this.game.add.sprite(0,0, "Background-White");
        loadingBarIn = this.add.sprite(this.game.world.width/2, this.game.world.height/2, "LoadingBarIn");
        loadingBarIn.anchor.setTo(0.5,0.5);
        loadingBarOut = this.game.add.sprite(this.game.world.width/2, this.game.world.height/2, "LoadingBarOut");
        loadingBarOut.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBarIn);

        this.game.time.advancedTiming = true;

        //this.game.load.audio("MainMenuMusic", "Music/MainMenu.ogg");
        this.game.load.image("Background-Main", "Graphics/Main Menu/Background-Main.png");
        this.game.load.image("Logo", "Graphics/Main Menu/Logo.png");
        this.game.load.spritesheet("LogoAnim", "Graphics/Main Menu/Logo-Anim-Tile.png", 864, 134);
        this.game.load.spritesheet("PixelAnim", "Graphics/Main Menu/Pixel-Anim-Tile.png", 220, 238);
        this.game.load.bitmapFont("SquarePixel", "Fonts/SquarePixel.png", "Fonts/SquarePixel.fnt");

        this.game.load.spritesheet("Button", "Graphics/Main Menu/Button.png", 298, 80);
    },
    /**
     * Loads main menu
     */
    create: function(){
        Loading = this.game.add.bitmapText(this.game.world.width/2, this.game.world.height/2 - 50, "SquarePixel", "Loading", 92);
        Loading.anchor.setTo(0.5);

        this.game.state.start("MainMenu");
    }
};