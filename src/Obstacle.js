class Obstacle{
  constructor(x,y,img) {
	this.height = 467;
	this.width = 75;
    this.x = x;
    this.y = y;
    this.source = img;
    this.element;
    this.velocity = -5;
  }	
  
  create() {
    this.element = document.createElement('img');
    this.element.setAttribute('src',this.source);
    this.element.style. height = this.height;
    this.element.style.width = this.width;
    this.element.style.top = this.y;
    this.element.style.left = this.x;
    this.element.style.position = 'absolute';
  }
  
  move(){
    this.x += this.velocity;
    this.element.style.left = this.x;
  }
  
}

export default Obstacle;
