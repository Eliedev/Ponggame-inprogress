function setup() {
   createCanvas(900,700);
   background(0);
   
   stroke(255);
 
}

function draw() {
  
  background(0);
  
  //rect(mouseX, mouseY, 15, 15);
  
  stroke(255);
  strokeWeight(15);
  //line(0, 50, 0, 130);
//  line(900, 50, 900, 130);
  
  //static
  strokeWeight(3);
  line(450, 0, 450, 700);
  stroke(0);
  line(450, 250, 450, 450);
  
  
  
  
}


// collision between bat and ball
// ball x is within half the width of the bar AND
// ball y is greater than y minus half the height of the bat AND
// ball y is less than y plus half the height of the bat...

function Ball() {
  
   this.position = {x: 0, y: 250};
  this.speed = {x:1, y:1};

  this.draw = function() {
    this.position.x = this.position.x + this.speed.x;
    this.position.y = this.position.y + this.speed.y;
    ellipse(this.position.x, this.position.y, 200, 200);
    
    if(this.position.y > height) {
      this.speed.y = this.speed.y * -1;
    }
    
    if(this.position.y < 0) {
      this.speed.y = this.speed.y * -1;
    }
    
  }
  
  this.update = function() {
    
  }
  
}

function Bat() {
  this.x = 0;
  this.y = 0;
  
  this.draw = function() {
    strokeWeight(6)
  line(0, 50, 0, 130);
  line(900, 50, 900, 130);
  }
}

