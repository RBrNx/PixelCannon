
var optionsMenu = function(game){};




optionsMenu.prototype = {

    /**
     * Makes the game fullscreen
     */
    /*Fullscreen: function () {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.refresh();

        if (this.game.scale.isFullScreen) {
            this.game.scale.stopFullScreen();
        } else {
            this.game.scale.startFullScreen();
        }
    },*/

    /*ClearLocal: function () {
        if (ClearCheck == false) {
            ClearLocal.destroy();
            ClearLocalText.destroy();
            ClearLocal = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 65, "Button", this.ClearLocal, this, 0, 0, 1, 0);
            ClearLocal.anchor.setTo(0.5, 0.5);
            ClearLocal.scale.setTo(0.67);
            ClearLocalText = this.game.add.bitmapText(ClearLocal.x, ClearLocal.y - 5, "8Bit", "Are You\n  Sure?", 42);
            ClearLocalText.anchor.setTo(0.5, 0.5);
            ClearLocalText.scale.setTo(0.67);
            ClearCheck = true;
        }
        else if (ClearCheck == true) {
            /**
             * Deals with Course 1 Storage
             */
            /*localStorage.setItem("Course1BestScore", "0");
            localStorage.setItem("Course1BestTime", "0");
            localStorage.setItem("Course1TotalShots", "0");
            localStorage.setItem("Course1WaterHit", "0");
            localStorage.setItem("Course1TimesPlayed", "0");

            /**
             * Deals with Course 2 Storage
             */
            /*localStorage.setItem("Course2BestScore", "0");
            localStorage.setItem("Course2BestTime", "0");
            localStorage.setItem("Course2TotalShots", "0");
            localStorage.setItem("Course2WaterHit", "0");
            localStorage.setItem("Course2TimesPlayed", "0");

            ClearLocal.destroy();
            ClearLocalText.destroy();
            ClearLocal = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 65, "Button", this.ClearLocal, this, 0, 0, 1, 0);
            ClearLocal.anchor.setTo(0.5, 0.5);
            ClearLocal.scale.setTo(0.67);
            ClearLocalText = this.game.add.bitmapText(ClearLocal.x, ClearLocal.y - 5, "8Bit", "Statistics\n  Cleared", 40);
            ClearLocalText.anchor.setTo(0.5, 0.5);
            ClearLocalText.scale.setTo(0.67);
            ClearCheck = false;
        }
    }*/
};