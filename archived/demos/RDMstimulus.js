var nums = [];
for (var i = 0; i < count; i++) {
   nums.push(i);
}

shuffling(nums);

//console.log(nums);

var First = nums.slice(0, 50);
var Second = nums.slice(50, 100);
var Third = nums.slice(100, 151);
console.log(First);
//console.log(Second);
//console.log(Third);
var full = [First,Second,Third];
var i = 0;
var j = 0;
//console.log(shuffling(First));


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
	paper.setup('myCanvas');
	//Creates a circle with radius 1 and places it at 0,0
    var path = new Path.Circle([view.size.width*Math.random(),view.size.height*Math.random()], size);
    //makes the circle white with a white outline
    path.strokeColor = 'white';
    path.fillColor = 'white'


    //creates a symbol in order to make multiple dots
    var symbol = new Symbol(path);

    //Loop that creats all the dots (# = count) and randomly 
    // place them on the canvas
    for (var i = 0; i < count; i++) {
	    // The center position is a random point in the view:
	    var center = [view.size.width+10,view.size.height+10];
	    symbol.place(center);
	}
        var even = 0;
        console.log(RL)
    //onFrame gets called 60 times per sec; creates the animation/motion
    view.onFrame = function(event) {
        even ++;
        if(even%4 ===0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
            	for (var j = 0; j < full[i].length; j++){
            		shuffling(full[i]);
                    var current = full[i][j];
            		var item = project.activeLayer.children[current];
                    //console.log(item);
                    //console.log([i,j]);
                    //console.log(current);
            		if (j < (count/3)*coherence) {
                        //console.log(item.position.x);
            			item.position.x += (2)*RL;
                        //console.log(item.position.x);
            		} else {
            			//var center = [view.size.width*Math.random(),view.size.height*Math.random()];
            			//console.log(center);
                        item.position.x = view.size.width*Math.random();
            			item.position.y = view.size.height*Math.random();
            		}
                    // If the item has left the view on the right, move it back
                    // to the left: and the others are if its left, top, and bottom
                    if (item.bounds.left > view.size.width*1.1) {
                        item.position.x = +item.bounds.width;
                    }
                    if (item.bounds.right < 0) {
                        item.position.x = +view.size.width;
                    }
                    //if (item.bounds.bottom < 0) {
                    //    item.position.y = +view.size.height;
                    //}
                    //if (item.bounds.top > view.size.height) {
                    //    item.position.y = -item.bounds.height;
                    //}
            	}
            }
        }
   	}
}