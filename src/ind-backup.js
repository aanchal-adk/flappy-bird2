// // // // ES6 Modules
// // // import Box from './Box';
// // // import Container from './Container';

// // // let container = new Container();
// // // let box = new Box();

// // // // var vs let
// // // var a = 1;
// // // var a = 10;

// // // let b = 1;
// // // // let b = 2;
// // // // let scoping
// // // function test() {
// // //   // for (var a = 1; a < 10; a++) {

// // //   // }

// // //   // console.log(a);
// // //   for (let b = 1; b < 10; b++) {

// // //   }

// // //   console.log(b);
// // // }

// // // // test();
// // // // console.log(a);

// // // const AGE = 1;
// // // // AGE = 2;
// // // console.log(AGE);


// // // Arrow functions
// // function Slider() {
// //   this.value = 'test';

// //   this.init = () => {
// //     setInterval(() => {
// //       console.log(this.value);
// //     }, 1000);
// //   }
// // }

// // let slider = new Slider();
// // slider.init();

// // let a = () => {

// // }

// // function doSomething() {

// // }

// // setInterval(() => {

// // }, 1000)

// // // let is the new var
// // // const


// // Pass by value

// let count = [1, 2, 3];
// let a = 1;

// function modify(params, b) {
//   params[0] = 3;
//   b = 2;
// }

// modify(count, a);

// console.log(a);
// console.log(count);


// let prev = [1, 2, 3];
// // let b = [1, 2, 3];

// function test(prev) {
//   let newValue = prev.slice();
//   newValue[0] = 'test';
//   console.log(newValue);
// }

// test(prev);
// console.log(prev)

// let strings = 1 + 'px' + 'asdf' + 'adsf';

// // Template Strings
// let a = 1;
// let templateString = `${a}px  ${a} ${a} ${a}`;
// console.log(templateString);

//~ let test = {
  //~ a: 1,
  //~ b: 2,
  //~ c: 3
//~ };
//~ 
//~ console.log(test);
//~ 
//~ let hawa = 'name';
//~ 
//~ let obj = {
  //~ [hawa]: 'test'
//~ };
//~ 
//~ function modify(obj, key, value) {
  //~ obj[key] = value;
//~ }
//~ 
//~ modify(obj, 'name', 'hawa');
//~ 
//~ console.log(obj);
//~ 
//~ // For of loop
//~ let interns = [
  //~ {
    //~ name: 'Aishwarya'
  //~ },
  //~ {
    //~ name: 'Sagun'
  //~ }
//~ ]
//~ 
//~ for (let intern of interns) {
  //~ console.log(intern);
//~ }
//~ 
//~ 
//~ //destructuring
//~ 
//~ let shyal = {
  //~ name: 'Sabin',
  //~ age: 80,
  //~ gender: 'male'
//~ };
//~ 
//~ let { name, age } = shyal;
//~ 
//~ console.log(name)
import Container from './Container'
import Bird from './Bird'
import Animator from './Animator'
import Obstacle from './Obstacle'

class Flappy{
  constructor(){
	  
  }
  init(){
	let obstacles = [];  
	let obstacle, obstacle2;
    let element = document.getElementById('flappy-bird');
    let container = new Container(2048, 512);
    container.create();
    let bird = new Bird(42.4,56.8);
    bird.create();
    
    element.appendChild(container.element);
    
    this.intervalId = setInterval(() => {
	  let randomNo = Math.floor((Math.random()*30+16)*10);
	  obstacle = new Obstacle(1024,randomNo,'images/barUp.png')
      obstacle.create();
      obstacles.push(obstacle);
      obstacle2 = new Obstacle(1024,-(467-(randomNo-150)),'images/barDown.png')
      obstacle2.create();
      obstacles.push(obstacle2);
      
      element.appendChild(obstacle.element);
      element.appendChild(obstacle2.element);  
	},4000);
    
    element.appendChild(bird.element);
    
    let animate = new Animator(element, container, bird, obstacles,this.intervalId);
    animate.startAnimation();
  }
  
}
let flappyBird = new Flappy();
flappyBird.init();

