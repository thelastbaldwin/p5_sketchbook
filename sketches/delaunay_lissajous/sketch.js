const POINT_COUNT = 50;
let points = [];
let originalPoints = [];
let offset = 10.0;
let threshold = 750.0;

function setup(){
    createCanvas(1024, 768);

    for(let i = 0; i < POINT_COUNT; i++){
        points[i] = [];
        points[i][0] = random(-100, width + 100);
        points[i][1] = random(-100, height + 100);

        originalPoints[i] = [];
        originalPoints[i][0] = points[i][0];
        originalPoints[i][1] = points[i][1];
    }

    strokeWeight(2);
    frameRate(24);
}

function draw(){
    clear();
    background(0, 0);

    for(let i = 0; i < POINT_COUNT; i++){
        points[i] = [];
        points[i][0] = map(noise(millis() * .0007 + i), 0.0, 1.0, originalPoints[i][0] - offset, originalPoints[i][0] + offset);
        points[i][1] = map(noise(millis() * .0005 + i), 0.0, 1.0, originalPoints[i][1] - offset, originalPoints[i][1] + offset);
    }


    for(let i = 0; i < points.length; i++){
        for(let j = 0; j < i; j++){
            let distance = dist(points[i][0], points[i][1], points[j][0], points[j][1]);
            if(distance < threshold){
                //closer is exponentially brighter
                let a  = Math.pow(1/(distance/threshold + 1), 6) * 255;
                stroke(255, a);
                line(points[i][0], points[i][1], points[j][0], points[j][1]);
             }
         }
    }
}