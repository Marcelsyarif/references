//image
var espoir;
//var for texts
var desine;
var desine2;
var desine3;
var desine4;
//var desine5;
//var for links
var fierte;
var fierte2;
var fierte3;
var fierte4;
var fierte5;
var fierte6;
var homepage;
//music links
var fierte7;
var fierte8;
//quotations and literature
var almeja;
var almeja2;
var almeja3;

function preload (){
  espoir = loadImage ('HOPE.jpg');
}
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index','-1');
  //texts
 desinee();
  desinee2();
  desinee3();
  desinee4();
  //1st link for wiki
  fierte = createA ('https://en.wikipedia.org/wiki/2020_in_Indonesia','-https://en.wikipedia.org/wiki/2020_in_Indonesia');
  fierte.position(10,160);
  fierte.style ('color','red');
  //1st youtube link
  fierte2 = createA ('https://www.youtube.com/watch?v=7apNaBVj0q8','-https://www.youtube.com/watch?v=7apNaBVj0q8');
  fierte2.position(10,180);
  fierte2.style('color','red');
  //2nd youtuebe link
  fierte3 = createA('https://www.youtube.com/watch?v=TMnOIS93_gE','-https://www.youtube.com/watch?v=TMnOIS93_gE');
  fierte3.position(10,200);
  fierte3.style('color','red');
  //3rd youtube link
  fierte4 = createA('https://www.youtube.com/watch?v=WhEaa25z4Ss','-https://www.youtube.com/watch?v=WhEaa25z4Ss')
  fierte4.position (10,220);
  fierte4.style('color','red');
  // 4th youtube link
  fierte5= createA('https://www.youtube.com/watch?v=kSgPgU9Z3GI','-https://www.youtube.com/watch?v=kSgPgU9Z3GI')
  fierte5.position(10,240);
  fierte5.style('color','red');
  //5th youtube link
  fierte6 = createA ('https://www.youtube.com/watch?v=BExipnoLZ0Q','-https://www.youtube.com/watch?v=BExipnoLZ0Q');
  fierte6.position (10,260);
  fierte6.style('color','red');
  //1st music link
  fierte7 = createA('https://www.youtube.com/watch?v=QxHkLdQy5f0','-https://www.youtube.com/watch?v=QxHkLdQy5f0');
  fierte7.position (10,360);
  fierte7.style('color','red');
  //homepage link
  homepage = createA('https://marcelsyarif.github.io/espoirs-home/','Home');
  homepage.position(800,5);
  homepage.style('color','red');
  homepage.style('background-color','orange');
  //2nd music link
  fierte8 = createA ('https://www.youtube.com/watch?v=CT7nGxDFD8k','-https://www.youtube.com/watch?v=CT7nGxDFD8k')
  fierte8.position (10,380);
  fierte8.style  ('color','red');
  //1st quote
  almeja = createA('https://mydailygerman.com/german-poems/','-https://mydailygerman.com/german-poems/');
  almeja.position(10,480);
  almeja.style('color','red');
  //1st literature
  almeja2 = createA('https://en.wikipedia.org/wiki/The_Myth_of_Sisyphus','-https://en.wikipedia.org/wiki/The_Myth_of_Sisyphus');
  almeja2.position(10,500);
  almeja2.style('color','red');
  //2nd literature
  almeja3 = createA('https://en.wikipedia.org/wiki/Hedgehog%27s_dilemma','-https://en.wikipedia.org/wiki/Hedgehog%27s_dilemma');
  almeja3.position (10,520);
  almeja3.style('color','red');
}

function draw() {
  background(0);
  image(espoir,0,0,200,100);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

//1st text
function desinee2(){
  desine2 = createP ('News sources :');
  desine2.position(10 ,100);
  desine2.style('color','white');
  desine2.style('font-size','20pt');
}

function desinee() {
  desine = createP ('Music :');
  desine.position(10,300);
  desine.style('color','white');
  desine.style ('font-size','20pt');
}

function desinee3() {
  desine3 = createP('NOTE : This is a fictional work. Any similiarities of a place, events or people are purely a coincidence');
  desine3.position (10,90);
  desine3.style('color','white');               
}

function desinee4(){
  desine4 = createP ('Quotes And Literature :');
  desine4.position (10,420);
  desine4.style('color','white');
  desine4.style('font-size','20pt');
}