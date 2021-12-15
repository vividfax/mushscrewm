class Mushscrewm {

    constructor(x, y, size) {

        this.x = x;
        this.y = y;
        this.size = size;

        this.unscrew = false;
        this.unscrewAmount = 0;

        this.soundPlaying = false;
        this.sound = new Audio("./gravel.wav");
    }

    update() {

        if (this.unscrew) {

            if (this.unscrewAmount < this.size*512* 0.6) {
                this.unscrewAmount += this.size*2;
            }
            if (!this.soundPlaying) {
                this.soundPlaying = true;
                this.sound.play();
            }
        }
    }

    hovering() {

        if (dist(this.x, this.y - this.size*512* 0.27, mouseX-width/2, mouseY-height/2) < this.size*233/2) {
            this.unscrew = true;
        }
    }

    display() {

        image(mushscrewm, this.x, this.y - this.unscrewAmount, 233*this.size, 512*this.size);
    }
}
