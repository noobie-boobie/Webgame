class SlingShot {
    constructor() {
        this.x = 120;
        this.y = windowHeight- 320;
        this.width = 1;
        this.height = 90;
        this.slingX = this.x;
        this.slingY = this.y - (this.height)/2 - 20;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);

        this.allowShoot = false;
        this.Balls = [];
        this.sling;
        this.currentBall = -1;
        this.dragBall = false;
        this.remove = false;
    }
    setSlingShot(){

        this.Balls.push(new Stone(this.slingX, this.slingY));
        this.currentBall += 1;

        this.Balls[this.currentBall].setProperties();
        this.sling = Matter.Constraint.create({
            pointA: { x: this.slingX, y: this.slingY },
            bodyB: this.Balls[this.currentBall].body,
            stiffness: 0.02
        });


         World.add(engine.world, [this.Balls[this.currentBall].body]);
    }

    toStatic(val){
        if (this.currentBall > -1)
        this.Balls[this.currentBall].body.isStatic = val;
    }

    moveBall(X, Y){
        if(this.dragBall && (this.currentBall > -1)){
            Matter.Body.set(this.Balls[this.currentBall].body, "position", {x: 2*X-300, y: 2*Y});
            this.allowShoot = true;
        }
    }

    shoot(){
        this.toStatic(false);
        this.allowShoot = false;
        this.dragBall = false;
        this.Balls.push(new Stone(this.slingX, this.slingY));
        this.currentBall += 1;
        this.Balls[this.currentBall].setProperties();

        setTimeout(() =>{
            World.add(engine.world, this.Balls[this.currentBall].body);
            this.sling.bodyB = this.Balls[this.currentBall].body;
            console.log('Shoot', this.Balls.length, this.currentBall);
        }, 100);

        console.log(this.currentBall);

    }

    handOverBall(X, Y){
        var rad = 30; //Change later



        let bx = this.Balls[this.currentBall].body.position.x;
        let by = this.Balls[this.currentBall].body.position.y;

        let d = Math.sqrt((X-bx)**2 + (Y-by)**2);

        if (d<=rad){
             console.log('HandOverBall', this.currentBall, this.Balls.length);
             this.dragBall = true;
        }
        return d<=rad;
    }

    checkCollision(){
        for(let i= 0; i <= this.currentBall; i++){
            if(Matter.SAT.collides(this.Balls[i].body, ground.body).collided){
                console.log("Collided with Ground");

                this.removeBall(i);

            }
        }
    }

    removeBall(i){
        World.remove(engine.world, this.Balls[i].body);
        this.Balls.splice(i,i);
        this.currentBall = this.Balls.length-1;
        console.log('Remove', this.Balls.length, this.currentBall, i);
    }

    setProperties(){
        console.log('Properties');
        console.log(this.b);
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        //sprite.texture = slingImage;
        sprite.xScale = 0.28;
        sprite.yScale =0.325;
        this.body.friction = 0.03;

    }
    
    show(){
        World.add(engine.world, [this.body, this.sling]);
    }

}