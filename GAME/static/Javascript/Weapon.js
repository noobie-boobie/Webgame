class Weapon{
    constructor(x,y,r) {
        this.body = Bodies.circle(x, y, r);
        this.radius = r;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
         const angle = this.body.angle;
        push();
         //translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0,0,255);
        //circle(pos.x,pos.y, this.radius);
        pop();

        image(imgbox, pos.x-25, pos.y-25, 50,50);
    }
}