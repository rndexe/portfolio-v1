let font, fontsize = 18;
let brblack, bryellow;
let w, h;

function preload() {
  font = loadFont('assets/SourceCodePro.ttf');
}

function setup() {

  frameRate(6);
  createCanvas(windowWidth, windowHeight);

  w = windowWidth;
  h = windowHeight;
  brblack = color(0, 43, 54);
  bryellow = color(101, 123, 131);
  brred = color(220, 50, 47);
  fill(bryellow);
  textAlign(LEFT, TOP);
  textFont(font);
  textSize(fontsize);

}

function draw() {
  background(brblack);

  let letter = char(random(48, 122));

  fill(bryellow);
  for (let i = 0; i < w; i += fontsize * 0.6)
    for (let j = 0; j < h; j += fontsize) {
      text(char(random(33, 126)), i, j);
    }

  print(frameRate());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  print(w);
  print(h);
}