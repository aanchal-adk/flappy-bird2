class Bird{
  constructor(h,w){
    this.height =h ;
    this.width = w;
    this.color ='red';
    this.x = 300;
    this.y = 10;
    this.element; 
    this.g = 0;
    this.v = -60;
  }
  
  create() {
    this.element = document.createElement('img');
    this.element.setAttribute('src','images/flappy-bird2.png');
    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  
  gravity() {
    
    this.y +=this.g;
    this.element.style.top = this.y+'px';
    this.g +=0.2;
    
  }
}

export default Bird;


