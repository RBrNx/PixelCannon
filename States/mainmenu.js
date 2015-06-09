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
        //Play = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 50, "Button", this.CourseSelect, this, 0, 0, 1, 0);
        //Play.anchor.setTo(0.5, 0.5);
        //Play.scale.setTo(0.67);
        //PlayText = this.game.add.bitmapText(Play.x, Play.y - 8, "8Bit", "Play", 84);
        //PlayText.anchor.setTo(0.5, 0.5);
        //PlayText.scale.setTo(0.67);

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

        /*if (LeaderboardFound == true){
            for (var i = 0, j = 0, space = 55; i < LoadedName.length; i++, j+=3, space += 55) {
                LeaderNum = this.game.add.bitmapText(this.game.world.centerX + 20, this.game.world.centerY - 160 + space, "8Bit2", "\n" + (i+1) + ".   ", 38);
                LeaderName = this.game.add.bitmapText(this.game.world.centerX + 100, this.game.world.centerY - 160 + space, "8Bit2", "\n" + LoadedName[i], 38);
                LeaderScore = this.game.add.bitmapText(this.game.world.centerX + 390, this.game.world.centerY - 160 + space, "8Bit2","\n" + LoadedName[i], 38);
                LeaderNum.tint = "0x000000";
                LeaderName.tint = "0x000000";
                LeaderScore.tint = "0x000000";
                HighScoresCourse1[j] = LeaderNum;
                HighScoresCourse1[j+1] = LeaderName;
                HighScoresCourse1[j+2] = LeaderScore;
            }
            LeaderboardFound = false;
        }*/
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
     * Uploads High Score Data
     * @param CourseLevel
     * @constructor
     */

    /*UploadScores: function(){
        var Name = prompt("Please enter your name");
        if (Name != null) {

            $.ajax({
                url: 'HighScores/SendData.php',
                type: 'post',
                data: {"name": Name, "score": OverallScore, "hash": CryptoJS.MD5(Name + OverallScore + "15111994").toString(), "coursevalue" : LastCourse},
                success: function (data) {
                    console.log(data);
                }
            })
        }
    },*/

    /**
     * Handles Starting Game
     * @param button
     * @param pointer
     * @param isOver - uses button and pointer parameters to check if the mouse is over the button
     */
    GoToCourse1: function(button, pointer, isOver){
        if (isOver) {

            //Leaderboard
            /*LeaderboardText = this.game.add.bitmapText(HighScoreBoard.x, this.game.world.centerY - 140, "8Bit", "     Online\nLeaderboard", 45);
            LeaderboardText.anchor.setTo(0.5);
            $.ajax({
                url: 'HighScores/TopScores.php',
                type: 'post',
                data: {"coursevalue" : 1},
                success: function(data){
                    //console.log(data);
                    LeaderboardFoundCourse1 = true;
                    results = JSON.parse(data);
                    i = 0;

                    results.forEach(function(result){
                        LoadedNameCourse1[i] = result.name;
                        LoadedScoreCourse1[i] = result.score;
                        //console.log(LoadedName[i] + " - " + LoadedScore[i]);
                        i++;
                    });
                }
            });*/
        }
    },

    /**
     * Deletes main menu objects and loads game
     */
    PlayGame: function(){
        MusicControl.stop();
        Play.destroy();
        PlayText.destroy();
        this.game.state.start("GameState")
    }

};