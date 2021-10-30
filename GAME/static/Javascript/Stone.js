class Stone{

    constructor(x,y,r=30) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.damageKardiya = false;
        this.body = Matter.Bodies.circle(this.x, this.y, this.r);
    }

    setProperties(){
        this.body.isStatic = false;

        this.body.mass = this.body.mass*2;
        let sprite = this.body.render.sprite
        sprite.texture = ballImage;
        sprite.xScale = 0.14;
        sprite.yScale = 0.14;
        this.body.friction = 0.5;

    }

    show(){
        World.add(engine.world, this.body);
    }
}