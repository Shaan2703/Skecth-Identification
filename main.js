function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classyfyCanvas);
    synth = window.speechSynthesis;
} 

function preload() {
    img = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeight(13);
stroke(0);
if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY);


}




}



function classyfyCanvas() {
    img.classify(canvas,gotResult);
}


function gotResult(error,result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);

        document.getElementById("label").innerHTML = 'Label: '+result[0].label;
        document.getElementById("confidence").innerHTML = 'Confidence: '+ Math.round(result[0].confidence * 100) + "%";
        utterthis = new SpeechSynthesisUtterance(result[0].label);
        synth.speak(utterthis);   
    }
    
}

function clearCanvas() {
    background("white");
}



