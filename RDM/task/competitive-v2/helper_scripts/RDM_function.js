function RDM(coherence, RL, speed) {


	// The amount of circles we want to make:
	var count = 150;
	//var coherence = .5; percent of dots moving in same direction
	//var speed = 35; number of pixels dots are moving
	//var RL = 1 //-1 for left; 1 for right


	// Create a symbol, which we will use to place instances of later:
	var path = new Path.Circle({
		center: [0, 0],
		radius: 4,
		fillColor: 'black',
		strokeColor: 'black'
	});

	var symbol = new Symbol(path);

	// Place the instances of the symbol:
	for (var i = 0; i < count; i++) {
		// The center position is a random point in the view:
		var center = Point.random() * view.size;
		var placedSymbol = symbol.place(center);
	}

	// The onFrame function is called up to 60 times a second:
	function onFrame(event) {
		// Run through the active layer's children list and change
		// the position of the placed symbols:
		for (var i = 0; i < count; i++) {
			var item = project.activeLayer.children[i];
			if(i < coherence*count){
			    item.position.x += (distance/2)*RL
			}
			
			// Move the item 1/20th of its width to the right. This way
			// larger circles move faster than smaller circles:
			item.position.x += (Math.random()*distance)-(Math.random()*distance);
			item.position.y += (Math.random()*distance)-(Math.random()*distance);
			
			// If the item has left the view on the right, move it back
			// to the left:
			if (item.bounds.left > view.size.width) {
				item.position.x = +item.bounds.width;
			}
			if (item.bounds.right < 1) {
				item.position.x = +view.size.width;
			}
			if (item.bounds.bottom < 1) {
				item.position.y = +view.size.height;
			}
			if (item.bounds.top > view.size.height) {
				item.position.y = -item.bounds.height;
			}
		}
	}
}