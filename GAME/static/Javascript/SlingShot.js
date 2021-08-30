class SlingShot {
    constructor() {
        this.x = 140;
        this.y = 300;
        this.width = 1;
        this.height = 90;
        this.slingX = this.x;
        this.slingY = this.y - (this.height)/2 - 20;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
    }

    setSlingShot(){
        
        let sx = this.slingX;
        let sy = this.slingY;
        
        var ball = new Stone(sx, sy);
        ball.setProperties();
        ball = ball.body;
        var anchor = { x: sx, y: sy };
        var sling = Constraint.create({
        pointA: anchor,
        bodyB: ball,
        stiffness: 0.05
        });


         Events.on(engine, 'afterUpdate', function() {

           if (mouseConstraint.mouse.button === -1 && (Math.abs(ball.position.x-sx) > 40 || Math.abs(ball.position.y - sy)>40))  {
               console.log("Fire",sx, sy);
                console.log(ball.position.x, ball.position.y);

               ball = new Stone(sx, sy);
               ball.setProperties();
                ball = ball.body;
                 setTimeout(function () {Composite.add(engine.world, ball);}, 500);
                 sling.bodyB = ball;

           }
         });

         World.add(engine.world, [sling, ball]);
    }


    setProperties(){
        console.log('Properties');
        console.log(this.b);
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = slingImage;
        sprite.xScale = 0.28;
        sprite.yScale =0.325;
        this.body.friction = 0.03;

    }

    show(){
        World.add(engine.world, [this.body]);
    }
}