// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     World = Matter.World,
//     Bodies = Matter.Bodies;
     
// var engine = Engine.create();
// console.log("Engine");
// console.log(engine);
// var render = Render.create({
//                 element: document.body,
//                 engine: engine,
                
//                 options: {
//                     width: 1000,
//                     height: 600,
//                     wireframes: false,
//                     background: 'cyan',
//                 }
//              });
              
// Engine.run(engine);
// Render.run(render);
console.log("Hello");
let Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

let engine, world;
let ball, ground;

let imgbox, img_ground, bg_img, tower;

function preload(){
    imgbox = loadImage(imgURL);
    img_ground = loadImage(groundURL);
    bg_img = loadImage(backgroundURL);
    tower_img = loadImage(towerURL);
}


function setup(){

    createCanvas(1000, 600);
   engine = Engine.create();
    world = engine.world;

   ball = new Box(100,100,50,50, 'none', false, imgbox);
   ground = new Box(0,540, 1000, 60,color(0,255,0),true, img_ground);
   tower = new Box(40, 380, 150, 120 , 'none', true, tower_img);
}

function draw(){

    background(bg_img);
    Matter.Engine.update(engine);

    ball.show();
    ground.show();
    tower.show();
    //image(imgbox,0,0,100,100);

}    