class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 50;
    }

    update() {
        // this.x += this.x + 0.01;
    }

    draw() {
        push();
        translate(this.x, this.y);

        rotate(this.calculateAngle(this.x, this.y, mouseX, mouseY));

        rectMode(CENTER);
        fill(100, 200, 100);
        rect(0, 0, this.width, this.height);
        translate(-this.x, -this.y);

        pop();
    }

    calculateAngle(x1, y1, x2, y2) {
        let angleRad = Math.atan2(y2 - y1, x2 - x1);

        // Normalize to 0–2*PI if needed
        if (angleRad < 0) {
            angleRad += TWO_PI;
        }

        return angleRad;
        // return Math.atan2(y2 - y1, x2 - x1);
    }
}
