class Box{
    constructor(x, y, w, h, color, _static){
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.color = color;
        this.static = _static;
    }

    print(){
        console.log("Debug print");
    }

    show(){

        
        let box = Bodies.rectangle(this.posX, this.posY, this.width, this.height,{isStatic:this.static}, {render: {
            fillStyle: 'green'
        }});
        World.add(engine.world, [box]);
    }
}