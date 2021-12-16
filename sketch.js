let backgroundImage;
let hills;
let ground1, ground2, ground3;
let mushscrewm;

let mushscrewms = [];

let wind;

function preload() {

    backgroundImage = loadImage("./images/detailed-metal.png");
    hills = loadImage("./images/hills.png");
    ground1 = loadImage("./images/ground1.png");
    ground2 = loadImage("./images/ground2.png");
    ground3 = loadImage("./images/ground3.png");
    mushscrewm = loadImage("./images/mushscrewm.png");

    wind = new Audio("./wind.ogg");
    wind.loop = true;
}

function setup() {

    createCanvas(1280, 692);
    imageMode(CENTER);
    frameRate(5);

    mushscrewms.push(new Mushscrewm(200, 230, 0.3));
    mushscrewms.push(new Mushscrewm(-100, 230, 0.3));
    mushscrewms.push(new Mushscrewm(-600, 220, 0.3));
    mushscrewms.push(new Mushscrewm(520, 220, 0.3));
    mushscrewms.push(new Mushscrewm(300, 250, 0.5));
    mushscrewms.push(new Mushscrewm(-300, 260, 0.75));
    mushscrewms.push(new Mushscrewm(450, 250, 0.7));
    mushscrewms.push(new Mushscrewm(0, 300, 1));
    mushscrewms.push(new Mushscrewm(-450, 320, 1.05));

    wind.play();
}

function draw() {

    moveMouse();

    push();
    translate(width/2, height/2);

    image(backgroundImage, 0, 0, width, height);
    image(hills, 0, 0, width, height);

    for (let i = 0; i < mushscrewms.length; i++) {
        mushscrewms[i].update();
        mushscrewms[i].display();
    }

    image(ground1, 0, 0, width, height);
    image(ground2, 0, 0, width, height);
    image(ground3, 0, 0, width, height);

    pop();
}

function moveMouse() {

    for (let i = 0; i < mushscrewms.length; i++) {
        mushscrewms[i].hovering();
    }
}
