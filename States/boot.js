/**
 * Created by B00231929 & B00236216.
 */
       var boot = function(game){
        console.log("%cStarting the Game", "color:white; background:red");
};

boot.prototype = {
    /**
     * Loads data for loading screen
     */
    preload: function(){
        this.game.load.image("LoadingBarIn","Graphics/Main Menu/Loading-Bar-1.png");
        this.game.load.image("LoadingBarOut", "Graphics/Main Menu/Loading-Bar-2.png");
        this.game.load.image("Background-White", "Graphics/Main Menu/Background.png");
    },
    /**
     * sets up game canvas
     */
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.setScreenSize();
        this.game.state.start("Preload");
    }
};