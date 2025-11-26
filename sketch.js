let cells = [];

async function setup() {
    createCanvas(800, 600);

    cells.push(new Cell(width / 2, height / 2));
}

function draw() {
    background(0, 0, 0);
    stroke(255);
    strokeWeight(0.3);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);

    cells.forEach((cell) => {
        cell.update();
        cell.draw();
    });
}
