
//var count = 150;     
// The amount of circles we want to make:
//var coherence = .5; //percent of dots moving in same direction
//var speed = 5; //number of pixels dots are moving
//var RL = -1; //-1 for left; 1 for right

//Allows you to use paper within javascript
paper.install(window);
//var count = 150;
//var coherence = .5;
//var RL = 1;
//var speed = 5;
window.onload = function RDM() {
	//creates the canvas and activates the scope to start drawing
	paper.setup('nonMotive');
	//Creates a circle with radius 1 and places it at 0,0
    var path = new Path.Circle([0, 0], 1);
    //makes the circle white with a white outline
    path.strokeColor = 'white';
    path.fillColor = 'white'

    //creates a symbol in order to make multiple dots
    var symbol = new Symbol(path);

    //Loop that creats all the dots (# = count) and randomly 
    // place them on the canvas
    for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = [view.size.width*Math.random(),view.size.width*Math.random()];
	    symbol.place(center);
	}

    //onFrame gets called 60 times per sec; creates the animation/motion
    view.onFrame = function(event) {
        // Loop to take each dot 1 at a time for the animation/motion
        for (var i = 0; i < count; i++) {
            var item = project.activeLayer.children[i];
            // Take coherence and make that proportion of the dots move 
        	// right or left depending on RL: -1 is left, 1 is right
            if(i < coherence*count){
                item.position.x += (speed/4)*RL
            }
	        // Randomly choose to move the item some distance to the left or right
	        item.position.x += (Math.random()*speed)-(Math.random()*speed);
	        // Randomly choose to move the item some distance to the up or down
	        item.position.y += (Math.random()*speed)-(Math.random()*speed);
	        
	        // If the item has left the view on the right, move it back
	        // to the left: and the others are if its left, top, and bottom
	        if (item.bounds.left > view.size.width) {
	            item.position.x = +item.bounds.width;
	       	}
	        if (item.bounds.right < 0) {
	            item.position.x = +view.size.width;
	       	}
	        if (item.bounds.bottom < 0) {
	            item.position.y = +view.size.height;
	       	}
	        if (item.bounds.top > view.size.height) {
	            item.position.y = -item.bounds.height;
	        }
        }
   	}
}