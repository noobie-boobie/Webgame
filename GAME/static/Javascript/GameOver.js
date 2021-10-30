class GameOver{
    constructor() {
        //this.background = Matter.Bodies.rectangle(0,0, windowWidth, windowHeight);
        this.GameOver = [];
        this.platform = Matter.Bodies.rectangle(0,windowHeight/2, windowWidth*3, 0.1);

        //Position Variables
        var midX = windowWidth/2;
        this.buttonW = 200
        this.buttonH = 70;
        this.playAgainX =  midX+100;
        this.playAgainY =  windowHeight/2+100;
        this.exitX =  midX-this.buttonW;
        this.exitY =  this.playAgainY;


        this.exitButton = Matter.Bodies.rectangle(this.exitX, this.exitY, this.buttonW, this.buttonH);
        this.playAgain = Matter.Bodies.rectangle(this.playAgainX, this.playAgainY, this.buttonW, this.buttonH);
    }

    setBackground(){
        //this.background.isStatic = true;
    }

    hoverOnExitButton(){
        var handPos = hand.getHandXY();
        var handX = handPos[0];
        var handY = handPos[1];

        return handX >= this.exitX && handY >= this.exitY && handX <= (this.exitX + this.buttonW) && handY <= (this.exitY + this.buttonH);

    }

    updateButtons(){
        console.log('Update Button')
        if (this.hoverOnExitButton()){
            console.log('Shit happening')
            this.exitButton.render.sprite.texture = quitGameHoverImg;
        }
        else {
            this.exitButton.render.sprite.texture = quitGameImg;
        }
    }

    setButtons(){
        this.exitButton.isStatic = true;
        this.playAgain.isStatic = true;

        this.exitButton.render.sprite.xScale = 0.6
        this.exitButton.render.sprite.yScale = 0.6;
        this.exitButton.render.sprite.texture = quitGameImg;

        this.playAgain.render.sprite.xScale = 0.6
        this.playAgain.render.sprite.yScale = 0.6;
        this.playAgain.render.sprite.texture = playAgainImg;

    }

    setGameOver(){
        this.setButtons();
        var w = 130;
        var h = 170;
        var y = -100;
        var d = 180;
        var x = 160;

        let G = new Matter.Bodies.rectangle(0*d+ x, y, w, h);
        let A = new Matter.Bodies.rectangle(1*d+ x, y, w, h);
        let M = new Matter.Bodies.rectangle(2*d+ x, y, w, h);
        let e = new Matter.Bodies.rectangle(3*d+ x, y, w, h);
        let O = new Matter.Bodies.rectangle(5*d+ x, y, w, h);
        let V = new Matter.Bodies.rectangle(6*d+ x, y, w, h);
        let E = new Matter.Bodies.rectangle(7*d+ x, y, w, h);
        let R = new Matter.Bodies.rectangle(8*d+ x, y, w, h);

        G.render.sprite.texture = GImg;
        A.render.sprite.texture = AImg;
        M.render.sprite.texture = MImg;
        e.render.sprite.texture = EImg;
        O.render.sprite.texture = OImg;
        V.render.sprite.texture = VImg;
        E.render.sprite.texture = EImg;
        R.render.sprite.texture = RImg;

        this.GameOver.push(G);
        this.GameOver.push(A);
        this.GameOver.push(M);
        this.GameOver.push(e);
        this.GameOver.push(O);
        this.GameOver.push(V);
        this.GameOver.push(E);
        this.GameOver.push(R);

        this.platform.isStatic = true;

        for(let i = 0; i< this.GameOver.length; i++){
            this.GameOver[i].render.sprite.xScale = 1;
            this.GameOver[i].render.sprite.xScale = 1;
            this.GameOver[i].restitution = 0.1;
        }
    }

    stopEngine(){

        Matter.Render.stop(this.debugRender); // this only stop renderer but not destroy canvas
        Matter.World.clear(this.engine.world);
        Matter.Engine.clear(this.engine);
        Runner.stop(Runner.runner);
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};
        console.log('Engine Stopped');
    }

    show(){
        for(let i = 0; i< this.GameOver.length; i++){
            World.add(engine.world, this.GameOver[i]);
        }
        World.add(engine.world, [this.platform, this.exitButton, this.playAgain])
    }

    remove(){
        for(let i = 0; i < this.GameOver.length; i++){
            World.remove(engine.world, this.GameOver[i]);
        }
        World.remove(engine.world, [this.platform, this.exitButton, this.playAgain])
    }
}