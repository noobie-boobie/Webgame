

class Box{
    
    constructor(x, y=500, w = 50, h = 50, color, _static, img, res){
        this.body = Matter.Bodies.rectangle(x, y,w, h);
        
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.img = img;
        this.body.isStatic = _static;

    }
    setProperties(){
        let sprite = this.body.render.sprite
        sprite.texture = monster_img;
        sprite.xScale = 0.15;
        sprite.yScale = 0.1;
        this.body.friction = 0.03;
    }
    setProperties2(){
        let sprite = this.body.render.sprite
        sprite.texture = dragon_img;
        sprite.xScale = 0.15;
        sprite.yScale = 0.1;
        this.body.friction = 0.03;
    }
    setProperties3(){
        let sprite = this.body.render.sprite
        sprite.texture = zombie_img;
        sprite.xScale = 0.15;
        sprite.yScale = 0.1;
        this.body.friction = 0.03;
    }
    
    show(){
        World.add(engine.world, this.body);
    }
    move(){
        Matter.Body.set(this.body, "position", {x: this.body.position.x-1, y: this.body.position.y})
    }
     
   
}
