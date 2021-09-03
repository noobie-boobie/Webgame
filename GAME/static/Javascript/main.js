//let E1 = new Enemy();
let c1 = 0,c2 = 0;


let enemies = [];
/*for(let i = 0;i<10;i++){
  if(c1 % 3 === 0){
    enemies[i] = new Box(1300,500,20,50,"red",false,0,0);
    enemies[i].setProperties3();
  } 
  else if(c2 % 5 === 0){
    enemies[i] = new Box(1300,200,20,50,"red",true,0,0);
    enemies[i].setProperties2();
  }
  else{
    enemies[i] = new Box(1300,500,20,50,"red",false,0,0);
    enemies[i].setProperties();
  }
  c1++;
  c2++;
 
}*/

/*
function handleEnemies() {
  for(let i = 0;i<enemies.length;i++){
    enemies[i].E1.move();
    enemies[i].E1.show();
  }
  
  if(frame % 100 === 0){
    enemies.push(E1)
  }
}*/
enemies.push(new Box(1200));
enemies.push(new Box(1100));
enemies.push(new Box(1000));
enemies.push(new Box(900));
enemies.push(new Box(800));
let frame = 0,j = 0;
function animate(){
    requestAnimationFrame(animate); 
    for(let i = 0;i<enemies.length;i++){
    enemies[i].move(); 
    enemies[i].show(); 
    }
    /*frame++;
    
    if(frame % 100 === 0)
    {
      j = j+ 1 ;
      enemies[j].show(); 
         
    }
    
    */
}




let ground = new Ground();
ground.setProperties();
ground.show();

let tower = new Tower();
tower.setProperties();
tower.show();



let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;

let sling = new SlingShot();
sling.setSlingShot();
sling.setProperties();
sling.show();



enemies[0].show();
animate();


World.add(engine.world, [mouseConstraint, sling]);
Engine.update(engine);
Matter.Runner.run(engine);
Render.run(render);




