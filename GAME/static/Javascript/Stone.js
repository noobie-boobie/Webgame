class Stone{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = 30;


        this.body = Matter.Bodies.circle(this.x, this.y, this.r);
    }

    setProperties(){
        this.body.isStatic = false;
        this.body.restitution = 0.5;

        this.body.mass = this.body.mass;
        let sprite = this.body.render.sprite
        sprite.texture = ballImage;
        sprite.xScale = 0.12;
        sprite.yScale = 0.12
        this.body.friction = 0;


    }

    move(){
        Body.setVelocity(
            this.body,
            {
                x:10,
                y:-10
            }
        );


    }

    show(){
        World.add(engine.world, this.body);
    }
}