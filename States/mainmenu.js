/**
 * Globals for use in main menu
 */
var mainMenu = function(game){};
/**
 * Variables to Hold Sprites and Text
 */
var Logo;
var Play;
var PlayText;
var Options;
var OptionsText;
var Back;
var BackText;

/**
 * Variables for the Local Storage and Online Leaderboards
 */
var UploadScore;
var UploadScoreText;
var RoomNumber;
var LoadedName = [];
var LoadedScore = [];
var LeaderboardFound = false;

var SoundBool;
var MusicBool;
var MusicControl;
var ClearCheck = 0;
var StorageTimer = 0;

mainMenu.prototype = {
    /**
     * Creates objects required for use within the main menu
     */
    create: function() {
        //Set Menu Size to 960 x 640
        this.game.world.setBounds(0, 0, 960, 640);

        //Create / Read In Local Storage
        if (!localStorage.getItem("MusicBool")){
            localStorage.setItem("MusicBool", "On");
        }
        MusicBool = localStorage.getItem("MusicBool");

        if (!localStorage.getItem("SoundBool")){
            localStorage.setItem("SoundBool", "On");
        }
        SoundBool = localStorage.getItem("SoundBool");

        //Start Menu Music
        MusicControl = this.game.add.audio("MainMenuMusic", 1, true);
        if (MusicBool == "On") MusicControl.play();

        //Load Background and Logo
        Background = this.game.add.sprite(0,0, "Background-White");
        BackgroundMain = this.game.add.sprite(0,0, "Background-Main");
        BackgroundOptions = this.game.add.sprite(960,0, "Background-Options");

        Logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 250, "LogoAnim");
        Logo.anchor.setTo(0.5);
        Logo.animations.add("LogoAnim");
        Logo.animations.play("LogoAnim", 15, true);

        Pixel = this.game.add.sprite(820, 450, "PixelAnim");
        Pixel.anchor.setTo(0.5);
        Pixel.animations.add("PixelAnim");
        Pixel.animations.play("PixelAnim", 15, true);

        Sun = this.game.add.sprite(this.game.world.width + 850, 100, "SunAnim");
        Sun.anchor.setTo(0.5);
        Sun.animations.add("SunAnim");
        Sun.animations.play("SunAnim", 10, true);

        //Create Main Menu Buttons
        Play = this.game.add.button(this.game.world.centerX, this.game.world.centerY, "Button", this.PlayGame, this, 0, 0, 1, 0);
        Play.anchor.setTo(0.5, 0.5);
        PlayText = this.game.add.bitmapText(Play.x, Play.y + 10, "SquarePixel", "Play", 72);
        PlayText.anchor.setTo(0.5, 0.5);

        Options = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, "Button", this.StartOptions, this, 0, 0, 1, 0);
        Options.anchor.setTo(0.5, 0.5);
        OptionsText = this.game.add.bitmapText(Options.x, Options.y + 6, "SquarePixel", "Options", 52);
        OptionsText.anchor.setTo(0.5, 0.5);

        //Create Options Menu
        Back = this.game.add.button(this.game.world.width + 480, this.game.world.centerY + 250, "Button", this.Back, this, 0, 0, 1, 0);
        Back.anchor.setTo(0.5, 0.5);
        BackText = this.game.add.bitmapText(Back.x, Back.y + 10, "SquarePixel", "Back", 72);
        BackText.anchor.setTo(0.5, 0.5);

        Fullscreen = this.game.add.button(this.game.world.width + 480, this.game.world.centerY + 165, "Button", this.Fullscreen, this, 0, 0, 1, 0);
        Fullscreen.anchor.setTo(0.5, 0.5);
        FullscreenText = this.game.add.bitmapText(Fullscreen.x, Fullscreen.y + 6, "SquarePixel", "Fullscreen", 48);
        FullscreenText.anchor.setTo(0.5, 0.5);

        Sound = this.game.add.button(this.game.world.width + 480, this.game.world.centerY - 5, "Button", this.FlipSound, this, 0, 0, 1, 0);
        Sound.anchor.setTo(0.5, 0.5);
        SoundText = this.game.add.bitmapText(Sound.x, Sound.y + 6, "SquarePixel", "Sound:" + SoundBool, 52);
        SoundText.anchor.setTo(0.5, 0.5);

        Music = this.game.add.button(this.game.world.width + 480, this.game.world.centerY - 90, "Button", this.FlipMusic, this, 0, 0, 1, 0);
        Music.anchor.setTo(0.5, 0.5);
        MusicText = this.game.add.bitmapText(Music.x, Music.y + 6, "SquarePixel", "Music:" + MusicBool, 52);
        MusicText.anchor.setTo(0.5, 0.5);

        ClearLocal = this.game.add.button(this.game.world.width + 480, this.game.world.centerY + 80, "Button", this.ClearLocal, this, 0, 0, 1, 0);
        ClearLocal.anchor.setTo(0.5, 0.5);
        ClearLocalText = this.game.add.bitmapText(ClearLocal.x, ClearLocal.y + 6, "SquarePixel", "Clear Data", 48);
        ClearLocalText.anchor.setTo(0.5, 0.5);

        //Set Room Number to Main Menu
        RoomNumber = 1;
    },

    /**
    * Handles the game logic - physics, positions and rendering
    */
    update: function(){
        if (ClearCheck == 1 || ClearCheck == 2) {
            StorageTimer++;
        }

        if (StorageTimer == 180){
            ClearCheck = 2;
            this.ClearLocal();
            StorageTimer = 0;
        }
    },

    /**
     * used to output debug information
     */
    render: function(){
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    },

    /**
     * Function sets up the menu for the options in the games main menu and handles buttons for sfx, music and full screen mode
     */
    StartOptions: function(){
        //Move Play + Options Left
        this.game.add.tween(Play).to({ x: -this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(PlayText).to({ x: -this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Options).to({ x: -this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(OptionsText).to({ x: -this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);

        //Move Back, Fullscreen, Sound, Music and ClearLocal Left
        this.game.add.tween(Back).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(BackText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Fullscreen).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(FullscreenText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Sound).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(SoundText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Music).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(MusicText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(ClearLocal).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(ClearLocalText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);

        //Move Backgrounds, Logo, Sun + Pixel Left
        this.game.add.tween(BackgroundMain).to({ x: -960}, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(BackgroundOptions).to({ x: 0}, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Logo).to({ x: -this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Pixel).to({ x: -140 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Sun).to({ x: 850 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
    },

    Back: function(){
        //Move Back, Fullscreen, Sound, Music and ClearLocal Right
        this.game.add.tween(Back).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(BackText).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Fullscreen).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(FullscreenText).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Sound).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(SoundText).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Music).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(MusicText).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(ClearLocal).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(ClearLocalText).to({ x: this.game.world.width + 480 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);

        //Move Play + Options Right
        this.game.add.tween(Play).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(PlayText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Options).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(OptionsText).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);

        //Move Backgrounds, Sun, Logo + Pixel Left
        this.game.add.tween(BackgroundMain).to({ x: 0}, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(BackgroundOptions).to({ x: 960}, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Logo).to({ x: this.game.world.centerX }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Pixel).to({ x: 820 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
        this.game.add.tween(Sun).to({ x: this.game.world.width + 850 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
    },

    /**
     * Deletes main menu objects and loads game
     */
    PlayGame: function(){
        //MusicControl.stop();
        //Play.destroy();
        //PlayText.destroy();
        //this.game.state.start("GameState")
    },

    Fullscreen: function(){
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();

        if (this.game.scale.isFullScreen) {
            this.game.scale.stopFullScreen();
        } else {
            this.game.scale.startFullScreen();
        }
    },

    FlipSound: function(){
        if (SoundBool == "On"){
            SoundBool = "Off";
            localStorage.setItem("SoundBool", "Off");
            Sound.destroy();
            SoundText.destroy();

            Sound = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 5, "Button", this.FlipSound, this, 0, 0, 1, 0);
            Sound.anchor.setTo(0.5, 0.5);
            SoundText = this.game.add.bitmapText(Sound.x, Sound.y + 6, "SquarePixel", "Sound:" + SoundBool, 52);
            SoundText.anchor.setTo(0.5, 0.5);
        }
        else {
            SoundBool = "On";
            localStorage.setItem("SoundBool", "On");
            Sound.destroy();
            SoundText.destroy();

            Sound = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 5, "Button", this.FlipSound, this, 0, 0, 1, 0);
            Sound.anchor.setTo(0.5, 0.5);
            SoundText = this.game.add.bitmapText(Sound.x, Sound.y + 6, "SquarePixel", "Sound:" + SoundBool, 52);
            SoundText.anchor.setTo(0.5, 0.5);
        }
    },

    FlipMusic: function(){
        if (MusicBool == "On"){
            MusicControl.stop();
            MusicBool = "Off";
            localStorage.setItem("MusicBool", "Off");
            Music.destroy();
            MusicText.destroy();

            Music = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 90, "Button", this.FlipMusic, this, 0, 0, 1, 0);
            Music.anchor.setTo(0.5, 0.5);
            MusicText = this.game.add.bitmapText(Music.x, Music.y + 6, "SquarePixel", "Music:" + MusicBool, 52);
            MusicText.anchor.setTo(0.5, 0.5);
        }
        else {
            MusicControl.play();
            MusicBool = "On";
            localStorage.setItem("MusicBool", "On");
            Music.destroy();
            MusicText.destroy();

            Music = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 90, "Button", this.FlipMusic, this, 0, 0, 1, 0);
            Music.anchor.setTo(0.5, 0.5);
            MusicText = this.game.add.bitmapText(Music.x, Music.y + 6, "SquarePixel", "Music:" + MusicBool, 52);
            MusicText.anchor.setTo(0.5, 0.5);
        }
    },

    ClearLocal: function(){
        if (ClearCheck == 0){
            ClearLocal.destroy();
            ClearLocalText.destroy();

            ClearLocal = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 80, "Button", this.ClearLocal, this, 0, 0, 1, 0);
            ClearLocal.anchor.setTo(0.5, 0.5);
            ClearLocalText = this.game.add.bitmapText(ClearLocal.x, ClearLocal.y + 6, "SquarePixel", "Are you Sure?", 36);
            ClearLocalText.anchor.setTo(0.5, 0.5);

            ClearCheck = 1;
        }
        else if (ClearCheck == 1){
            //localStorage.setItem("MusicBool", "On");
            //localStorage.setItem("SoundBool", "On");

            ClearLocal.destroy();
            ClearLocalText.destroy();

            ClearLocal = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 80, "Button", this.ClearLocal, this, 0, 0, 1, 0);
            ClearLocal.anchor.setTo(0.5, 0.5);
            ClearLocalText = this.game.add.bitmapText(ClearLocal.x, ClearLocal.y + 6, "SquarePixel", "Data Cleared", 40);
            ClearLocalText.anchor.setTo(0.5, 0.5);

            ClearCheck = 2;
        }
        else if (ClearCheck == 2){
            ClearLocal.destroy();
            ClearLocalText.destroy();

            ClearLocal = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 80, "Button", this.ClearLocal, this, 0, 0, 1, 0);
            ClearLocal.anchor.setTo(0.5, 0.5);
            ClearLocalText = this.game.add.bitmapText(ClearLocal.x, ClearLocal.y + 6, "SquarePixel", "Clear Data", 48);
            ClearLocalText.anchor.setTo(0.5, 0.5);

            ClearCheck = 0;
        }
    },

};