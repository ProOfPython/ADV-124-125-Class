function setup(){
    video = createCapture(VIDEO)
    video.size(400, 400)
    canvas = createCanvas(400, 400)
    canvas.position(275, 100)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){console.log('PoseNet Is Here!')}
function draw(){
    background('darkslategray')
    /* #171878 */
}
function gotPoses(results){if(results.length > 0){console.log(results)}}