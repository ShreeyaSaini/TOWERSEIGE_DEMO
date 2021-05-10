class Block {
    constructor(x,y) {

        var options={
            restitution: 0.8,
            density: 1.0,
            friction: 1.0
        }

        this.body = Bodies.rectangle(x,y,25,25,options);
        this.visibility = 225;
        World.add(world,this.body);
    
    } display() {
        if(this.body.speed < 3) {
            this.display();
        } else {
         World.remove(world, this.body);
         push();
         this.visibility = this.visibility - 5;
         pop();
        }
        var pos = this.body.position;

        fill("red");
        rectMode(CENTER)
        strokeWeight(1.5);
        stroke("black");
        rect(pos.x, pos.y,25,25);
    }
}