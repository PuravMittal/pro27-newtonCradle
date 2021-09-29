class bob{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
		}
		//dimensions for bob
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		//adds bob to the world
		World.add(world, this.body);

	}
	display(){
		//makes var position
		var paperpos=this.body.position;
		//properties for bob's display
		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER);
		fill(255,0,255);
		ellipse(0,0,this.r, this.r);
		pop();
		
	}

}

