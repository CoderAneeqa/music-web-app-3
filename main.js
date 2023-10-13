song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){

    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function setup(){

    canvas = createCanvas(600, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log("Model Is Loaded !");

}

function gotPoses(results){

    if(results.length>0){

        leftWristX = results.pose.leftWrist.x;
        leftWristY = results.pose.leftWrist.y;
        rightWristX = results.pose.rightWrist.x;
        rightWristY = results.pose.rightWrist.y;

    }


}

function draw(){

    image(video, 0, 0, 600, 400);
    fill('blue');
    stroke('blue');

}

