class Tile{
    constructor(x,y,resolution,next){
this.x=x,
this.y=y
this.resolution=resolution;
this.next=next
this.color=random(200,255);
    }
    show(){
        fill(this.color);
        rect(this.x,this.y,this.resolution,this.resolution);


    }
    
}