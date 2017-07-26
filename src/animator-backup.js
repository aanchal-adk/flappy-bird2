class Animator{
  constructor(element, container,bird,obs,genId) {
    this.container = container;
    this.bird = bird;
    this.obstacles = obs;
    this.element = element;
    this.score;
  }
  
  startAnimation() {
	document.addEventListener('keydown',(e) => {
	if(e.keyCode == '38'){
	  this.bird.y += this.bird.v;
	  this.bird.element.style.top = this.y+'px';
	  this.bird.g = 0;
	}
	});
    this.intervalId = setInterval(()=>{
	  this.bird.gravity();
	  this.container.move();
	  console.log(this.obstacles.length);
	  for(let i = 0;i<this.obstacles.length;i++){
	    this.obstacles[i].move();
	    //~ this.obstacleRemove(this.obstacles[i],i);
	    this.collideBar(this.obstacles[i]);
	  }
	  this.Remove();
	},1000/60);
  }
  //~ obstacleRemove(obs, i){
    //~ if(obs.x<=-75){
	  //~ this.element.removeChild(obs.element);
	  //~ this.obstacles.splice(i,1);
  //~ }
  //~ }
  Remove(){
	if(this.obstacles.length >0){
      if(this.obstacles[0].element.x<=-75){
        this.element.removeChild(this.obstacles[0].element);
	    this.obstacles.splice(0,1);
      }
    }
    //~ if(this.obstacles[1].x<=-75){
      //~ this.element.removeChild(this.obstacles[1].element);
	  //~ this.obstacles.splice(1,1);
    //~ }
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
    
    if((rect1X < rect2X +rect2W &&
    rect1X + rect1W > rect2X &&
    rect1Y < rect2Y +rect2H &&
    rect1Y + rect1H > rect2Y) ||(rect1Y>480 || rect1Y<0))
    {console.log(rect1X, rect1Y, rect2X, rect2Y);
	  clearInterval(this.intervalId);
	  clearInterval(this.genId);
	}
  }
  
  //~ score() {
    //~ if(){}
  //~ }
}

export default Animator;
