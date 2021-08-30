class Ground{
    constructor() {
        this.x = 0;
        this.y = windowHeight;
        this.w = windowWidth;
        this.h = 100;

        this.body = Matter.Bodies.rectangle(this.x, this.y, 2*this.w, this.h);
    }

    setProperties(){
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = groundImage;
        sprite.xScale = 4;
        sprite.yScale = 2.2;
        this.body.friction = 3;
        //Body.rotate(this.body, -0.04);
    }

    show(){
        World.add(engine.world, this.body);
    }
}
