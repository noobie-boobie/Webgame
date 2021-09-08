class King{
    constructor(){
        this.body = Matter.Bodies.rectangle(300, windowHeight- 95, 50, 50);
        this.body.isStatic = true;

    }

    setProperties_King(){
        let sprite = this.body.render.sprite
        sprite.texture = King_arr[2];
        sprite.xScale = 0.4;
        sprite.yScale = 0.3;
        this.body.friction = 0.03;
    }

    update_img(i){
        let sprite = this.body.render.sprite
        sprite.texture = King_arr[i];
    }

    show(){
        World.add(engine.world, this.body);
    }
}    