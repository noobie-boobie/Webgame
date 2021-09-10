class Hand{
    constructor(x, y, w=20, h=20) {
        this.body = Matter.Bodies.rectangle(x, y, w, h);
    }

    setProperties(){
        this.body.isStatic = true;
        this.body.collisionFilter.mask = 0;
    }

    move(X, Y){
        //console.log('Moving Hand');
        Matter.Body.set(this.body, "position", {x: 2*X-300, y: 2*Y});

    }

    getHandXY(){
        return [this.body.position.x, this.body.position.y];
    }

    show(){
        World.add(engine.world, this.body);
    }
}