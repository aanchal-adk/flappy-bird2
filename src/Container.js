class Container {
  constructor(width, height) {
    this.height = height;
    this.width = width;
    this.element;
    this.x = 0;
    this.y = 0;
  }

  create() {
	this.element = document.createElement('img');
	this.element.setAttribute('src','images/background2.png');
	this.element.style.width = this.width + 'px';
	this.element.style.height = this.height + 'px';
	this.element.style.position = 'absolute';
	this.element.style.top = this.y+'px';
	this.element.style.left = this.x+'px';
  }
  move() {
	this.x -= 5;
    if(this.x <= -1024){
	  this.x = 0;
	}
	this.element.style.left = this.x+'px';
  }
}

export default Container;
