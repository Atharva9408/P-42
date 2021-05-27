class Drop{
constructor(x,y){
var OP={
    isStatic:false,
    dencity:1.2,
    friction:0.1
}
this.rain=Bodies.circle(x,y,5,OP);
World.add(world,this.rain)
}
display(){
    fill("blue")
    ellipseMode(CENTER)
    ellipse(this.rain.position.x,this.rain.position.y,5,5)
}
update(){
    if(this.rain.position.y>600){
        Matter.Body.setPosition(this.rain,{x:random(0,1600),y:random(0,750)})
    }
}
}
