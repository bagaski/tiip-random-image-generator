let img = []
let p5font

const BOO = [
  true,
  false]

const PALETTE = [
  '#82ffff', //cyan
  '#f2ff96', //yellow
  '#000',
  '#e5e5e5',
  '#444'
  ]

const FREQ = [2,5,10,20,40,60,80]

const WEIGHT = [
  1,
  4,
  20,
  40
]

const WORDS = ['A','B','C','D','E','X','Z','W','?', '!', '*', '#', '%', '$']

function preload() {

  img[0] = loadImage('0.png')
  img[1] = loadImage('1.png')
  img[2] = loadImage('2.png')
  img[3] = loadImage('3.png')
  img[4] = loadImage('4.png')
  img[5] = loadImage('5.png')
  img[6] = loadImage('6.png')
  img[7] = loadImage('7.png')
  img[8] = loadImage('8.png')
  img[9] = loadImage('9.png')
  img[10] = loadImage('10.png')
  img[11] = loadImage('11.png')
  img[12] = loadImage('12.png')
  img[13] = loadImage('13.png')
  img[14] = loadImage('14.png')
  img[15] = loadImage('15.png')
  img[16] = loadImage('16.png')
  img[17] = loadImage('17.png')
  img[18] = loadImage('18.png')
  img[19] = loadImage('19.png')
  img[20] = loadImage('20.png')
  img[21] = loadImage('21.png')
  img[22] = loadImage('22.png')
  img[23] = loadImage('23.png')
  img[24] = loadImage('24.png')
  img[25] = loadImage('25.png')
  img[26] = loadImage('26.png')
  img[27] = loadImage('27.png')
  img[28] = loadImage('28.png')
  img[29] = loadImage('29.png')
  img[30] = loadImage('30.png')
  img[31] = loadImage('31.png')
  img[32] = loadImage('32.png')
  img[33] = loadImage('33.png')
  img[34] = loadImage('34.png')
  img[35] = loadImage('35.png')
  img[36] = loadImage('36.png')
  img[37] = loadImage('37.png')
  img[38] = loadImage('38.png')
  img[39] = loadImage('39.png')
  img[40] = loadImage('40.png')
  img[41] = loadImage('41.png')
  img[42] = loadImage('42.png')
  img[43] = loadImage('43.png')
  img[44] = loadImage('44.png')
  img[45] = loadImage('45.png')
  img[46] = loadImage('46.png')
  img[47] = loadImage('47.png')
  img[48] = loadImage('48.png')
  img[49] = loadImage('49.png')
  img[50] = loadImage('50.png')
  img[51] = loadImage('51.png')
  img[52] = loadImage('52.png')
  p5font = loadFont('RobotoSlab-Black.ttf')
}

function setup() {

  createCanvas(1680, 810);
  noLoop();
}

function draw() {

  const picture = () => {
    image(random(img), random(-width/4, width/2), random(-height/4,height/2),width/2, width/2)
    tint(255, 128)

  }

  const ring = () => {
    noFill()
    stroke(random(PALETTE))
    strokeWeight(random(WEIGHT))
    circle(random(width/2),random(width/4),random(height/2))
  }

  const box = () => {
    noFill()
    stroke(random(PALETTE))
    strokeWeight(random(WEIGHT))
    rect(random(width/2),random(width/4),random(height/2), random(height/4))

  }

  const grid = ()  => {

      //blendMode(DODGE);
      stroke(random(PALETTE))
      strokeWeight(1)
      for(let row=0; row<height/random(FREQ); row+=random(FREQ)) {
        line(width/10,row+100,width-width/10,row+100)
        for(let col=0; col<(width/3); col+=random(FREQ)) {
          line(height/5+col,height/5, height/5+col,random(height/2))
         }
       }

  }

  const letter = () => {
    noFill()
    stroke(random(PALETTE))
    textSize(width/5)
    strokeWeight(random(WEIGHT))
    text(random(WORDS),random(width/2),random(height/2))
  }

  const chart = () => {
    beginShape();
  	for (let i = 1; i < random(FREQ); i++) {
  		let x = i * width / random(FREQ);
  		let y = noise(i * 0.2) * height;
  		vertex(x, y);
  		ellipse(x, y, 10.0, 10.0);
	}
	endShape();
}
  clear();
  background(random(PALETTE))
  picture()
  grid()

  picture()

  ring()
  box()
  letter()
  chart()
}

function saveJPG() {
  save('tiip-image.jpg')
}
