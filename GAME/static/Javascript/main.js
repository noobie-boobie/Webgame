
/*
const game_canvas = document.querySelector('canvas');
const canvas = game_canvas.getContext('2d');
let ground = new Box(0, game_canvas.height-20, game_canvas.width, 20, 'orange');
let tower = new Box(10,game_canvas.height-20,game_canvas.width-260,-60,"cyan");

ground.print();
ground.show();
tower.print(); 
tower.show();
*/
/*console.log("matter");

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
     
var engine = Engine.create();


var render = Render.create({
                element: document.body,
                engine: engine,
                options: {
                    width: 800,
                    height: 400,
                    wireframes: false
                }
             });
              
var boxA = Bodies.rectangle(400, 200, 80, 80);*/

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
     
var engine = Engine.create();
console.log("Engine");
console.log(engine);
var render = Render.create({
                element: document.body,
                engine: engine,
                
                options: {
                    width: 1000,
                    height: 600,
                    wireframes: false,
                    background: 'cyan',
                }
             });
              
var boxA = Bodies.rectangle(70, 520, 80, 80);

var ground = Bodies.rectangle(0, 600, 2000, 80, { isStatic: true }, {render: {
    fillStyle: 'green'
}});
 
World.add(engine.world, [boxA,ground]);
 
Engine.run(engine);
Render.run(render);