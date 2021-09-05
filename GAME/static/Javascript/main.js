//let E1 = new Enemy();
let c1 = 0,c2 = 0,x=1300;

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



let king = new Box(300, 500,500, 50,  50, 0, "true", 0, 0);
king.setProperties_King();
king.show();



let enemies = [];
for(let i = 0;i<10;i++){
  if(c1 % 3 === 0){
    enemies[i] = new Box(x,100);
    enemies[i].setProperties3();
  } 
  else if(c2 % 5 === 0){
    enemies[i] = new Box(x,100);
    enemies[i].setProperties2(1);
  }
  else{
    enemies[i] = new Box(x,100);
    enemies[i].setProperties();
  }
  c1++;
  c2++;
 x += 100;
}

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
/*
enemies.push(new Box(1200));
enemies.push(new Box(1100));
enemies.push(new Box(1000));
enemies.push(new Box(900));
enemies.push(new Box(800));*/
let frame = 0,j = 1;
function animate(){
    requestAnimationFrame(animate); 
    for(let i = 0;i<10;i++){
      if(frame % 5 === 0 && i === 5){
        
          enemies[i].setProperties2(j);
          j++;
      }
    enemies[i].move(); 
    if(enemies[i].position_enemy() <= 350){
        
      
        enemies[i].update_Health();
        
    }
    if(enemies[i].check_Health() <= 0){
      enemies.splice(i,0);
      enemies[i].remove_enemy();
    }

    frame++;
    //enemies[i].show(); 
    }
    /*frame++;
    
    if(frame % 100 === 0)
    {
      j = j+ 1 ;
      enemies[j].show(); 
         
    }
    
    */
}

for(let i = 0;i<10;i++){
 // enemies[i].move(); 
  enemies[i].show(); 
}


let ground = new Ground();
ground.setProperties();
ground.show();

let tower = new Tower();
tower.setProperties();
tower.show();








animate();


World.add(engine.world, [mouseConstraint, sling]);
Engine.update(engine);
Matter.Runner.run(engine);
Render.run(render);




