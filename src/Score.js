class Score{
  constructor(){
    this.element;
    this.a=0;
  }
  create(){
    this.element = document.createElement('div');
    this.element.style.fontFamily = 'Arial';
    this.element.style.fontWeight = 'bold';
    this.element.style.fontSize = 100+'px';
    this.element.style.color = 'white';
    this.element.innerHTML = "score: "+this.a;
    this.element.style.position = 'absolute';
    this.element.style.top = 100 +'px';
    this.element.style.left = 100 +'px';
     
  }
  addScore(){
    this.a +=0.5;
    this.element.innerHTML = "score: "+this.a;
  }
}

export default Score
