

class Box{
    
    constructor(x, health,y=500, w = 50, h = 50, color, _static, img, res){
        this.body = Matter.Bodies.rectangle(x, y,w, h);
        this.health = 100;
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
    setProperties2(m){
        let sprite = this.body.render.sprite;
        
        if(m === 1){
            sprite.texture = monster1;
        }
        if(m === 2){
            sprite.texture = monster2;
        }
        if(m === 3){
            sprite.texture = monster3;
        }
        sprite.xScale = 0.5;
        sprite.yScale = 0.25;
        this.body.friction = 0.03;
    }
    setProperties3(){
        let sprite = this.body.render.sprite
        sprite.texture = zombie_img;
        sprite.xScale = 0.15;
        sprite.yScale = 0.1;
        this.body.friction = 0.03;
    }
    setProperties_King(){
        let sprite = this.body.render.sprite
        sprite.texture = knight_img;
        sprite.xScale = 0.15;
        sprite.yScale = 0.15;
        this.body.friction = 0.03;
    }
    
    show(){
        World.add(engine.world, this.body);
    }
    move(){
        Matter.Body.set(this.body, "position", {x: this.body.position.x-1, y: this.body.position.y})
    }
    position_enemy(){
        return this.body.position.x;
    }  
    remove_enemy(){
        World.remove(engine.world,this.body);
    }
    update_Health(){
        this.health -= 1;
    }
    check_Health(){
        return this.health;
    }
   
}
