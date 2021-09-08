class health_Bar{
    constructor(x){
        this.y = windowHeight- 140;
        this.x = x;
        this.body = Matter.Bodies.rectangle(this.x,this.y,0.01,0.01);
        this.body.isStatic = true;
        this.health = 1000
        this.total_health = this.health
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

    update_health(power){
        this.health -= power;
        
    }
    
    check_health(){
        let per = (this.health/this.total_health) * 100;
        if(per >= 81 ){
            return 0;
        }
        else if(per <= 80 && per >= 66){
            return 1;
        }
        else if(per <= 65 && per >= 46){
            return 2;
        }
        else if(per <= 45 && per >= 31){
            return 3;
        }
        else if(per <= 30 && per >= 16){
            return 4;
        }
        else if(per <= 15){
            return 5;
        }
    }

    update_img(i){
        let sprite = this.body.render.sprite
        sprite.texture = bar[i]
    }
    show(){
        World.add(engine.world, this.body);
    }
}