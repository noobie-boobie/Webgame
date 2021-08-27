class Box{
    constructor(x, y, w, h, color){
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.color = color;
    }

    print(){
        console.log("Debug print");
    }

    show(){
        canvas.beginPath();
        canvas.rect(this.posX, this.posY, this.width, this.height);
        canvas.fillStyle = this.color;
        canvas.fill();
    }
}