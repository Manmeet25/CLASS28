class Tree
{
constructor(x,y,width,height)
{

this.body= Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
this.image = loadImage("tree.t.png")

}

display()
{ 
    var pos= this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
   
    image(this.image,0,0, this.width, this.height);
    pop();
}

}