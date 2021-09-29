class roof{
	//constructor for roof body 
	constructor(x,y,w,h){
		var options={
			isStatic:true			
		}
		//defines dimensions of roof
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display(){			
		//defines position for ground
		var groundPos=this.body.position;		

		push();
		//translates ground position
		translate(groundPos.x, groundPos.y);
		//rectangle mode center
		rectMode(CENTER);
		//fill rectangle
		fill(128,128,128);
		//makes rectangle
		rect(0,0,this.w, this.h);
		pop();
		
	}

}