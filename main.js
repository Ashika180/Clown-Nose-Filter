noseX = 0;
noseY = 0;

function preload(){
    nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x+60;
        noseY = results[0].pose.nose.y+60;
        console.log("Nose x coordinates are - " + results[0].pose.nose.x);
        console.log("Nose Y coordinates are - " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 500, 400);
    image(nose, noseX, noseY, 40, 40);
}

function take_snap(){
    save('photo.jpeg');
}