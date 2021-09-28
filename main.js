status = "";

function preload(){
}
function setup(){
canvas= createCanvas(480, 380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(480, 380);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML =  "status : Detecting Objects";
    object_name = document.getElementById("objectName").value;
    
}
function draw(){
    image(video, 0, 0, 480, 380);
}

function gotResults(error, results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects = results;
    
}

