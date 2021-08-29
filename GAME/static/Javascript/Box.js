class Box{
    constructor(x, y, w, h, color, _static, img, res){
        this.body = Matter.Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
        this.x = x;
      this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.img = img;

        this.body.isStatic = _static;
    }

    show(){
        var pos = this.body.position;
        fill(255,0,0);
        rect(pos.x, pos.y, this.width, this.height);
        //image(this.img, pos.x,pos.y,this.width,this.height);
    }
}