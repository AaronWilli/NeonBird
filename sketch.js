var bird;
var pipes = [];

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

//Begin to Draw objects
function draw() {
  background(22,255,8);
  
  for(var i = pipes.length-1; i >= 0; i--) { //start Pipe Loop
  pipes[i].show();
  pipes[i].update();
    
    if (pipes[i].hits(bird)) {
    console.log("HIT");
    }
      
    if(pipes[i].offscreen()){
     pipes.splice(i,1); 
  
    }  
  
  }
  
  bird.update();
  bird.show();
  
  if (frameCount % 25 == 0) {
    pipes.push(new Pipe());
  }
  
}

function keyPressed(){
  if(key == ' ') {
  bird.up();
  }

} 
