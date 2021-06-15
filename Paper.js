class Paper{
	constructor(x,y)
	{
		var options = {
			isStatic:false,
            'density':1.2,
            'friction':0,
            'restitution':0.3
        }
        this.body=Bodies.circle(x,y,20,options)
		this.x=x;
		this.y=y;
        this.r=20;
		this.image=loadImage("paper.png");
		
		World.add(world, this.body);
		

	}
	display()
	{
			var pos=this.body.position;
			
			

			push()
            translate (pos.x,pos.y);
			imageMode(CENTER);
            image(this.image,0,0,60,60);
			pop()
			
	}

}