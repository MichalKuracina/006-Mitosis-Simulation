class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.counter = 0;
        this.height = 50;
        this.heightCounter = 0;
    }

    update() {
        this.counter = this.counter + 1;
        this.width = this.width + Math.sin(this.counter * 0.05) * 0.5;
    }

    draw() {
        push();
        translate(width / 2, height / 2);
        rotate(45);
        translate(-(width / 2), -(height / 2));
        fill(100, 200, 100);
        ellipse(this.x, this.y, this.width, this.height);
        // ellipse(this.x, this.y, this.width, this.height);
        pop();
    }
}
