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

var Sound = true;
var Music = true;
var MusicControl;

mainMenu.prototype = {
    /**
     * Creates objects required for use within the main menu
     */
    create: function() {
        //Set Menu Size to 960 x 640
        this.game.world.setBounds(0, 0, 960, 640);

        //Start Menu Music
        //MusicControl = this.game.add.audio("MainMenuMusic", 1, true);
        //if (Music == true) MusicControl.play();

        //Load Background and Logo
        Background = this.game.add.sprite(0,0, "Background-White");
        BackgroundMain = this.game.add.sprite(0,0, "Background-Main");

        Logo = this.game.add.sprite(this.game.world.width/2, this.game.world.height/2 - 250, "LogoAnim");
        Logo.anchor.setTo(0.5);
        Logo.animations.add("LogoAnim");
        Logo.animations.play("LogoAnim", 15, true);

        Pixel = this.game.add.sprite(820, 450, "PixelAnim");
        Pixel.anchor.setTo(0.5);
        Pixel.animations.add("PixelAnim");
        Pixel.animations.play("PixelAnim", 15, true);

        //Create Play Button
        Play = this.game.add.button(this.game.world.centerX, this.game.world.centerY, "Button", this.PlayGame, this, 0, 0, 1, 0);
        Play.anchor.setTo(0.5, 0.5);
        PlayText = this.game.add.bitmapText(Play.x, Play.y + 10, "SquarePixel", "Play", 72);
        PlayText.anchor.setTo(0.5, 0.5);
        this.game.add.tween(Play).to({ y: 301 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(PlayText).to({ y: 311 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

        Options = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, "Button", this.StartOptions, this, 0, 0, 1, 0);
        Options.anchor.setTo(0.5, 0.5);
        OptionsText = this.game.add.bitmapText(Options.x, Options.y + 6, "SquarePixel", "Options", 52);
        OptionsText.anchor.setTo(0.5, 0.5);
        this.game.add.tween(Options).to({ y: 401 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(OptionsText).to({ y: 407 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

        //Set Room Number to Main Menu
        RoomNumber = 1;


        /*if (!localStorage.getItem("Course1BestScore")){
         localStorage.setItem("Course1BestScore", "0")
         }
         if (!localStorage.getItem("Course1BestTime")){
         localStorage.setItem("Course1BestTime", "0")
         }
         if (!localStorage.getItem("Course1TotalShots")){
         localStorage.setItem("Course1TotalShots", "0")
         }
         if (!localStorage.getItem("Course1WaterHit")){
         localStorage.setItem("Course1WaterHit", "0")
         }
         if (!localStorage.getItem("Course1TimesPlayed")){
         localStorage.setItem("Course1TimesPlayed", "0")
         }

         /**
         * Deals with Course 2 Storage
         */
        /*if (!localStorage.getItem("Course2BestScore")){
         localStorage.setItem("Course2BestScore", "0")
         }
         if (!localStorage.getItem("Course2BestTime")){
         localStorage.setItem("Course2BestTime", "0")
         }
         if (!localStorage.getItem("Course2TotalShots")){
         localStorage.setItem("Course2TotalShots", "0")
         }
         if (!localStorage.getItem("Course2WaterHit")){
         localStorage.setItem("Course2WaterHit", "0")
         }
         if (!localStorage.getItem("Course2TimesPlayed")){
         localStorage.setItem("Course2TimesPlayed", "0")
         }
         },*/
    },

    /**
    * Handles the game logic - physics, positions and rendering
    */
    update: function(){

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
        this.game.state.start("OptionsMenu");
    },

    /**
     * Deletes main menu objects and loads game
     */
    PlayGame: function(){
        //MusicControl.stop();
        //Play.destroy();
        //PlayText.destroy();
        //this.game.state.start("GameState")
    }

};