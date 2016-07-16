        var count = 150;     
    // The amount of circles we want to make:
        var coherence = .5; //percent of dots moving in same direction
        var speed = 10; //number of pixels dots are moving
        var RL = 1;//-1 for left; 1 for right
    function shapes(count){
        // Create a symbol, which we will use to place instances of later:
        var path = new Path.Circle({
            center: [0, 0],
            radius: 2,
            fillColor: 'white',
            strokeColor: 'white'
        });

        var symbol = new Symbol(path);

        // Place the instances of the symbol:
        for (var i = 0; i < count; i++) {
            // The center position is a random point in the view:
            var center = Point.random() * view.size;
            var placedSymbol = symbol.place(center);
        }
    }
    shapes(count)
    // The onFrame function is called up to 60 times a second:
    function onFrame(event) {
        // Run through the active layer's children list and change
        // the position of the placed symbols:
        for (var i = 0; i < count; i++) {
            var item = project.activeLayer.children[i];
            if(i < coherence*count){
                item.position.x += (speed/2)*RL
            }
            
            // Randomly choose to move the item some distance to the left or right
            // larger circles move faster than smaller circles:
            item.position.x += (Math.random()*speed)-(Math.random()*speed);
            // Randomly choose to move the item some distance to the up or down
            item.position.y += (Math.random()*speed)-(Math.random()*speed);
            
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