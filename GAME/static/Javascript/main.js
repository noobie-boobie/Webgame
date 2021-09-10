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

let health_attachment = []

let sling = new SlingShot();
sling.setSlingShot();
sling.setProperties();
sling.show();

let king = new King();
king.setProperties_King();
king.show();


let health1 = new health_Bar(290, windowHeight- 140,1000);
health1.setProperties();
health1.show();




let zombie_health_bar = [];
let zombies = [];
for(let i = 0; i < 10; i++){
  zombies[i] = new zombie(x);
  zombies[i].setProperties();
  zombie_health_bar[i] = new health_Bar(x, windowHeight- 120);
  zombie_health_bar[i].setProperties();
 
  x += 100;
}
let frame = 0, frame1 = 0, j = 0, k = 0, flag = true, index;
function change(){
  requestAnimationFrame(change); 
  for(let i = 0; i < 10; i++){
    if(frame1 % 10 === 0){
    zombies[i].update_img(j % 3);
    }
    
    zombies[i].move();
    let tmp = zombies[i].position_enemy();
    zombie_health_bar[i].move(tmp);

    if(zombies[i].position_enemy() <= 350){
      health1.update_health(0.1);
      index = health1.check_health();
      health1.update_img(index);
      zombies[i].update_Health();

    }
    if(zombies[i].check_Health() <= 0){
      zombies.splice(i,0);
      zombie_health_bar.splice(i,0);
      zombies[i].remove_enemy();
      zombie_health_bar[i].remove_health_Bar();
      if(i === zombies.length-1)
      {
        flag = false;
      }
    }
}
j++;
frame1++;
  if(zombies[0].position_enemy() <= 350 && flag){
    if(frame%5 === 0){
      king.update_img(k%5);
      k++;
    }
    frame++;
  }  
}


/*for(let i = 0;i<10;i++){
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

//let frame = 0,j = 0,j1 = 0,j2 = 0,k = 0,flag = true, index;
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
        health1.update_health(0.1);
        index = health1.check_health();
        health1.update_img(index);
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
      king.update_img(k%5);
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
  //World.add(engine.world, health_attachment[i]);
  zombie_health_bar[i].show();
  zombies[i].show(); 
}


let ground = new Ground();
ground.setProperties();
ground.show();

let tower = new Tower();
tower.setProperties();
tower.show();










change();


World.add(engine.world, [mouseConstraint, sling]);
Engine.update(engine);
Matter.Runner.run(engine);
Render.run(render);




