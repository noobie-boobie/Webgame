class health_Bar{
    constructor(x){
        this.y = 458;
        this.x = x;
        this.body = Matter.Bodies.rectangle(this.x,this.y,0.01,0.01);
        this.body.isStatic = true;
        this.body.collisionFilter = {
            'group': -1,
            'category': 2,
            'mask': 0,
          };
        
    }
    setProperties(){
        let sprite = this.body.render.sprite
        sprite.texture = bar1;
        sprite.xScale = 0.15;
        sprite.yScale = 0.12;
       
    }
    show(){
        World.add(engine.world, this.body);
    }

}