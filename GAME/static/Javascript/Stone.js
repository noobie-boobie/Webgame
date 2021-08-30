class Stone{
    constructor(x,y,r=18) {
        this.x = x;
        this.y = y;
        this.r = r;


        this.body = Matter.Bodies.circle(this.x, this.y, this.r);
    }

    setProperties(){
        this.body.isStatic = false;
        this.body.restitution = 0.5;

        //this.body.mass = this.body.mass;
        let sprite = this.body.render.sprite
        sprite.texture = ballImage;
        sprite.xScale = 0.06;
        sprite.yScale = 0.06
        this.body.friction = 0;
       // this.show();

    }

    getStone(){

    }

    show(){
        World.add(engine.world, this.body);
    }
}