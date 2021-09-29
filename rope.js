class rope{
	//constructor for rope body
	constructor(body1,body2, offsetX){
		var options={
			bodyA:body1,
			bodyB:body2
		}

	//creates rope body
	this.rope=Constraint.create(options);
	//adds the rope body
	World.add(world,this.rope);
	//defines x offset value
	this.offsetX = offsetX;
	}
	display(){
		//position for the two body
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		push();
		//makes the string thick or thin
		strokeWeight(2);
		//colour of string
		stroke(0); 
		//displays the line 
		line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
		pop();
	}
}