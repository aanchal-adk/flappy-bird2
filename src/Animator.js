import Obstacle from './Obstacle'
import Score from './Score'
class Animator{
  constructor(element, container,bird,s) {
    this.container = container;
    this.bird = bird;
    this.obstacles = [];
    this.element = element;
    this.s = s;
    this.counter = 0;
  }
  
  startAnimation() {
	
    let element = document.getElementById('flappy-bird');
	document.addEventListener('keydown',(e) => {
	if(e.keyCode == '38'){
	  this.bird.y += this.bird.v;
	  this.bird.element.style.top = this.y+'px';
	  this.bird.g = 0;
	}
	});
    this.intervalId = setInterval(()=>{
	  
      if(this.counter >=60*2){
	    this.createBars();
	    this.counter = 0;
	  }
	  this.counter +=1;
	  this.bird.gravity();
	  this.collideGround();
	  //this.container.move();
	  //console.log(this.obstacles.length);
	  for(let i = 0;i<this.obstacles.length;i++){
	    this.obstacles[i].move();
	    this.collideBar(this.obstacles[i]);
	    this.score(this.obstacles[i]);
	  }
	  this.remove();
	},1000/60);
  }

  remove(){
	if(this.obstacles.length >0){
      if(this.obstacles[0].element.x<=-75){
        this.element.removeChild(this.obstacles[0].element);
	    this.obstacles.splice(0,1);
      }
    }
  }
  
  createBars(){
	console.log('new obstacles');
    let obstacle;
    let obstacle2;
    let randomNo = Math.floor((Math.random()*30+16)*10);
	obstacle = new Obstacle(1500,randomNo,'images/barUp.png')
    obstacle.create();

    this.obstacles.push(obstacle);
    obstacle2 = new Obstacle(1500,-(467-(randomNo-150)),'images/barDown.png');
    obstacle2.create();
    this.obstacles.push(obstacle2);
    
    this.element.appendChild(obstacle.element);
    this.element.appendChild(obstacle2.element);
  }
  
  
  
  collideBar(obs){
    let rect1X = parseInt(this.bird.element.style.left);
    let rect1Y = parseInt(this.bird.element.style.top);
    let rect2X = parseInt(obs.element.style.left);
    let rect2Y = parseInt(obs.element.style.top);
    let rect1W = parseInt(this.bird.element.style.width);
    let rect1H = parseInt(this.bird.element.style.height);
    let rect2W = parseInt(obs.element.style.width);
    let rect2H = parseInt(obs.element.style.height);
    
    if(rect1X < rect2X +rect2W &&
    rect1X + rect1W > rect2X &&
    rect1Y < rect2Y +rect2H &&
    rect1Y + rect1H > rect2Y)
    {
	  clearInterval(this.intervalId);
	  clearInterval(this.genId);
	}
  }
  
  collideGround() {
	let rect1Y = parseInt(this.bird.element.style.top);
    if(rect1Y>480 || rect1Y<0){
	  clearInterval(this.intervalId);
	  clearInterval(this.genId);
	}
  }
  
  score(obs){
	console.log('score');
    let rect1X = parseInt(this.bird.element.style.left)
    let rect2X = parseInt(obs.element.style.left);
    let rect2W = parseInt(obs.element.style.width);
    if(rect1X == (rect2X +rect2W)){
	  this.s.a +=0.5;
    this.s.element.innerHTML = "score: "+this.s.a;
	}
  }

}

export default Animator;
