stat="";

function preload(){
video=createVideo("video.mp4");
video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("Status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("My sister allowed this code to pass.");
    stat=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function setup(){
    canvas=createCanvas(480,300);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 300);
}