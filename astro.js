class Astro{
    constructor(x,y,width,height){
        var options={
            restitution:0.1,
            friction: 1.0,
            density: 1.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height;
        this.image=loadImage("images/a1.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       // console.log(this.body.speed);
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop()
    }


}
