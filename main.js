noseX=0;
noseY=0;
function preload(){
clown_nose= loadImage("https://i.postimg.cc/vHKgVXxg/clown-nose.png");
}

function setup(){
canvas= createCanvas(300, 300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,model_loaded);
poseNet.on('pose',got_poses);
}

function draw(){
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255, 0, 0);
circle(noseX, noseY, 20);
image(clown_nose, noseX-15, noseY-15, 30, 30)
}

function take_snapshot(){
    save('clown_fiter.png');
}

function model_loaded(){
    console.log("model loaded");
}

function got_poses(results){

    if(results.length>0){
      console.log(results);
      noseX= results[0].pose.nose.x;
      noseY= results[0].pose.nose.y;
      console.log("nose x ="+results[0].pose.nose.x);
      console.log("nose y ="+results[0].pose.nose.y);
    }
}