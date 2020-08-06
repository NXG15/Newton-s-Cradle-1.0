class bob {
    constructor(x,y){
        var options= {
            //isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 120;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill('aquamarine');
        ellipse(pos.x,pos.y,this.radius);

    }
}