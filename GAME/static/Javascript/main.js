
let ground = new Ground();
ground.setProperties();
ground.show();

let tower = new Tower();
tower.setProperties();
tower.show();

var stones = [];

stones.push(new Stone(100,100));
stones.push(new Stone(200,50));
stones.push(new Stone(300,-50));
stones.push(new Stone(220,200));
stones.push(new Stone(220,200));
stones.push(new Stone(280,200));
stones.push(new Stone(320,200));
stones.push(new Stone(420,200));

for(let i=0; i<stones.length; i++){
    stones[i].setProperties();
    stones[i].show();
    stones[i].move();
}

tower.move();

Engine.update(engine);
Matter.Runner.run(engine);
Render.run(render);




