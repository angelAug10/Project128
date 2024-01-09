leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload() {
img = loadImage('assets/laDefense.jpg');
}
  function setup() {
    createCanvas(390, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    video.hide();
    poseNet=ml5.poseNet(video.modelLoaded);
    poseNet.on('pose',getPoses);
    

  }
  function modelLoaded()
  {
    console.log("PoseNet Is Initialized");
  }
  function draw() {
    background(255);
    image(capture, 0, 0, 320, 240);
  
  }
function getPoses(results)
{
if(results.length>0)
{
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX=" +leftWristX +" leftWristY="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
}
}
