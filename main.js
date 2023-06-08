var X = 0
var Y = 0
function preload(){
bigode = loadImage("https://i.postimg.cc/kg7jMVqD/m.png");
}
function setup(){
    canvas = createCanvas(300, 300);
  canvas.center();
  canvas.position(500,300)
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi inicializado');
  }

function draw(){
    image(video, 0, 0, 300, 300);

    image(bigode, X, Y, 60, 60);
}
function Salvarimagem(){
    save('minhaFoto.png')
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    X = results[0].pose.nose.x-30;
    Y = results[0].pose.nose.y-10;
  }
}