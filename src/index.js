
import Container from './Container'
import Bird from './Bird'
import Animator from './Animator'
import Obstacle from './Obstacle'
import Score from './Score'

class Flappy{
  constructor(){
	  
  }
  init(){
    let element = document.getElementById('flappy-bird');
    let container = new Container(2048, 512);
    container.create();
    let bird = new Bird(42.4,56.8);
    bird.create();
    let score = new Score();
    score.create();
    element.appendChild(container.element);
    element.appendChild(score.element);
    element.appendChild(bird.element);
    
    
    let animate = new Animator(element, container, bird, score);
    animate.startAnimation();
  }
  
}
let flappyBird = new Flappy();
flappyBird.init();

console.log('hello flappy. how do you do?');
