        var count = 150;     
    // The amount of circles we want to make:
        var coherence = .5; //percent of dots moving in same direction
        var speed = 10; //number of pixels dots are moving
        var RL = 1;//-1 for left; 1 for right
    function shapes(count){
        // Create a symbol, which we will use to place instances of later:
        var nums = [];
        for (var i = 0; i < count; i++) {
            nums.push(i);
        }
        var temp = nums;
        function shuffling(x) {
            for (var i = 0; i < x.length; i++) {
                var array_num = Math.ceil(Math.random()*x.length);
                x[i] = temp [array_num];
            }
            return x;
        }

        shuffling(nums);

            console.log(nums);

        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);
        var totes = [First];
        console.log(totes);
        var i = 0;
        var j = 0;



        var path = new Path.Circle({
            center: [0, 0],
            radius: 1.5,
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
        //console.log(full);
        even ++;
        if(even%2 ===0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < nums.length; i++) {
              
                shuffling(totes[i]);
                var current = totes[i][j];
                var item = project.activeLayer.children[current];
                    //console.log(item);
                    //console.log([i,j]);
                    //console.log(current);
                if (i < (count)*coherence) {
                  item.position.x += (.5)*RL;
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