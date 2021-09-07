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
king.setProperties_King(0);
king.show();



let enemies = [];
for(let i = 0;i<10;i++){
  if(c1 % 3 === 0){
    enemies[i] = new Box(x,100);
    enemies[i].setProperties3(0);
  } 
  else if(c2 % 5 === 0){
    enemies[i] = new Box(x,100);
    enemies[i].setProperties2(0);
  }
  else {
    enemies[i] = new Box(x,100);
    enemies[i].setProperties(0);
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

/*
setInterval(() => {
  console.log("game");
}, 1000);

setTimeout(() => {
  console.log("enemy");
}, 10000);*/

let frame = 0,j = 0,j1 = 0,j2 = 0,k = 0,flag = true;
function animate(){
    requestAnimationFrame(animate); 
    for(let i = 0;i<10;i++){
      if( i % 5 === 0){
          enemies[i].setProperties2(j%20);
          if(i === 5){
          j++;
          }
      }
      
      else if(i % 3 === 0   && i != 0) {
        enemies[i].setProperties3(j1%20)
        
        if(i === 9){
          j1++;
          }
      }
      else   {
        enemies[i].setProperties(j2%20)
        
        if(i === 8){
          j2++;
          }
      }
      
    enemies[i].move(); 
    if(enemies[i].position_enemy() <= 350){
        
        
        enemies[i].update_Health();
        
        
    }
    if(enemies[i].check_Health() <= 0){
      enemies.splice(i,0);
      enemies[i].remove_enemy();
      if(i === enemies.length-1)
      {
        flag = false;
      }
    }
  
    
  
    //enemies[i].show(); 
    }
    if(enemies[0].position_enemy() <= 350 && flag){
    if(frame%5 === 0 ){
      king.setProperties_King(k%5);
      k++;
    }
    frame++;
  }
  /*  
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

let health1 = new health_Bar(290);
health1.setProperties();
health1.show();








animate();


World.add(engine.world, [mouseConstraint, sling]);
Engine.update(engine);
Matter.Runner.run(engine);
Render.run(render);




